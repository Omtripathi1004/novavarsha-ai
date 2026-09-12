@echo off
echo Starting NovaVarsha AI Frontend & Backend...
start "NovaVarsha Backend" cmd /k "cd backend && uvicorn app.main:app --reload --port 8000"
start "NovaVarsha Frontend" cmd /k "cd frontend && npm run dev"
echo Both services started!
echo Frontend: http://localhost:5173
echo Backend API Docs: http://localhost:8000/docs
