"""
NovaVarsha AI — Agricultural Knowledge Graph & Relationship Engine
==================================================================
Lenovo Hackathon 2026

Represents explicit, verified agronomic relationships:
Location ──▶ Agro-Zone ──▶ Climate Regime ──▶ Soil Characteristic ──▶ Crop ──▶ Cultivar ──▶ Risk Constraint ──▶ Actionable Decision
"""

from typing import Dict, List, Any, Optional

GRAPH_NODES = [
    # Hubs / Locations
    {"id": "loc_gangetic", "type": "Location", "label": "Gangetic Basin (Lucknow)", "details": "District: Lucknow, UP • Lat 26.85, Lng 80.95"},
    {"id": "loc_vidarbha", "type": "Location", "label": "Vidarbha Bt Cotton Belt (Nagpur)", "details": "District: Nagpur, MH • Lat 21.15, Lng 79.09"},
    {"id": "loc_malwa", "type": "Location", "label": "Malwa Soybean Plateau (Indore)", "details": "District: Indore, MP • Lat 22.72, Lng 75.86"},
    {"id": "loc_saurashtra", "type": "Location", "label": "Saurashtra Groundnut Hub (Rajkot)", "details": "District: Rajkot, GJ • Lat 22.30, Lng 70.80"},
    {"id": "loc_bihar", "type": "Location", "label": "North Bihar Maize Belt (Samastipur)", "details": "District: Samastipur, BR • Lat 25.86, Lng 85.78"},

    # Agro Zones
    {"id": "zone_upper_gangetic", "type": "AgroZone", "label": "Upper/Middle Gangetic Plain", "details": "Alluvial deep soil, subtropical humid monsoon"},
    {"id": "zone_western_plateau", "type": "AgroZone", "label": "Western Plateau & Hills", "details": "Heavy black vertisol, semi-arid dryland"},
    {"id": "zone_central_plateau", "type": "AgroZone", "label": "Central Plateau & Hills", "details": "Medium black clay loam, rainfed plateau"},
    {"id": "zone_gujarat_plains", "type": "AgroZone", "label": "Gujarat Plains & Hills", "details": "Sandy loam to medium black, arid-semiarid"},

    # Soils
    {"id": "soil_alluvial_deep", "type": "SoilType", "label": "Deep Alluvial Clay Loam", "details": "High water retention (0.35 field capacity), pH 7.2"},
    {"id": "soil_black_vertisol", "type": "SoilType", "label": "Black Cotton Soil (Vertisol)", "details": "Deep swelling montmorillonite clay, prone to waterlogging"},
    {"id": "soil_sandy_loam", "type": "SoilType", "label": "Calcareous Sandy Loam", "details": "Fast infiltration (0.22 field capacity), susceptible to drought"},

    # Crops
    {"id": "crop_rice", "type": "Crop", "label": "Paddy (Rice)", "details": "Cereal • Kharif • Water Need: 1100–1250 mm"},
    {"id": "crop_soybean", "type": "Crop", "label": "Soybean", "details": "Oilseed / Legume • Kharif • Water Need: 450–650 mm"},
    {"id": "crop_cotton", "type": "Crop", "label": "Bt Cotton", "details": "Commercial Fibre • Kharif • Water Need: 650–850 mm"},
    {"id": "crop_groundnut", "type": "Crop", "label": "Groundnut", "details": "Oilseed • Kharif • Water Need: 400–550 mm"},

    # Verified Cultivars
    {"id": "var_swarna", "type": "Cultivar", "label": "Swarna (MTU-7029)", "details": "Duration: 140d • ICAR-NRRI verified • Standing water tolerant"},
    {"id": "var_sahbhagi", "type": "Cultivar", "label": "Sahbhagi Dhan", "details": "Duration: 105d • Aerobic drought-hardy (qDTY gene)"},
    {"id": "var_js2034", "type": "Cultivar", "label": "JS-20-34", "details": "Duration: 90d • ICAR-IISR verified • YMV resistant"},
    {"id": "var_btcotton", "type": "Cultivar", "label": "Bollgard II Hybrid", "details": "Duration: 155d • CICR Nagpur • Furrow drainage required"},

    # Risk Constraints
    {"id": "risk_moisture_stress", "type": "RiskConstraint", "label": "Terminal Moisture Deficit Risk", "details": "Yield drops 40% if dry break >10d occurs at panicle stage"},
    {"id": "risk_waterlogging", "type": "RiskConstraint", "label": "Waterlogging Root Asphyxia", "details": "Soybean/Cotton roots rot if submerged >48 hours"},
    {"id": "risk_heat_stress", "type": "RiskConstraint", "label": "High Thermal Spike (>35°C)", "details": "Reduces pollen viability and grain filling rate"},

    # Recommendations
    {"id": "rec_swarna_paddy", "type": "Recommendation", "label": "Sow Swarna MTU-7029 with Bunding", "details": "Maintain 3 cm water standing; schedule urea split in 3 doses"},
    {"id": "rec_sahbhagi_dsr", "type": "Recommendation", "label": "Direct Seed Sahbhagi Dhan (DSR)", "details": "Saves 30% water, survives up to 14 days dry break"},
    {"id": "rec_soybean_bbf", "type": "Recommendation", "label": "Plant JS-20-34 on Broad Bed Furrow (BBF)", "details": "Guarantees drainage under sudden monsoon deluge"}
]

GRAPH_EDGES = [
    # Gangetic
    {"source": "loc_gangetic", "target": "zone_upper_gangetic", "relation": "situated_in"},
    {"source": "zone_upper_gangetic", "target": "soil_alluvial_deep", "relation": "predominant_soil"},
    {"source": "soil_alluvial_deep", "target": "crop_rice", "relation": "ideal_edaphic_match"},
    {"source": "crop_rice", "target": "var_swarna", "relation": "has_verified_cultivar"},
    {"source": "crop_rice", "target": "var_sahbhagi", "relation": "has_contingency_cultivar"},
    {"source": "var_swarna", "target": "risk_moisture_stress", "relation": "vulnerable_to"},
    {"source": "var_swarna", "target": "rec_swarna_paddy", "relation": "generates_action"},
    {"source": "var_sahbhagi", "target": "rec_sahbhagi_dsr", "relation": "generates_action"},

    # Vidarbha
    {"source": "loc_vidarbha", "target": "zone_western_plateau", "relation": "situated_in"},
    {"source": "zone_western_plateau", "target": "soil_black_vertisol", "relation": "predominant_soil"},
    {"source": "soil_black_vertisol", "target": "crop_cotton", "relation": "ideal_edaphic_match"},
    {"source": "crop_cotton", "target": "var_btcotton", "relation": "has_verified_cultivar"},
    {"source": "var_btcotton", "target": "risk_waterlogging", "relation": "vulnerable_to"},

    # Malwa
    {"source": "loc_malwa", "target": "zone_central_plateau", "relation": "situated_in"},
    {"source": "zone_central_plateau", "target": "soil_black_vertisol", "relation": "predominant_soil"},
    {"source": "soil_black_vertisol", "target": "crop_soybean", "relation": "ideal_edaphic_match"},
    {"source": "crop_soybean", "target": "var_js2034", "relation": "has_verified_cultivar"},
    {"source": "var_js2034", "target": "risk_waterlogging", "relation": "vulnerable_to"},
    {"source": "var_js2034", "target": "rec_soybean_bbf", "relation": "generates_action"}
]


def get_trail_for_hub(hub_id: str) -> Dict[str, Any]:
    hub_map = {
        "gangetic": "loc_gangetic",
        "vidarbha": "loc_vidarbha",
        "malwa": "loc_malwa",
        "saurashtra": "loc_saurashtra",
        "bihar": "loc_bihar"
    }
    start_node_id = hub_map.get(hub_id, "loc_gangetic")

    # Traverse downstream edges
    active_nodes = {start_node_id}
    trail_edges = []
    
    current_front = {start_node_id}
    for _ in range(5):
        next_front = set()
        for edge in GRAPH_EDGES:
            if edge["source"] in current_front:
                trail_edges.append(edge)
                next_front.add(edge["target"])
                active_nodes.add(edge["target"])
        current_front = next_front

    relevant_nodes = [n for n in GRAPH_NODES if n["id"] in active_nodes]
    
    return {
        "hub_id": hub_id,
        "nodes": relevant_nodes,
        "edges": trail_edges,
        "trail_summary": " -> ".join([n["label"] for n in relevant_nodes if n["type"] in ["Location", "Crop", "Cultivar", "Recommendation"]])
    }
