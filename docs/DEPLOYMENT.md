# NovaVarsha AI — Deployment & Environment Configuration
**Lenovo Hackathon 2026**

## 1. Independent Project Boundary Verification
NovaVarsha AI is engineered as an entirely distinct repository and deployment pipeline:
- **Independent Directory**: `c:\Users\tripa\OneDrive\Desktop\om lenovo`
- **Independent Dependencies**: Separate `package.json`, `requirements.txt`, and virtual environments.
- **Reference Integrity**: The reference repository `Omtripathi1004/VarshaNetra-AI` remains strictly untouched.

## 2. Environment Variables (`.env.example`)
```bash
# Production / Runtime Environment
ENVIRONMENT=production
DEBUG=false
PORT=8000
FRONTEND_PORT=5173

# API & Security
SECRET_KEY=novavarsha-lenovo-2026-secure-token-engine
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000,https://novavarsha-ai.vercel.app

# Upstream Services (Optional / Adapter Fallbacks Active)
OPEN_METEO_BASE_URL=https://api.open-meteo.com/v1/forecast
MAPPLS_CLIENT_ID=
MAPPLS_CLIENT_SECRET=
COPENHAGEN_SENTINEL_TOKEN=
```

## 3. Local Development Startup
### Frontend
```bash
cd frontend
npm install
npm run dev
# Active at http://localhost:5173/
```

### Backend (Python FastAPI)
```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
# Active at http://localhost:8000/
```

## 4. Production Build & Verification
```bash
npm run build --prefix frontend
```
Produces an optimized static bundle with zero warnings or errors.
