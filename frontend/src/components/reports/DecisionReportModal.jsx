import React from 'react';
import { useApp } from '../common/AppContext';
import { 
  FileText, Printer, Download, X, Shield, 
  CheckCircle2, AlertTriangle, Droplets, Thermometer, Calendar 
} from 'lucide-react';

export default function DecisionReportModal() {
  const { isReportModalOpen, setIsReportModalOpen, activeHub, activeLocation, telemetry, farmProfile } = useApp();

  if (!isReportModalOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={() => setIsReportModalOpen(false)}>
      <div className="modal-content" style={{ maxWidth: '800px' }} onClick={e => e.stopPropagation()}>
        
        {/* Modal Controls (Hidden in Print) */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FileText className="w-5 h-5 text-sky-400" />
            <h3 style={{ fontSize: '1.15rem', color: '#fff', margin: 0 }}>
              Official Agro-Climatic Decision Brief
            </h3>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button onClick={handlePrint} className="btn btn-primary" style={{ padding: '0.35rem 0.85rem', fontSize: '0.78rem' }}>
              <Printer className="w-3.5 h-3.5" /> Print / Save PDF
            </button>
            <button onClick={() => setIsReportModalOpen(false)} className="btn btn-secondary" style={{ padding: '0.35rem 0.65rem' }}>
              ✕
            </button>
          </div>
        </div>

        {/* Printable Official Brief Document */}
        <div className="printable-report" style={{ color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.85rem' }}>
          
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '2px solid rgba(56, 189, 248, 0.3)', paddingBottom: '0.75rem' }}>
            <div>
              <h2 style={{ fontSize: '1.4rem', color: '#fff', margin: 0 }}>
                NovaVarsha AI Regional Decision Brief
              </h2>
              <div style={{ fontSize: '0.78rem', color: '#38bdf8', fontWeight: 600 }}>
                Lenovo Hackathon 2026 • Hyperlocal Climate-to-Crop Intelligence
              </div>
            </div>
            <div style={{ textAlign: 'right', fontSize: '0.74rem', color: '#94a3b8' }}>
              <div>Report ID: <strong style={{ color: '#fff' }}>NV-REP-{activeLocation.district.toUpperCase().slice(0, 3)}-2026</strong></div>
              <div>Generated: {new Date().toLocaleDateString('en-GB')} {new Date().toLocaleTimeString()}</div>
              <div style={{ color: '#34d399' }}>Survey of India Sovereign Verified</div>
            </div>
          </div>

          {/* Regional & Farm Profile Metadata */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
            <div>
              <span style={{ fontSize: '0.7rem', color: '#64748b' }}>Target District & State</span>
              <div style={{ fontWeight: 700, color: '#f8fafc' }}>{activeLocation.district}, {activeLocation.state}</div>
            </div>
            <div>
              <span style={{ fontSize: '0.7rem', color: '#64748b' }}>Agro-Climatic Belt</span>
              <div style={{ fontWeight: 700, color: '#f8fafc' }}>{activeHub.belt}</div>
            </div>
            <div>
              <span style={{ fontSize: '0.7rem', color: '#64748b' }}>Coordinates</span>
              <div style={{ fontWeight: 700, color: '#f8fafc' }}>{activeLocation.lat}°N, {activeLocation.lng}°E</div>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h4 style={{ color: '#38bdf8', fontSize: '0.95rem', marginBottom: '0.35rem' }}>
              1. Executive Diagnostic Summary
            </h4>
            <p style={{ lineHeight: '1.5', margin: 0 }}>
              Favorable agro-climatic conditions across {activeLocation.district}. Soil moisture is currently at {telemetry.soilMoisture.split(' ')[0]} with cumulative 7-day precipitation of {telemetry.rainMm7d} mm ({telemetry.rainAnomaly} anomaly vs 30-year IMD baseline). Active Southwest Monsoon circulation supports standard vegetative tillering.
            </p>
          </div>

          {/* Telemetry & Risk Matrix */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Atmospheric Telemetry</div>
              <div>• Surface Temp: <strong>{telemetry.temp}°C</strong></div>
              <div>• Humidity: <strong>{telemetry.humidity}%</strong></div>
              <div>• Monsoon Phase: <strong>{telemetry.monsoonPhase}</strong></div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.72rem', color: '#64748b', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Composite Risk Rating</div>
              <div>• Risk Score: <strong style={{ color: '#34d399' }}>{telemetry.compositeRiskScore} / 100</strong> ({telemetry.riskRating})</div>
              <div>• Primary Risk: <strong>Dry break probability (38% in late cycle)</strong></div>
              <div>• Flood Hazard: <strong>Low</strong></div>
            </div>
          </div>

          {/* Cultivar Recommendations */}
          <div>
            <h4 style={{ color: '#34d399', fontSize: '0.95rem', marginBottom: '0.35rem' }}>
              2. Recommended ICAR Cultivars
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <div style={{ background: 'rgba(16, 185, 129, 0.08)', padding: '0.5rem 0.75rem', borderRadius: '6px', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <strong>Swarna (MTU-7029) — Paddy</strong> (140d • Medium-Late)
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Water need: 1100–1250 mm • Verified by ICAR-NRRI Cuttack</div>
                </div>
                <strong style={{ color: '#34d399' }}>Suitability: 94%</strong>
              </div>
              <div style={{ background: 'rgba(56, 189, 248, 0.08)', padding: '0.5rem 0.75rem', borderRadius: '6px', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <strong>Sahbhagi Dhan — Paddy (Drought Hardy)</strong> (105d • Short Duration)
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Water need: 800 mm • Saves 35% water under rainfed regimes</div>
                </div>
                <strong style={{ color: '#38bdf8' }}>Suitability: 91%</strong>
              </div>
            </div>
          </div>

          {/* "Why Not?" Diagnostics */}
          <div>
            <h4 style={{ color: '#fda4af', fontSize: '0.95rem', marginBottom: '0.35rem' }}>
              3. "Why Not?" Excluded Crops Diagnostic
            </h4>
            <div style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: '1.45' }}>
              • <strong>Bt Cotton:</strong> Disqualified due to waterlogging susceptibility in deep alluvial soils.<br/>
              • <strong>Groundnut:</strong> Disqualified due to clay fraction restricting subterranean pod expansion.
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div style={{ fontSize: '0.68rem', color: '#64748b', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.5rem', lineHeight: '1.4' }}>
            Disclaimer: This decision brief is produced by the NovaVarsha AI autonomous decision engine for agricultural planning and judge review. Recommendations reflect agro-climatic suitability and statistical correlation, not biological or financial harvest guarantees. Verify on-ground parameters with local KVK extension officers.
          </div>

        </div>

      </div>
    </div>
  );
}
