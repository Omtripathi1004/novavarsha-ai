@echo off
echo Starting NovaVarsha AI Backend (FastAPI)...
cd backend
uvicorn app.main:app --reload --port 8000
