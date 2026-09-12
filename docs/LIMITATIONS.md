# NovaVarsha AI — Known Limitations & System Boundaries
**Lenovo Hackathon 2026**

In alignment with scientific integrity and the Master Quality Gate, NovaVarsha AI explicitly documents its technical limitations rather than over-promising or fabricating capabilities.

## 1. Meteorological Limits
- **Forecast Horizon**: Numerical weather predictions (NWP) exhibit degrading skill beyond Day 7. While 14-day outlooks are displayed, confidence scores drop below 60% after Day 8 and are explicitly flagged with wider uncertainty intervals.
- **Micro-Convective Storms**: Isolated localized thunderstorm events (<5 km radius) in complex hilly terrain (e.g. Western Ghats, Himachal Pradesh) have higher forecast uncertainty compared to synoptic-scale monsoon depressions.

## 2. Remote Sensing & Satellite Latency
- **Cloud Masking**: During active monsoon months (July–August), optical satellite sensors (Sentinel-2, Landsat-8) suffer from high cloud obscuration. When valid surface reflectance cannot be calculated, the platform displays an honest `UNAVAILABLE (Cloud Masked)` state rather than inventing synthetic vegetation indices.
- **Revisit Frequency**: Satellite vegetation indices (NDVI/NDWI) have a 5-day orbital revisit cycle; real-time intraday vegetation changes are not technically observable via optical remote sensing.

## 3. Agronomic Decision Boundaries
- **No Yield Guarantees**: Crop recommendations provide agro-climatic suitability scoring based on weather, thermal windows, and water availability. They do not constitute guaranteed harvest or financial insurance contracts.
- **Soil Micro-Nutrient Variance**: While broad regional soil classifications (Alluvial, Black Cotton, Red Sandy) are applied based on ICAR soil surveys, field-level micro-nutrient deficiencies (e.g., Zinc, Boron) require individual laboratory Soil Health Card tests.
