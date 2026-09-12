import React, { useState } from 'react';
import { useApp } from '../common/AppContext';
import { 
  CheckSquare, Square, Calendar, Droplets, 
  Sprout, ShieldAlert, Sparkles, CheckCircle2,
  ClipboardList, Check, RotateCcw, Award, ArrowRight
} from 'lucide-react';

const INITIAL_STAGES = [
  {
    stage: '1. OBSERVE & TEST',
    title: 'Soil Moisture & Field Assessment',
    evidence: 'Current 32% soil moisture meets field capacity; IMD indicates 85% rain probability.',
    confidence: '95%',
    items: [
      { id: 'item-1', text: 'Confirm top 15cm soil friability before heavy tractor operation', done: true },
      { id: 'item-2', text: 'Collect composite soil sample for KVK Soil Health Card testing', done: true }
    ]
  },
  {
    stage: '2. PREPARE & TREAT',
    title: 'Seed Treatment & Furrow Layout',
    evidence: 'ICAR-NRRI protocols recommend bio-priming against fungal damping-off.',
    confidence: '92%',
    items: [
      { id: 'item-3', text: 'Pre-treat paddy seeds with Trichoderma viride @ 5g/kg seed', done: false },
      { id: 'item-4', text: 'Prepare raised nursery beds or direct seeded furrow lines (20cm spacing)', done: false }
    ]
  },
  {
    stage: '3. IRRIGATE & MANAGE',
    title: 'Water Level Control & Drainage',
    evidence: 'Heavy rain surge (+22mm) anticipated tomorrow evening.',
    confidence: '88%',
    items: [
      { id: 'item-5', text: 'Clear exit drainage bunds to avoid submersion exceeding 48 hours', done: false },
      { id: 'item-6', text: 'Check farm pond inlet sluice to capture surplus surface runoff', done: false }
    ]
  },
  {
    stage: '4. SOW / TRANSPLANT',
    title: 'Optimal Sowing Window Execution',
    evidence: 'Medium-Late duration cultivars (Swarna MTU-7029) enter peak vegetative window.',
    confidence: '94%',
    items: [
      { id: 'item-7', text: 'Transplant 21-day seedlings at 2-3 seedlings per hill', done: false },
      { id: 'item-8', text: 'Apply basal dose of DAP and Potash; delay urea until rooting', done: false }
    ]
  },
  {
    stage: '5. MONITOR & REVIEW',
    title: 'Post-Establishment Canopy Health',
    evidence: 'Relative humidity >80% warrants leaf folder & blast vigilance.',
    confidence: '86%',
    items: [
      { id: 'item-9', text: 'Install 5 pheromone traps per hectare for yellow stem borer', done: false },
      { id: 'item-10', text: 'Review 14-day dry spell forecast in NovaVarsha Scenario Lab', done: false }
    ]
  }
];

export default function ActionPlannerTab() {
  const { activeHub, activeLocation, tr, lang } = useApp();
  const [completedItemIds, setCompletedItemIds] = useState(new Set(['item-1', 'item-2']));

  const toggleItem = (itemId) => {
    setCompletedItemIds(prev => {
      const next = new Set(prev);
      if (next.has(itemId)) {
        next.delete(itemId);
      } else {
        next.add(itemId);
      }
      return next;
    });
  };

  const markAllStageDone = (stage) => {
    setCompletedItemIds(prev => {
      const next = new Set(prev);
      stage.items.forEach(i => next.add(i.id));
      return next;
    });
  };

  const totalCount = INITIAL_STAGES.reduce((acc, s) => acc + s.items.length, 0);
  const completedCount = completedItemIds.size;
  const progressPct = Math.round((completedCount / totalCount) * 100);

  const resetChecklist = () => {
    setCompletedItemIds(new Set());
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      
      {/* Header Banner */}
      <div className="glass-card" style={{ 
        padding: '1.4rem 1.6rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexWrap: 'wrap', 
        gap: '1rem',
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(14, 22, 38, 0.95) 100%)',
        border: '1.5px solid rgba(16, 185, 129, 0.35)',
        boxShadow: '0 12px 35px rgba(0, 0, 0, 0.45)'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
            <span className="neon-badge neon-badge-emerald" style={{ fontSize: '0.72rem', padding: '0.2rem 0.6rem' }}>
              <span className="neon-dot neon-dot-emerald"></span>
              {tr('6-Stage Practical Field Guide')}
            </span>
            <span style={{ fontSize: '0.76rem', color: 'var(--neon-cyan)', fontWeight: 700 }}>
              {tr('Evidence-Linked Agronomic Actions')} • {activeLocation.district || activeHub.district}, {activeLocation.state || activeHub.state}
            </span>
          </div>
          <h2 style={{ fontSize: '1.35rem', color: '#fff', margin: 0, fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
            {tr('Farm Action Planner & Seasonal Checklist')}
          </h2>
          <p style={{ fontSize: '0.84rem', color: '#cbd5e1', margin: '0.3rem 0 0', maxWidth: '720px', lineHeight: 1.5 }}>
            {tr('Converts complex meteorological predictions into concise, step-by-step field operations.')}
          </p>
        </div>

        {/* Progress Tracker Card */}
        <div style={{ 
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(5, 8, 17, 0.8) 100%)', 
          border: '1.5px solid rgba(16, 185, 129, 0.4)', 
          borderRadius: '14px', 
          padding: '0.85rem 1.25rem', 
          textAlign: 'right',
          minWidth: '210px',
          boxShadow: '0 0 20px rgba(16, 185, 129, 0.2)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '0.25rem' }}>
            <span style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>
              {tr('Checklist Completion')}
            </span>
            <button 
              onClick={resetChecklist} 
              title="Reset Checklist" 
              style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}
            >
              <RotateCcw className="w-3.5 h-3.5 hover:text-white" />
            </button>
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#34d399', fontFamily: 'var(--font-heading)' }}>
            {completedCount} / {totalCount} <span style={{ fontSize: '1rem', color: '#a7f3d0' }}>({progressPct}%)</span>
          </div>
          {/* Progress Bar */}
          <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '999px', marginTop: '0.4rem', overflow: 'hidden' }}>
            <div style={{ 
              width: `${progressPct}%`, 
              height: '100%', 
              background: 'linear-gradient(90deg, #10b981 0%, #38bdf8 100%)', 
              borderRadius: '999px',
              transition: 'width 0.35s ease' 
            }} />
          </div>
        </div>
      </div>

      {/* Checklist Stages */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
        {INITIAL_STAGES.map((stg, sIdx) => {
          const stageDone = stg.items.every(i => completedItemIds.has(i.id));
          const stagePartial = stg.items.some(i => completedItemIds.has(i.id)) && !stageDone;

          return (
            <div 
              key={sIdx} 
              className="glass-card" 
              style={{ 
                padding: '1.35rem 1.5rem',
                border: stageDone ? '1.5px solid rgba(16, 185, 129, 0.45)' : '1px solid var(--border-subtle)',
                background: stageDone 
                  ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(14, 22, 38, 0.95) 100%)' 
                  : 'rgba(14, 22, 38, 0.85)',
                boxShadow: stageDone ? '0 8px 24px rgba(16, 185, 129, 0.15)' : 'none',
                transition: 'all 0.25s ease'
              }}
            >
              {/* Stage Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem', flexWrap: 'wrap', gap: '0.6rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span className="neon-badge neon-badge-cyan" style={{ fontSize: '0.72rem', padding: '0.15rem 0.55rem' }}>
                      {tr(stg.stage)}
                    </span>
                    {stageDone && (
                      <span style={{ fontSize: '0.72rem', color: '#34d399', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {tr('Completed')}
                      </span>
                    )}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', color: '#fff', margin: 0, fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                    {tr(stg.title)}
                  </h3>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                    {tr('Evidence Confidence:')} <strong style={{ color: '#34d399', fontSize: '0.85rem' }}>{stg.confidence}</strong>
                  </span>
                  {!stageDone && (
                    <button
                      onClick={() => markAllStageDone(stg)}
                      style={{
                        background: 'rgba(56, 189, 248, 0.1)',
                        border: '1px solid rgba(56, 189, 248, 0.3)',
                        borderRadius: '6px',
                        padding: '0.25rem 0.55rem',
                        fontSize: '0.72rem',
                        color: '#38bdf8',
                        cursor: 'pointer',
                        fontWeight: 600
                      }}
                    >
                      {tr('Mark Stage Completed')}
                    </button>
                  )}
                </div>
              </div>

              {/* Scientific Grounding Bar */}
              <div style={{ 
                fontSize: '0.8rem', 
                color: '#cbd5e1', 
                background: 'rgba(255, 255, 255, 0.035)', 
                padding: '0.55rem 0.85rem', 
                borderRadius: '8px', 
                marginBottom: '0.95rem',
                borderLeft: '3px solid var(--neon-cyan)',
                lineHeight: 1.5
              }}>
                💡 <strong style={{ color: 'var(--neon-cyan)' }}>{tr('Scientific Grounding:')}</strong> {tr(stg.evidence)}
              </div>

              {/* Checklist items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {stg.items.map((item) => {
                  const isDone = completedItemIds.has(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleItem(item.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '0.65rem 0.95rem',
                        borderRadius: '10px',
                        background: isDone ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                        border: isDone ? '1px solid rgba(16, 185, 129, 0.35)' : '1px solid var(--border-subtle)',
                        cursor: 'pointer',
                        transition: 'all 0.18s ease'
                      }}
                    >
                      <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
                        {isDone ? (
                          <CheckSquare className="w-4.5 h-4.5 text-emerald-400" />
                        ) : (
                          <Square className="w-4.5 h-4.5 text-slate-500" />
                        )}
                      </div>
                      <span style={{
                        fontSize: '0.84rem',
                        color: isDone ? '#94a3b8' : '#f8fafc',
                        textDecoration: isDone ? 'line-through' : 'none',
                        lineHeight: 1.45,
                        fontWeight: isDone ? 400 : 500
                      }}>
                        {tr(item.text)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
