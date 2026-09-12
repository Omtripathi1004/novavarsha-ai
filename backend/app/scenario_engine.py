"""
NovaVarsha AI — What-If Agriculture Scenario Simulation Engine
=============================================================
Lenovo Hackathon 2026

Simulates farmer and officer climate scenarios:
- Rainfall deviation (-50% to +100%)
- Temperature offset (-4°C to +6°C)
- Sowing date shift (-30 days to +30 days)
- Water availability (Rainfed, Canal, Tube-well, Drip Irrigation)
- Crop and cultivar selection

Computes:
1. Baseline vs. Scenario Suitability Score
2. Baseline vs. Scenario Composite Agricultural Risk
3. Sensitivity ranking (which parameter had the largest impact)
4. Plain-language agronomic explanation and contingency actions
"""

from typing import Dict, Any, List
import math


def simulate_scenario(
    baseline_temp: float,
    baseline_rain_mm: float,
    temp_offset: float,
    rain_percent_delta: float,
    sowing_shift_days: int,
    water_source: str,
    crop_id: str = "rice",
    variety_name: str = "Swarna (MTU-7029)"
) -> Dict[str, Any]:
    # Scenario simulated meteorology
    sim_temp = round(baseline_temp + temp_offset, 1)
    sim_rain = max(0.0, round(baseline_rain_mm * (1.0 + (rain_percent_delta / 100.0)), 1))

    # Water source buffer factor
    water_buffers = {
        "Drip Irrigation": 0.85,
        "Canal Irrigation": 0.70,
        "Tube-well / Borewell": 0.65,
        "Rainfed / Natural Only": 0.20
    }
    water_buffer = water_buffers.get(water_source, 0.40)

    # 1. Base Suitability Calculation
    # Rice optimal ~24-32°C, optimal rain ~800-1200mm
    # Temperature penalty
    temp_penalty = 0.0
    if sim_temp > 34.0:
        temp_penalty = (sim_temp - 34.0) * 8.5
    elif sim_temp < 20.0:
        temp_penalty = (20.0 - sim_temp) * 9.0

    # Rain penalty (mitigated by water source)
    rain_ratio = (sim_rain / (baseline_rain_mm if baseline_rain_mm > 0 else 1.0))
    rain_penalty = 0.0
    if rain_percent_delta < -20:
        raw_deficit = abs(rain_percent_delta + 20)
        rain_penalty = raw_deficit * (1.0 - water_buffer * 0.7) * 0.75
    elif rain_percent_delta > 60:
        # Waterlogging / flood risk
        rain_penalty = (rain_percent_delta - 60) * 0.65

    # Sowing shift penalty (flowering into heat/frost)
    sow_penalty = abs(sowing_shift_days) * 0.8

    # Suitability (0 - 100)
    base_suit = 88.0
    scenario_suitability = max(12.0, min(98.0, round(base_suit - temp_penalty - rain_penalty - sow_penalty, 1)))
    baseline_suitability = 86.0
    suitability_delta = round(scenario_suitability - baseline_suitability, 1)

    # 2. Agricultural Composite Risk Score (0 - 100)
    # Decomposed into components:
    # - Rainfall Stress (25%)
    # - Temperature Stress (20%)
    # - Water Availability Stress (20%)
    # - Sowing Window Misalignment (15%)
    # - Forecast Uncertainty (10%)
    # - Flood / Waterlogging Hazard (10%)
    
    r_stress = min(100.0, max(5.0, abs(rain_percent_delta) * 0.9 + (20 if rain_percent_delta < -25 else 0)))
    t_stress = min(100.0, max(5.0, max(0.0, sim_temp - 30.0) * 12.0 + max(0.0, 22.0 - sim_temp) * 8.0))
    w_stress = min(100.0, max(5.0, (1.0 - water_buffer) * 75.0 + (15 if rain_percent_delta < -30 else 0)))
    s_stress = min(100.0, max(5.0, abs(sowing_shift_days) * 2.8))
    f_hazard = min(100.0, max(0.0, (rain_percent_delta - 40.0) * 1.5)) if rain_percent_delta > 40 else 5.0
    u_stress = 18.0 + abs(rain_percent_delta) * 0.08  # model uncertainty

    composite_risk = round(
        (r_stress * 0.25) +
        (t_stress * 0.20) +
        (w_stress * 0.20) +
        (s_stress * 0.15) +
        (f_hazard * 0.10) +
        (u_stress * 0.10),
        1
    )
    baseline_risk = 32.0
    risk_delta = round(composite_risk - baseline_risk, 1)

    # 3. Sensitivity Ranking: Which factor drove the largest deviation?
    sensitivities = [
        {"factor": "Rainfall Deficit / Surplus", "impact": round(r_stress * 0.25, 1), "unit": f"{rain_percent_delta:+d}%"},
        {"factor": "Thermal Deviation", "impact": round(t_stress * 0.20, 1), "unit": f"{temp_offset:+0.1f}°C"},
        {"factor": "Water Source Resilience", "impact": round(w_stress * 0.20, 1), "unit": water_source},
        {"factor": "Sowing Date Shift", "impact": round(s_stress * 0.15, 1), "unit": f"{sowing_shift_days:+d} days"},
    ]
    sensitivities.sort(key=lambda x: x["impact"], reverse=True)
    primary_driver = sensitivities[0]["factor"]

    # 4. Plain-Language Agronomic Impact Rationale
    explanations = []
    mitigations = []

    if rain_percent_delta <= -25:
        explanations.append(f"Rainfall deficit of {abs(rain_percent_delta)}% induces severe root-zone moisture stress during tillering.")
        if water_source == "Rainfed / Natural Only":
            mitigations.append("Rainfed cultivation is high-risk under this scenario. Switch to drought-hardy cultivar like Sahbhagi Dhan or JS-20-34.")
            mitigations.append("Adopt broad bed and furrow (BBF) or in-situ conservation furrows to conserve soil moisture.")
        else:
            mitigations.append(f"Utilize {water_source} with deficit irrigation scheduling during critical panicle initiation.")
    elif rain_percent_delta >= 40:
        explanations.append(f"Rainfall surplus of +{rain_percent_delta}% creates saturation risk and root hypoxia in heavy clay soils.")
        mitigations.append("Provide active surface drainage channels to prevent water stagnation exceeding 48 hours.")
        mitigations.append("Pre-treat seeds with Trichoderma viride to prevent fungal damping-off under saturated humidity.")

    if temp_offset >= 2.0:
        explanations.append(f"Elevated temperatures (+{temp_offset}°C) accelerate vegetative maturity by 6-9 days, reducing spikelet fertility.")
        mitigations.append("Apply 0.5% potassium chloride (KCl) or zinc sulfate spray to reduce canopy heat load.")
    elif temp_offset <= -2.0:
        explanations.append(f"Lower temperatures ({temp_offset}°C) delay germination and extend vegetative duration.")

    if abs(sowing_shift_days) >= 14:
        direction = "delayed" if sowing_shift_days > 0 else "early"
        explanations.append(f"Sowing {direction} by {abs(sowing_shift_days)} days shifts the reproductive phase away from optimal seasonal photoperiod.")
        mitigations.append("Select short-duration variety (105-115 days) to ensure harvest completes before terminal dry stress.")

    if not explanations:
        explanations.append("Scenario conditions remain within acceptable agro-climatic tolerance boundaries.")
        mitigations.append("Maintain standard package of practices recommended by ICAR for this agro-zone.")

    return {
        "scenario_inputs": {
            "baseline_temp": baseline_temp,
            "sim_temp": sim_temp,
            "temp_offset": temp_offset,
            "baseline_rain_mm": baseline_rain_mm,
            "sim_rain_mm": sim_rain,
            "rain_percent_delta": rain_percent_delta,
            "sowing_shift_days": sowing_shift_days,
            "water_source": water_source,
            "crop_id": crop_id,
            "variety_name": variety_name
        },
        "results": {
            "baseline_suitability": baseline_suitability,
            "scenario_suitability": scenario_suitability,
            "suitability_delta": suitability_delta,
            "baseline_risk": baseline_risk,
            "composite_risk": composite_risk,
            "risk_delta": risk_delta,
            "risk_category": "High Risk" if composite_risk >= 65 else ("Moderate Risk" if composite_risk >= 40 else "Low / Safe"),
            "component_breakdown": {
                "rainfall_stress": round(r_stress, 1),
                "thermal_stress": round(t_stress, 1),
                "water_availability_stress": round(w_stress, 1),
                "sowing_window_stress": round(s_stress, 1),
                "flood_hazard": round(f_hazard, 1),
                "forecast_uncertainty": round(u_stress, 1)
            }
        },
        "sensitivity_ranking": sensitivities,
        "primary_driver": primary_driver,
        "plain_language_impact": " ".join(explanations),
        "contingency_mitigations": mitigations
    }
