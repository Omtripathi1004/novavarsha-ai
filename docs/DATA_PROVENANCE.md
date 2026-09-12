# NovaVarsha AI — Data Provenance & Lineage
**Lenovo Hackathon 2026**

Every data card and prediction in NovaVarsha AI strictly enforces data provenance, transparency, and traceability. Simulated or synthetic numbers are never presented as live observations.

## 1. Upstream Data Sources

| Domain | Primary Authority / Provider | Resolution / Frequency | Purpose in NovaVarsha AI |
| :--- | :--- | :--- | :--- |
| **National Boundaries** | Survey of India (SOI) & Department of Science and Technology (DST) | Vector Polygons (1:50,000) | Sovereign official borders for India, all 36 States/UTs, J&K, Ladakh, Arunachal Pradesh. |
| **Administrative Units** | Local Government Directory (LGD), Ministry of Panchayati Raj, GoI | 766 Districts, 6,700+ Blocks, 255k+ Gram Panchayats | Official administrative coding, hierarchical drill-down, and location validation. |
| **Surface Weather** | India Meteorological Department (IMD) / Open-Meteo High-Resolution Grids | 1 km – 5 km spatial grid / Hourly updates | Live telemetry: 2m Temperature, Relative Humidity, 10m Wind Speed, Surface Pressure, Rain Rate. |
| **Historical Climate Baseline** | IMD 30-Year Climatological Normals (1991–2020) & 10-Year Daily Archive | Daily records (2015–2024) | Rainfall anomalies (%), active-break monsoon cycles, and thermal degree day thresholds. |
| **Teleconnections** | NOAA Climate Prediction Center (CPC) & BOM Australia | Monthly & Pentad Updates | Oceanic Niño Index (ENSO ONI), Dipole Mode Index (IOD DMI), Madden-Julian Oscillation (MJO). |
| **Agro-Climatic Cultivars** | ICAR, CRIDA, NRRI, IARI, & State Agricultural Universities (SAUs) | Curated peer-reviewed cultivar trials | 25+ verified cultivars, thermal bounds, optimal water needs (mm), sowing dates, and stress ratings. |
| **Satellite Vegetation** | Copernicus Sentinel-2 / USGS Landsat-8 (Adapter Ready) | 10m – 30m / 5-day revisit | NDVI (Normalized Difference Vegetation Index) & NDWI (Normalized Difference Water Index). |

## 2. Integrity & Validation Gates

1. **Range Feasibility Check**:
   - Temperature readings outside -15°C to 55°C trigger anomaly flags.
   - Relative humidity readings outside 5% to 100% trigger sensor health warnings.
   - Daily precipitation above 450 mm is tagged as Extreme Synoptic Event.
2. **Freshness TTLs**:
   - Live Weather: Max 30 minutes freshness TTL.
   - 7-Day Forecast: Max 3 hours freshness TTL.
   - Historical Baselines: Immutable reference.
3. **Data Health States**:
   - `HEALTHY`: Live feed responsive, within variance bounds.
   - `CACHED`: Upstream network timeout; serving verified cached snapshot (timestamped).
   - `DEMO`: Offline deterministic dataset clearly tagged for evaluation.
