# NovaVarsha AI — Context-Aware RAG Knowledge Corpus
**Lenovo Hackathon 2026**

The NovaVarsha AI RAG (Retrieval-Augmented Generation) assistant does not fabricate answers or hallucinate dosages. Every response is grounded in curated, authoritative agronomic, meteorological, and governmental publications.

## 1. Curated Document Corpus

| Corpus ID | Document Title & Issuing Authority | Year / Version | Core Knowledge Domain |
| :--- | :--- | :--- | :--- |
| **DOC-ICAR-01** | ICAR Handbook of Agriculture (Field Crops & Dryland Systems) | 7th Edition (ICAR, New Delhi) | Cultivar thermal thresholds, crop water requirements (CWR), and intercropping protocols. |
| **DOC-CRIDA-02** | CRIDA Contingency Plans for Rainfed Agro-Ecosystems | Ministry of Agriculture, GoI | Emergency measures for delayed monsoon onset, extended dry breaks (>10 days), and terminal heat stress. |
| **DOC-NRRI-03** | ICAR-NRRI Cuttack: Rice Cultivar Guidelines & Aerobic Varieties | ICAR-NRRI Bulletin 2023 | Direct Seeded Rice (DSR) protocols, drought-tolerant varieties (Sahbhagi Dhan, Swarna-Sub1), and water-budgeting. |
| **DOC-IMD-04** | IMD Agro-Meteorological Advisory Service Standard Operating Procedures | IMD Pune / MoES | Weather forecast interpretation, agro-met advisory generation, and heavy rainfall threshold action tables. |
| **DOC-GOV-05** | Pradhan Mantri Fasal Bima Yojana (PMFBY) Operational Guidelines | Dept of Agriculture & Farmers Welfare, GoI | Crop insurance coverage, localized calamity claims, delayed sowing compensation, and mandatory notification windows. |
| **DOC-GOV-06** | PM-KISAN & Soil Health Card Scheme Operational Manual | Ministry of Agriculture & Farmers Welfare | Fertilizer dosage calculations, macro/micro nutrient replenishment, and digital direct benefit transfer rules. |
| **DOC-IARI-07** | IARI Pusa Diagnostic Manual for Kharif & Rabi Pests and Pathogens | Division of Plant Pathology, ICAR-IARI | Non-chemical pest thresholds, bio-control agents, and weather-triggered fungal infection risks. |

## 2. Intent-Aware Routing Architecture
Queries submitted to the Assistant are classified across 8 specialized agronomic intents:
1. `crop_selection`: Cultivar suitability, soil match, and sowing window validation.
2. `weather_irrigation`: Rainfall forecast, dry break advisories, water budgeting.
3. `pest_disease`: Humidity/temperature triggered fungal/insect advisories.
4. `govt_schemes`: PMFBY, PM-KISAN, subsidy procedures, and compensation windows.
5. `scenario_simulation`: What-If hypothetical questions routed directly to the Scenario Lab.
6. `disaster_relief`: Flood runoff, waterlogging drainage, cyclone mitigation.
7. `report_generation`: Automated triggers to generate official PDF briefing.
8. `general_agronomy`: Soil tillage, seed rate, bio-fertilizer usage.

## 3. Evidence Presentation & Citation Drawer
When an answer is synthesized:
- Clickable citation badges (e.g. `[Source: DOC-CRIDA-02 §4.2]`) appear inline.
- An interactive **Evidence Drawer** slides out displaying the exact excerpt, document title, and confidence match score.
