"""
NovaVarsha AI — FastAPI Application Entrypoint
=============================================
Lenovo Hackathon 2026
"""

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import time
import logging

from .router import router

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(name)s: %(message)s")
logger = logging.getLogger("novavarsha.api")

app = FastAPI(
    title="NovaVarsha AI — Decision Intelligence Platform",
    description="Hyperlocal India-First Climate-to-Crop Decision Intelligence Platform for Lenovo Hackathon 2026",
    version="2.4.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.middleware("http")
async def add_process_time_and_security(request: Request, call_next):
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time
    response.headers["X-Process-Time"] = f"{process_time:.4f}s"
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "DENY"
    return response

# Include intelligence router
app.include_router(router)

@app.get("/")
def root():
    return {
        "product": "NovaVarsha AI — Lenovo Hackathon 2026",
        "story": "Observe -> Understand -> Predict -> Explain -> Recommend -> Simulate -> Act",
        "status": "online",
        "docs": "/docs"
    }
