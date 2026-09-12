"""
NovaVarsha AI — Context-Aware RAG Engine (Retrieval-Augmented Generation)
========================================================================
Lenovo Hackathon 2026

Retrieves evidence passages from authoritative Government, ICAR, IMD,
and CRIDA publications. Supports intent-aware routing and returns
evidence citations with confidence scores.
"""

from typing import Dict, List, Any, Optional
import re

KNOWLEDGE_DOCUMENTS = [
    {
        "doc_id": "DOC-ICAR-01",
        "title": "ICAR Handbook of Agriculture: Field Crops & Soil Water Dynamics",
        "authority": "Indian Council of Agricultural Research (ICAR), New Delhi",
        "year": "2023 (7th Ed.)",
        "passages": [
            {
                "id": "ICAR-P1",
                "topic": "crop_selection",
                "keywords": ["paddy", "rice", "swarna", "water", "irrigation", "clay", "kharif", "loam"],
                "text": "For medium to low-land alluvial and clay soils in Gangetic and Eastern plains, Swarna (MTU-7029) requires 1100–1250 mm total water with 2–5 cm standing water during vegetative tillering. Sowing should conclude between June 10 and July 25. For rainfed uplands prone to dry breaks, aerobic drought-tolerant cultivars like Sahbhagi Dhan reduce water requirement by 35% and mature in 105 days.",
                "action": "Select Swarna for assured irrigation or Sahbhagi Dhan for rainfed conditions."
            },
            {
                "id": "ICAR-P2",
                "topic": "crop_selection",
                "keywords": ["soybean", "cotton", "malwa", "vidarbha", "vertisol", "black soil", "drainage"],
                "text": "Soybean (JS-20-34 / JS-95-60) in Central Indian Vertisols requires 450–650 mm rainfall. It is susceptible to water stagnation exceeding 48 hours. Broad bed and furrow (BBF) systems at 1.5 m intervals reduce root rot and increase seed yield by 18–22% under erratic monsoon bursts.",
                "action": "Adopt BBF cultivation and avoid sowing if soil moisture is below 60% field capacity."
            }
        ]
    },
    {
        "doc_id": "DOC-CRIDA-02",
        "title": "CRIDA Contingency Plans for Rainfed Agro-Ecosystems",
        "authority": "Central Research Institute for Dryland Agriculture (CRIDA), Hyderabad",
        "year": "2022",
        "passages": [
            {
                "id": "CRIDA-P1",
                "topic": "weather_irrigation",
                "keywords": ["dry spell", "dry break", "drought", "moisture", "delayed monsoon", "rain deficit"],
                "text": "When a dry break exceeds 8–10 days during vegetative growth in Kharif crops: 1) Apply life-saving protective irrigation via farm ponds using drip or micro-sprinklers; 2) Spray 2% urea or 1% potassium nitrate (KNO3) to mitigate canopy dehydration; 3) Provide dust mulching by shallow inter-culture to break soil capillary pores.",
                "action": "Execute foliar spray of 1% KNO3 and implement in-situ dust mulching immediately."
            },
            {
                "id": "CRIDA-P2",
                "topic": "weather_irrigation",
                "keywords": ["heavy rain", "waterlogging", "flood", "drainage", "excess rain", "root rot"],
                "text": "Under extreme precipitation events (>65 mm/24h) leading to field inundation: Open secondary and perimeter drainage furrows immediately. Avoid chemical top-dressing until standing water subsides. Apply bio-fungicide Trichoderma viride @ 2.5 kg/ha mixed in 50 kg FYM around root zones once drained.",
                "action": "Clear drainage channels to eliminate standing water within 24–36 hours."
            }
        ]
    },
    {
        "doc_id": "DOC-NRRI-03",
        "title": "ICAR-NRRI Cuttack: Rice Cultivar Directory & Aerobic Production",
        "authority": "National Rice Research Institute (NRRI), Cuttack",
        "year": "2023",
        "passages": [
            {
                "id": "NRRI-P1",
                "topic": "crop_selection",
                "keywords": ["rice", "cultivar", "direct seeded", "dsr", "sahbhagi", "sub1", "flood"],
                "text": "Direct Seeded Rice (DSR) using Sahbhagi Dhan or CR Dhan 201 saves up to 30% irrigation water and 12–15 tractor days compared to puddled transplanting. In coastal or flood-prone delta zones, Swarna-Sub1 provides submergence tolerance for up to 14 days under completely inundated flash floods without mortality.",
                "action": "In flood-prone belts use Swarna-Sub1; in moisture-stressed tracts use Sahbhagi Dhan via DSR."
            }
        ]
    },
    {
        "doc_id": "DOC-GOV-05",
        "title": "Pradhan Mantri Fasal Bima Yojana (PMFBY) Operational Guidelines",
        "authority": "Ministry of Agriculture & Farmers Welfare, GoI",
        "year": "2024",
        "passages": [
            {
                "id": "PMFBY-P1",
                "topic": "govt_schemes",
                "keywords": ["insurance", "pmfby", "claim", "loss", "calamity", "drought", "cyclone", "compensation"],
                "text": "Under PMFBY, farmers pay a uniform premium of only 2% for all Kharif food and oilseed crops, and 1.5% for Rabi crops. Localized calamities (hailstorm, landslide, inundation, cloudburst) must be reported within 72 hours via the Crop Insurance App or local Agriculture Officer to trigger on-field individual survey.",
                "action": "Report localized weather damage within 72 hours via PMFBY app or toll-free helpline 14447."
            },
            {
                "id": "PMFBY-P2",
                "topic": "govt_schemes",
                "keywords": ["prevented sowing", "delayed monsoon", "sowing failure"],
                "text": "In case of adverse weather conditions (deficit rainfall or prolonged dry spells) where widespread prevented sowing occurs in over 75% of the notified area, insured farmers are eligible for immediate indemnity claims up to 25% of the sum insured without waiting for end-of-season harvest.",
                "action": "Submit prevented sowing notification through the district Agriculture Technology Management Agency (ATMA)."
            }
        ]
    },
    {
        "doc_id": "DOC-IARI-07",
        "title": "IARI Pusa Diagnostic Manual for Kharif Pests & Integrated Pest Management",
        "authority": "ICAR-Indian Agricultural Research Institute (IARI), Pusa",
        "year": "2023",
        "passages": [
            {
                "id": "IARI-P1",
                "topic": "pest_disease",
                "keywords": ["pest", "disease", "stem borer", "blast", "fungus", "humidity", "leaf folder", "bollworm"],
                "text": "Relative humidity >85% coupled with temperatures between 24°C–28°C significantly elevates blast (Magnaporthe oryzae) risk in paddy and whitefly incidence in cotton. Install pheromone traps @ 5 traps/ha for monitoring. Avoid excess nitrogenous fertilizer (split N into 3 stages) to inhibit succulent pest feeding.",
                "action": "Install 5 pheromone traps/ha and delay nitrogen top-dressing during high humidity overcast spells."
            }
        ]
    }
]


def classify_query_intent(query: str) -> str:
    q = query.lower()
    if any(k in q for k in ["insurance", "pmfby", "scheme", "subsidy", "claim", "pm kisan", "government", "मुआवजा", "बीमा", "योजना"]):
        return "govt_schemes"
    elif any(k in q for k in ["pest", "disease", "fungus", "insect", "spray", "worm", "कीट", "रोग", "दवा"]):
        return "pest_disease"
    elif any(k in q for k in ["scenario", "what if", "simulate", "forecast 10 days", "dry break", "कम बारिश"]):
        return "scenario_simulation"
    elif any(k in q for k in ["rain", "rainy", "irrigate", "drought", "flood", "water", "मौसम", "सिंचाई", "सूखा"]):
        return "weather_irrigation"
    elif any(k in q for k in ["crop", "seed", "variety", "cultivar", "sow", "फसल", "बीज", "किस्म", "बुवाई"]):
        return "crop_selection"
    else:
        return "general_agronomy"


def retrieve_relevant_passages(query: str, top_k: int = 2) -> List[Dict[str, Any]]:
    tokens = set(re.findall(r'\w+', query.lower()))
    intent = classify_query_intent(query)
    
    scored_passages = []
    for doc in KNOWLEDGE_DOCUMENTS:
        for p in doc["passages"]:
            score = 0.0
            # Intent match bonus
            if p["topic"] == intent:
                score += 3.0
            # Keyword matches
            for kw in p["keywords"]:
                if kw in query.lower():
                    score += 2.0
            # Word token overlap
            passage_words = set(re.findall(r'\w+', p["text"].lower()))
            overlap = len(tokens.intersection(passage_words))
            score += overlap * 0.4

            if score > 1.0:
                scored_passages.append({
                    "doc_id": doc["doc_id"],
                    "doc_title": doc["title"],
                    "authority": doc["authority"],
                    "year": doc["year"],
                    "passage_id": p["id"],
                    "topic": p["topic"],
                    "text": p["text"],
                    "action": p["action"],
                    "relevance_score": round(score, 2),
                    "confidence": f"{min(98, int(60 + score * 6))}%"
                })

    scored_passages.sort(key=lambda x: x["relevance_score"], reverse=True)
    return scored_passages[:top_k]


def answer_agronomic_query(query: str, lang: str = "en") -> Dict[str, Any]:
    intent = classify_query_intent(query)
    passages = retrieve_relevant_passages(query, top_k=2)

    if not passages:
        if lang == "hi":
            answer = "उपलब्ध प्रमाणित ICAR / IMD दस्तावेजों में इस विशिष्ट प्रश्न के लिए पर्याप्त निर्णायक डेटा उपलब्ध नहीं है। कृपया स्थानीय कृषि विज्ञान केंद्र (KVK) से संपर्क करें।"
        else:
            answer = "Evidence is insufficient in curated ICAR / IMD authoritative publications for this exact query. We recommend consulting your local Krishi Vigyan Kendra (KVK) for specialized guidance."
        citations = []
        suggested_actions = ["Check local KVK directory", "Verify Soil Health Card parameters"]
    else:
        best = passages[0]
        citations = [
            {
                "doc_id": best["doc_id"],
                "citation": f"[{best['doc_id']} — {best['authority']}]",
                "title": best["doc_title"],
                "excerpt": best["text"][:140] + "...",
                "confidence": best["confidence"]
            }
        ]
        if len(passages) > 1:
            citations.append({
                "doc_id": passages[1]["doc_id"],
                "citation": f"[{passages[1]['doc_id']} — {passages[1]['authority']}]",
                "title": passages[1]["doc_title"],
                "excerpt": passages[1]["text"][:140] + "...",
                "confidence": passages[1]["confidence"]
            })

        if lang == "hi":
            answer = f"प्रमाणित कृषि अनुसंधान ({best['doc_id']}) के अनुसार: {best['text']}। अनुशंसित कदम: {best['action']}"
        else:
            answer = f"According to verified agronomic research ({best['doc_id']}): {best['text']} Recommended Action: {best['action']}"
        
        suggested_actions = [best["action"]]

    return {
        "query": query,
        "language": lang,
        "intent": intent,
        "answer": answer,
        "citations": citations,
        "suggested_actions": suggested_actions,
        "passages": passages
    }
