# NovaVarsha AI — Security & Compliance Architecture
**Lenovo Hackathon 2026**

## 1. Security Principles
NovaVarsha AI implements defense-in-depth across frontend interactions and backend API endpoints.

## 2. Authentication & Role-Based Access Control (RBAC)
NovaVarsha defines three strict operational roles:
1. **Farmer / User**:
   - Access to localized weather, crop recommendations, scenario simulations, farm action planner, and agricultural assistant.
   - Restricted from system administrative configurations, raw telemetry log viewing, and provider health management.
2. **Agriculture Officer**:
   - Access to macro-regional heatmaps, district anomaly leaderboards, multi-district decision reports, and disaster advisories.
3. **Administrator / Developer**:
   - Full access including system health telemetry, upstream API error rate monitoring, model metadata, cache invalidation, and data provenance inspection.

## 3. Safe Data Handling & Zero Leaks
- **Zero API Key Leakage**: No upstream API keys (e.g. Mappls, Sentinel, Open-Meteo) are exposed to client JavaScript or bundled in build assets. All requests are securely proxied and signed server-side.
- **Structured Sanitized Logging**: Backend logs explicitly scrub sensitive user attributes, IP addresses, and authorization headers.
- **CORS Policy**: Configured to restrict cross-origin requests exclusively to authorized staging and production domain origins.
- **Input Validation**: All client payloads are strictly validated against Pydantic schema boundaries (e.g., coordinates clamped to Indian territorial bounds: Lat 6.0°N to 38.0°N, Lng 68.0°E to 98.0°E).
