import React, { useState } from 'react';
import { useApp } from './AppContext';
import { 
  Compass, CloudRain, Map, BarChart3, Sprout, 
  Sparkles, Cpu, Bot, FileText, ChevronRight, ChevronLeft, 
  X, CheckCircle, ExternalLink, Play, Eye
} from 'lucide-react';

export const JUDGE_STEPS = [
  {
    step: 1,
    id: 'location',
    title: '1. Official LGD Location Hierarchy',
    tab: 'overview',
    subtitle: 'State → District → Block → Village Sovereign Drill-down',
    color: '#0284c7',
    icon: Compass,
    highlights: [
      'Official Local Government Directory (LGD) identifiers from Ministry of Panchayati Raj.',
      '100% Survey of India sovereign territorial boundary compliance — zero OSM border cuts.',
      'One-click regional hub switching across 8 major Indian agro-climatic zones.'
    ],
    actionHint: 'Look at the top LGD Location Bar and agro-climatic hub chips.'
  },
  {
    step: 2,
    id: 'weather',
    title: '2. Live Weather Telemetry & Freshness',
    tab: 'overview',
    subtitle: 'Automated Weather Station (AWS) Sync & Provenance',
    color: '#0ea5e9',
    icon: CloudRain,
    highlights: [
      'Real-time IMD AWS telemetry: Ambient temperature, relative humidity, soil moisture, and rainfall anomaly.',
      'Multi-source fallback with clear freshness timestamp and station status.',
      '11-Language audio broadcast synthesized live for inclusive rural farmer accessibility.'
    ],
    actionHint: 'Inspect the Hero Weather Card and listen to the multi-language voice announcement.'
  },
  {
    step: 3,
    id: 'monsoon',
    title: '3. Hyperlocal Monsoon Intelligence',
    tab: 'monsoon',
    subtitle: 'Synoptic Monsoon Phase & Dry Spell Prediction',
    color: '#10b981',
    icon: CloudRain,
    highlights: [
      'Detects synoptic southwest monsoon phase (Onset, Active, Break, Withdrawal).',
      'Calculates rainfall anomaly against 10-year IMD climatological normals.',
      'Consecutive dry spell detector alerts farmers to false-start sowing risks.'
    ],
    actionHint: 'Observe the Monsoon Phase timeline and 30-day cumulative rainfall curve.'
  },
  {
    step: 4,
    id: 'hydromap',
    title: '4. 6-Mode Hydro-GIS & Heatmap Engine',
    tab: 'hydromap',
    subtitle: 'Mappls Street, Hydro-GIS, Terrain, Portal, Satellite, Hybrid',
    color: '#06b6d4',
    icon: Map,
    highlights: [
      'Recreated documented V1 6-mode map architecture with Leaflet/MapLibre vector tiles.',
      'Isohyet rainfall anomaly contours with interactive temporal slider.',
      'Sovereign border protection with complete Jammu & Kashmir, Ladakh, and Arunachal Pradesh contours.'
    ],
    actionHint: 'Switch map modes using the top-right layer pills and drag the temporal slider.'
  },
  {
    step: 5,
    id: 'risk',
    title: '5. Explainable Agricultural Risk Engine',
    tab: 'analytics',
    subtitle: 'Composite Risk Decomposition (0–100 Score)',
    color: '#f59e0b',
    icon: BarChart3,
    highlights: [
      'Composite Agricultural Risk Score decomposed into 5 distinct stress vectors:',
      '1. Rainfall deficit stress, 2. Thermal threshold stress, 3. Water budget deficit, 4. Flood/drought exposure, 5. Forecast uncertainty.',
      'Never presents a single unexplained black-box score.'
    ],
    actionHint: 'Check the Stress Vector Breakdown and 10-Year historical IMD comparison curves.'
  },
  {
    step: 6,
    id: 'crops',
    title: '6. Smart Crop Recommendation & "Why Not?"',
    tab: 'agriculture',
    subtitle: 'Multi-Factor Scoring & Disqualification Diagnostics',
    color: '#22c55e',
    icon: Sprout,
    highlights: [
      'Evaluates 42+ verified cultivars (e.g., Swarna Sub-1, Pooja, CR Dhan 801) from ICAR & NRRI.',
      'Multi-factor scoring: Root-zone moisture, thermal envelope, sowing window, and MSP economic guarantee.',
      'Transparent "Why Not?" exclusion panel explicitly diagnoses why mismatched crops were rejected.'
    ],
    actionHint: 'Review the cultivar cards and scroll down to the "Why Not?" Diagnostics table.'
  },
  {
    step: 7,
    id: 'xai',
    title: '7. Explainable AI Everywhere (SHAP)',
    tab: 'xai',
    subtitle: 'Mathematical Feature Attribution Waterfall',
    color: '#a855f7',
    icon: Cpu,
    highlights: [
      'True SHAP (SHapley Additive exPlanations) attribution showing exact numeric impact on predictions.',
      'Scientific guardrail banner clearly distinguishing statistical correlation from biological causation.',
      'Model metadata card exposing algorithm version, training date, and known limitations.'
    ],
    actionHint: 'Inspect the SHAP waterfall chart and the correlation vs. causation guardrail.'
  },
  {
    step: 8,
    id: 'scenario',
    title: '8. What-If Agriculture Scenario Lab',
    tab: 'scenario',
    subtitle: 'Weather Shock Perturbation & Sensitivity Ranking',
    color: '#ec4899',
    icon: Sparkles,
    highlights: [
      'Interactive sliders: Rainfall deviation (-50% to +50%), temperature shift, and sowing date delay.',
      'Before vs. After side-by-side impact comparison on crop suitability and drought stress.',
      'Sensitivity ranking automatically isolates the single dominant stress factor.'
    ],
    actionHint: 'Adjust the rainfall deviation slider and note the real-time suitability recalculation.'
  },
  {
    step: 9,
    id: 'assistant',
    title: '9. Advanced AI Agriculture Assistant (RAG)',
    tab: 'overview',
    openAssistant: true,
    subtitle: 'Evidence-Backed Advisory with Source Provenance',
    color: '#6366f1',
    icon: Bot,
    highlights: [
      'Domain-specific RAG indexing curated ICAR, IMD, and Ministry of Agriculture directives.',
      'Evidence drawer displays exact source paragraphs beside evidence-backed answers.',
      'Multilingual conversational voice I/O in 11 Indian languages with hallucination guardrails.'
    ],
    actionHint: 'Test the AI Assistant drawer on the right side and click "Source Evidence".'
  },
  {
    step: 10,
    id: 'report',
    title: '10. Regional Decision Report Generator',
    tab: 'overview',
    openReport: true,
    subtitle: '1-Click Print-Ready PDF Executive Summary',
    color: '#ef4444',
    icon: FileText,
    highlights: [
      'One-click synthesis: Current weather, monsoon stage, agricultural risk score, and crop rankings.',
      'Data provenance table disclosing station IDs, model versions, and disclaimers.',
      'Clean print/PDF layout suitable for farmers, field officers, and hackathon evaluation.'
    ],
    actionHint: 'Inspect the Decision Report modal with executive summary and print formatting.'
  }
];

export default function JudgeTourModal({ isOpen, onClose }) {
  const { 
    activeTab, setActiveTab, 
    setIsAssistantOpen, setIsReportModalOpen, 
    tr 
  } = useApp();

  const [currentStepIdx, setCurrentStepIdx] = useState(0);

  if (!isOpen) return null;

  const currentStep = JUDGE_STEPS[currentStepIdx];
  const StepIcon = currentStep.icon;

  const goToStep = (idx) => {
    if (idx < 0 || idx >= JUDGE_STEPS.length) return;
    setCurrentStepIdx(idx);
    const target = JUDGE_STEPS[idx];
    
    if (target.tab && target.tab !== activeTab) {
      setActiveTab(target.tab);
    }
    if (target.openAssistant) {
      setIsAssistantOpen(true);
    }
    if (target.openReport) {
      setIsReportModalOpen(true);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '1.5rem',
      right: '1.5rem',
      zIndex: 350,
      width: 'calc(100% - 3rem)',
      maxWidth: '560px',
      background: 'rgba(10, 14, 28, 0.96)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: `1.5px solid ${currentStep.color}88`,
      borderRadius: '20px',
      boxShadow: `0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px ${currentStep.color}33`,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
    }}>
      {/* Header bar */}
      <div style={{
        padding: '0.85rem 1.25rem',
        background: `linear-gradient(135deg, ${currentStep.color}22 0%, rgba(255, 255, 255, 0.02) 100%)`,
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{
            background: currentStep.color,
            color: '#fff',
            borderRadius: '999px',
            padding: '0.2rem 0.6rem',
            fontSize: '0.72rem',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            boxShadow: `0 0 12px ${currentStep.color}aa`
          }}>
            ⚖️ {tr('Judge Flow')} • {currentStepIdx + 1}/{JUDGE_STEPS.length}
          </span>
          <span style={{ fontSize: '0.74rem', color: '#94a3b8', fontWeight: 600 }}>
            {tr('2–3 Min Hackathon Evaluation Guide')}
          </span>
        </div>

        <button
          onClick={onClose}
          aria-label="Close Judge Tour"
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: 'none',
            borderRadius: '8px',
            width: '28px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#94a3b8',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
          onMouseOver={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = '#ef4444'; }}
          onMouseOut={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; }}
        >
          ✕
        </button>
      </div>

      {/* Body */}
      <div style={{ padding: '1.25rem 1.4rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', marginBottom: '0.75rem' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: `${currentStep.color}22`,
            border: `1px solid ${currentStep.color}66`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <StepIcon className="w-5 h-5" style={{ color: currentStep.color }} />
          </div>

          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f8fafc', margin: 0, fontFamily: 'var(--font-heading)' }}>
              {tr(currentStep.title)}
            </h3>
            <p style={{ fontSize: '0.78rem', color: currentStep.color, margin: '0.2rem 0 0', fontWeight: 600 }}>
              {tr(currentStep.subtitle)}
            </p>
          </div>
        </div>

        {/* Highlight points */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '12px',
          padding: '0.75rem 0.9rem',
          margin: '0.85rem 0'
        }}>
          <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: '0.78rem', color: '#cbd5e1', lineHeight: 1.55 }}>
            {currentStep.highlights.map((point, pIdx) => (
              <li key={pIdx} style={{ marginBottom: '0.35rem' }}>
                {tr(point)}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Hint */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.45rem',
          fontSize: '0.74rem',
          color: '#38bdf8',
          background: 'rgba(56, 189, 248, 0.08)',
          padding: '0.45rem 0.75rem',
          borderRadius: '8px',
          border: '1px solid rgba(56, 189, 248, 0.2)'
        }}>
          <Eye className="w-3.5 h-3.5 flex-shrink-0" />
          <span>{tr(currentStep.actionHint)}</span>
        </div>
      </div>

      {/* Footer Navigation Controls */}
      <div style={{
        padding: '0.85rem 1.4rem',
        background: 'rgba(5, 8, 17, 0.7)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.5rem'
      }}>
        <button
          onClick={() => goToStep(currentStepIdx - 1)}
          disabled={currentStepIdx === 0}
          className="btn btn-secondary"
          style={{
            padding: '0.4rem 0.85rem',
            fontSize: '0.76rem',
            gap: '0.3rem',
            opacity: currentStepIdx === 0 ? 0.4 : 1,
            cursor: currentStepIdx === 0 ? 'not-allowed' : 'pointer'
          }}
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span>{tr('Previous')}</span>
        </button>

        {/* Step dots */}
        <div style={{ display: 'flex', gap: '0.3rem', alignItems: 'center' }}>
          {JUDGE_STEPS.map((s, idx) => (
            <div
              key={s.id}
              onClick={() => goToStep(idx)}
              style={{
                width: idx === currentStepIdx ? '16px' : '6px',
                height: '6px',
                borderRadius: '999px',
                background: idx === currentStepIdx ? currentStep.color : 'rgba(255, 255, 255, 0.2)',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              title={`Jump to Step ${s.step}: ${s.title}`}
            />
          ))}
        </div>

        <button
          onClick={() => {
            if (currentStepIdx < JUDGE_STEPS.length - 1) {
              goToStep(currentStepIdx + 1);
            } else {
              onClose();
            }
          }}
          className="btn btn-primary"
          style={{
            padding: '0.4rem 1rem',
            fontSize: '0.76rem',
            gap: '0.35rem',
            background: currentStepIdx === JUDGE_STEPS.length - 1 
              ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' 
              : `linear-gradient(135deg, ${currentStep.color} 0%, #0284c7 100%)`
          }}
        >
          <span>{currentStepIdx === JUDGE_STEPS.length - 1 ? tr('Finish Tour') : tr('Next Step')}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
