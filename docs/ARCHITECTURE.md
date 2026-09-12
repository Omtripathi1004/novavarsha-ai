# NovaVarsha AI — Architecture Specification
**Lenovo Hackathon 2026**

## 1. High-Level Architecture Overview

NovaVarsha AI follows a clean, decoupled modular architecture designed for high throughput, sub-second client latency, and resilient offline/edge fallbacks.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          PRESENTATION LAYER (React 18 + Vite)                │
│                                                                             │
│  ┌───────────────────┐ ┌───────────────────┐ ┌───────────────────────────┐  │
│  │   Overview HUD    │ │ 6-Mode Map Engine │ │   Smart Crop Engine       │  │
│  │  (Real-Time Met)  │ │ (Mappls/MapLibre) │ │   (ICAR Cultivars & XAI)  │  │
│  └───────────────────┘ └───────────────────┘ └───────────────────────────┘  │
│  ┌───────────────────┐ ┌───────────────────┐ ┌───────────────────────────┐  │
│  │ What-If Scenario  │ │   RAG Assistant   │ │    Decision Reports       │  │
│  │  Lab (Simulation) │ │   (Govt Docs/KB)  │ │    (Print/PDF Export)     │  │
│  └───────────────────┘ └───────────────────┘ └───────────────────────────┘  │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │     Global State: Role (Farmer/Officer/Admin) • Mode (Live/Cached/Demo)│  │
│  │     Telemetry Context • LGD Location Selector • Cmd+K Command Palette │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────▲──────────────────────────────────────┘
                                       │ REST / JSON (Typed Contracts)
┌──────────────────────────────────────▼──────────────────────────────────────┐
│                        API & INTELLIGENCE LAYER (FastAPI)                    │
│                                                                             │
│  ┌────────────────────────┐  ┌────────────────────────┐  ┌───────────────┐  │
│  │     Weather Adapter    │  │   Crop Intelligence    │  │   ML Engine   │  │
│  │ (IMD / Open-Meteo API) │  │  (ICAR Matrix & Scorer)│  │ (Hybrid XAI)  │  │
│  └────────────────────────┘  └────────────────────────┘  └───────────────┘  │
│  ┌────────────────────────┐  ┌────────────────────────┐  ┌───────────────┐  │
│  │  Admin Geo & LGD MoPR  │  │   RAG & Document KB    │  │ KnowledgeGraph│  │
│  │  (766+ Districts / Hub)│  │  (Vector Embeddings)   │  │ (Node Network)│  │
│  └────────────────────────┘  └────────────────────────┘  └───────────────┘  │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │ Middleware: Security Headers • Rate Limiter • Error Boundaries • Logs │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────▲──────────────────────────────────────┘
                                       │ Authoritative Feeds
┌──────────────────────────────────────▼──────────────────────────────────────┐
│                      DATA SOURCES & SOVEREIGN STANDARDS                     │
│                                                                             │
│  • IMD / Open-Meteo Real-time & 10-Yr Historical Weather Grids             │
│  • Survey of India Sovereign Boundary Vectors (Certified Territory)         │
│  • Local Government Directory (LGD), Ministry of Panchayati Raj, GoI         │
│  • ICAR / CRIDA / NRRI Indian Agro-Climatic Cultivar Database               │
│  • NOAA / ECMWF Teleconnections (ENSO ONI, IOD DMI, MJO Indices)            │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 2. Core Story Flow: Observe → Understand → Predict → Explain → Recommend → Simulate → Act

1. **Observe**: Hyperlocal telemetry collects ambient temperature, rainfall accumulation, relative humidity, wind velocity, and soil moisture from authoritative feeds.
2. **Understand**: Spatial georeferencing anchors data to verified Survey of India boundaries and LGD administrative entities (State → District → Block → Village).
3. **Predict**: Machine learning models classify monsoon progression and 7-day to 14-day rainfall anomalies using historical baseline teleconnections.
4. **Explain**: Every inference exposes a SHAP waterfall breakdown detailing exact feature contributions and known uncertainty margins.
5. **Recommend**: The ICAR multi-factor engine filters candidate cultivars against thermal bounds, rain timing, and water requirements, providing transparent "Why Not?" diagnostic reasoning for excluded crops.
6. **Simulate**: The What-If Agriculture Scenario Lab empowers farmers and agronomists to model rainfall deviations, temperature shifts, and sowing delays before risking seeds in the field.
7. **Act**: The Farm Action Planner translates all predictions and recommendations into an actionable 6-stage agronomic checklist (Observe, Prepare, Irrigate, Sow, Monitor, Review).

## 3. Sovereign Map Architecture (Zero OSM Compromise)
NovaVarsha AI implements an official MapLibre GL engine integrating certified Survey of India national boundary and state boundary GeoJSON datasets.
- Eliminates foreign boundary cuts across Jammu & Kashmir, Ladakh, and Arunachal Pradesh.
- Provides 6 selectable map modes:
  1. `Mappls Street View`
  2. `Mappls Hydro-GIS`
  3. `Mappls Terrain`
  4. `Mappls Portal`
  5. `Satellite View` (Esri World Imagery + SOI boundary overlay)
  6. `Hybrid View` (Satellite + Transportation/Labels + SOI boundary overlay)
- 8 Verified Agro-Climatic Hubs with coordinates, bounding boxes, and crop belts.

## 4. Resilience & Modes of Operation
- **Live Mode**: Real-time queries to authoritative upstream weather and GIS endpoints.
- **Cached Mode**: High-speed local cache serving verified observations when upstream network latency exceeds 1.5s.
- **Demo Mode**: 100% deterministic, offline dataset allowing judges to test every feature without external internet connectivity.
