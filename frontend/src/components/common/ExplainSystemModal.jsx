import React from 'react';
import { 
  Cpu, Layers, Database, Shield, AlertTriangle, 
  CheckCircle2, Globe, Sparkles, BookOpen, X, ChevronRight,
  ExternalLink, BarChart3, Bot, Compass, Activity
} from 'lucide-react';

export default function ExplainSystemModal({ isOpen, onClose, lang, tr }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 400,
      background: 'rgba(5, 7, 16, 0.82)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }}>
      <div 
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '1000px',
          maxHeight: '88vh',
          display: 'flex',
          flexDirection: 'column',
          background: 'rgba(10, 14, 28, 0.95)',
          border: '1.5px solid rgba(56, 189, 248, 0.35)',
          borderRadius: '20px',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(56, 189, 248, 0.2)',
          overflow: 'hidden'
        }}
      >
        {/* Header */}
        <div style={{
          padding: '1.25rem 1.6rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.12) 0%, rgba(168, 85, 247, 0.08) 100%)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #0284c7 0%, #a855f7 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 16px rgba(56, 189, 248, 0.4)'
            }}>
              <Layers className="w-5 h-5 text-white" />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <h2 style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  color: '#ffffff',
                  margin: 0
                }}>
                  {tr('NovaVarsha AI — System Architecture & Provenance')}
                </h2>
                <span className="neon-badge neon-badge-cyan" style={{ fontSize: '0.65rem' }}>
                  Lenovo Hackathon 2026
                </span>
              </div>
              <p style={{ fontSize: '0.76rem', color: '#94a3b8', margin: '0.15rem 0 0' }}>
                {tr('Transparent Technical Disclosure: AI Methods, Data Lineage, Uncertainty & Guardrails')}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '10px',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#94a3b8',
              cursor: 'pointer',
              transition: 'all 0.15s'
            }}
            onMouseOver={(e) => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.borderColor = '#ef4444'; }}
            onMouseOut={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)'; }}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div style={{ padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* 1. Continuous Product Story: OBSERVE → ACT */}
          <div className="glass-card" style={{ padding: '1.1rem 1.3rem', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <Compass className="w-4 h-4 text-sky-400" />
              <h3 style={{ fontSize: '0.88rem', fontWeight: 800, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.04em', margin: 0 }}>
                {tr('Core Product Flow: 7-Stage Climate-to-Crop Decision Pipeline')}
              </h3>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: '0.5rem',
              textAlign: 'center'
            }}>
              {[
                { stage: '1. OBSERVE', desc: 'IMD AWS Telemetry & 6-Mode Maps', color: '#0284c7' },
                { stage: '2. UNDERSTAND', desc: 'Monsoon Dynamics & 10Y Anomaly', color: '#059669' },
                { stage: '3. PREDICT', desc: 'Crop Suitability & Yield Risk', color: '#10b981' },
                { stage: '4. EXPLAIN', desc: 'SHAP Feature Attribution & Lineage', color: '#a855f7' },
                { stage: '5. RECOMMEND', desc: 'Verified Cultivars & "Why Not?"', color: '#f59e0b' },
                { stage: '6. SIMULATE', desc: 'What-If Weather Shock Lab', color: '#ec4899' },
                { stage: '7. ACT', desc: 'Checklist, Alerts & Print Reports', color: '#ef4444' },
              ].map((item, idx) => (
                <div key={idx} style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid ${item.color}44`,
                  borderRadius: '10px',
                  padding: '0.65rem 0.4rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem'
                }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: item.color }}>{item.stage}</span>
                  <span style={{ fontSize: '0.65rem', color: '#94a3b8', lineHeight: 1.2 }}>{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Three Columns: Architecture, Data Sources, AI Methods */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1rem'
          }}>
            
            {/* Box A: Technical Architecture */}
            <div className="glass-card" style={{ padding: '1.1rem 1.2rem', background: 'rgba(15, 23, 42, 0.6)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <Cpu className="w-4 h-4 text-emerald-400" />
                <h4 style={{ fontSize: '0.86rem', fontWeight: 800, color: '#34d399', margin: 0 }}>
                  {tr('Technical Architecture')}
                </h4>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: '0.76rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                <li><strong>Frontend:</strong> React 18 + Vite + TypeScript Contracts.</li>
                <li><strong>Styling:</strong> Vanilla High-Density Glassmorphism HUD CSS (Zero Tailwind bloat).</li>
                <li><strong>Maps:</strong> Leaflet/MapLibre adapter with 100% Survey of India sovereign boundaries (Zero OSM border cuts).</li>
                <li><strong>Speech Synthesis:</strong> 11 Indian Languages with Gurmukhi Indic transliteration fallback.</li>
                <li><strong>Resilience:</strong> ErrorBoundary, offline cache with TTL, and safe fallbacks.</li>
              </ul>
            </div>

            {/* Box B: Authoritative Data Sources */}
            <div className="glass-card" style={{ padding: '1.1rem 1.2rem', background: 'rgba(15, 23, 42, 0.6)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <Database className="w-4 h-4 text-sky-400" />
                <h4 style={{ fontSize: '0.86rem', fontWeight: 800, color: '#38bdf8', margin: 0 }}>
                  {tr('Data Sources & Provenance')}
                </h4>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: '0.76rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                <li><strong>IMD (India Meteorological Dept):</strong> AWS observation, 10-year normals, synoptic monsoon tracking.</li>
                <li><strong>ICAR / NRRI Cuttack:</strong> Verified cultivar agro-climatic envelopes & MSP price minimums.</li>
                <li><strong>LGD (Ministry of Panchayati Raj):</strong> Verified State → District → Block → Village hierarchy.</li>
                <li><strong>ISRO / MOSDAC / Sentinel-2:</strong> Satellite adapter interface with honest unavailable states.</li>
              </ul>
            </div>

            {/* Box C: AI & Explainability Methods */}
            <div className="glass-card" style={{ padding: '1.1rem 1.2rem', background: 'rgba(15, 23, 42, 0.6)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <Sparkles className="w-4 h-4 text-purple-400" />
                <h4 style={{ fontSize: '0.86rem', fontWeight: 800, color: '#c084fc', margin: 0 }}>
                  {tr('AI, ML & Explainability')}
                </h4>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: '0.76rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                <li><strong>Suitability Engine:</strong> Multi-factor GDD, thermal envelope, moisture deficit & MSP scoring.</li>
                <li><strong>XAI Attribution:</strong> SHAP (SHapley Additive exPlanations) mathematical attribution waterfalls.</li>
                <li><strong>RAG Assistant:</strong> Curated embeddings from government agronomic advisories with source drawer.</li>
                <li><strong>Scientific Guardrail:</strong> Explicitly separates statistical correlation from agronomic causation.</li>
              </ul>
            </div>

          </div>

          {/* 3. Data Health Modes & Limitations */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1rem'
          }}>
            
            {/* Trust & Data Health Modes */}
            <div className="glass-card" style={{ padding: '1rem 1.2rem', background: 'rgba(14, 165, 233, 0.05)', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.5rem' }}>
                <Activity className="w-4 h-4 text-sky-400" />
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#38bdf8' }}>{tr('Data Health & Trust Modes')}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.74rem', color: '#cbd5e1' }}>
                <div>🟢 <strong>Live Mode:</strong> Real-time observation synced directly with automated weather stations.</div>
                <div>🟡 <strong>Cached Mode:</strong> Offline-resilient store with explicit timestamp & data freshness indicator.</div>
                <div>🔵 <strong>Demo Mode:</strong> Deterministic synthetic data strictly labelled for hackathon judges if live sensors are offline.</div>
              </div>
            </div>

            {/* Scientific Ethics & Limitations */}
            <div className="glass-card" style={{ padding: '1rem 1.2rem', background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.25)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.5rem' }}>
                <AlertTriangle className="w-4 h-4 text-red-400" />
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#f87171' }}>{tr('Known Limitations & Scientific Ethics')}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.73rem', color: '#cbd5e1', lineHeight: 1.45 }}>
                <div>• <strong>No Guaranteed Yield:</strong> Outputs provide probabilistic risk reduction; agronomic success depends on soil, pest management, and post-harvest care.</div>
                <div>• <strong>Honest Unavailable States:</strong> If satellite or radar indices are missing, the system displays "Unavailable" rather than faking data.</div>
              </div>
            </div>

          </div>

        </div>

        {/* Footer */}
        <div style={{
          padding: '1rem 1.5rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          background: 'rgba(5, 7, 16, 0.6)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem'
        }}>
          <span style={{ fontSize: '0.72rem', color: '#64748b' }}>
            Verified Independent Build: Lenovo Hackathon 2026 • Reference: Omtripathi1004/VarshaNetra-AI (Untouched)
          </span>
          <button
            onClick={onClose}
            className="btn btn-primary"
            style={{ padding: '0.45rem 1.2rem', fontSize: '0.78rem', borderRadius: '8px' }}
          >
            {tr('Close Panel')}
          </button>
        </div>

      </div>
    </div>
  );
}
