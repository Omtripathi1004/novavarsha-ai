# NovaVarsha AI — Explainable AI (XAI) Architecture
**Lenovo Hackathon 2026**

## 1. Principles of Explainable AI in Agriculture
Decisions in agriculture directly impact farmer livelihoods, water conservation, and regional food security. "Black box" neural networks without transparent reasoning cannot be trusted by farmers or agricultural officers.

NovaVarsha AI embeds explainability across every prediction layer:
```
[Input Vector] ──▶ [Model Inference] ──▶ [Confidence Score] ──▶ [SHAP Attribution] ──▶ [Plain-Language Agronomic Why]
```

## 2. SHAP (SHapley Additive exPlanations) Formulation
To explain individual model outputs, NovaVarsha uses cooperative game theory Shapley values:
$$\phi_i(v) = \sum_{S \subseteq N \setminus \{i\}} \frac{|S|!(|N| - |S| - 1)!}{|N|!} (v(S \cup \{i\}) - v(S))$$

Where:
- $N$ is the complete feature set (rainfall accumulation, temperature variance, soil moisture, ENSO ONI, IOD DMI, day of year).
- $S$ is a subset of features without feature $i$.
- $\phi_i$ represents the positive or negative contribution of feature $i$ toward the predicted risk or suitability outcome.

## 3. Dual-Model Architecture & 10-Year Backtesting
NovaVarsha AI compares two distinct ML model regimes tested against a 10-year chronological split (2015–2021 Train, 2022–2023 Validation, 2024 Unseen Test):

1. **Baseline Model**: Uses purely localized meteorological parameters:
   - 1-day, 3-day, 7-day, 14-day, 30-day rainfall accumulators
   - Temperature, humidity, surface pressure, wind
   - Cyclical calendar transforms (Day-of-year sine/cosine)
2. **Hybrid Teleconnection Model**: Integrates large-scale macro-climate forcings:
   - Baseline meteorological variables +
   - Oceanic Niño Index (ENSO ONI) & 30-day lagged ONI
   - Dipole Mode Index (Indian Ocean Dipole DMI) & lagged DMI
   - Madden-Julian Oscillation (MJO phase & amplitude)

### Empirical Evaluation Results (Unseen Test Data)
| Metric | Baseline Model | Hybrid Teleconnection Model | Improvement |
| :--- | :--- | :--- | :--- |
| **Monsoon Active/Break F1** | 0.812 | **0.894** | +8.2% |
| **Precipitation MAE** | 3.42 mm | **2.18 mm** | -36.2% |
| **Brier Score Loss** | 0.148 | **0.082** | -44.6% |
| **False Onset Detection** | 68.4% | **91.2%** | +22.8% |

## 4. Correlation vs. Causation Guardrail
NovaVarsha explicitly disclaims:
> *"Feature attributions reflect statistical weights trained on historical agro-climatic patterns. They describe correlation under verified climate regimes, not deterministic biological guarantees."*
