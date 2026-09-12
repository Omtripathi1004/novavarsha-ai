import React, { useState } from 'react';
import { useApp } from '../common/AppContext';
import { 
  GitFork, Network, MapPin, Layers, Droplets, 
  Sprout, ShieldAlert, CheckCircle2, ChevronRight, Info 
} from 'lucide-react';

export default function KnowledgeGraphTab() {
  const { activeHub, switchHub, tr, lang } = useApp();
  const [selectedNode, setSelectedNode] = useState(null);

  const graphNodes = [
    { id: 'loc_gangetic', type: 'Location', label: 'Gangetic Basin (Lucknow)', color: '#0284c7', icon: '📍', desc: 'District: Lucknow, UP • Coordinates: 26.85°N, 80.95°E' },
    { id: 'zone_gangetic', type: 'AgroZone', label: 'Upper/Middle Gangetic Plain', color: '#38bdf8', icon: '🏛️', desc: 'Alluvial deep soil basin, subtropical humid monsoon climate' },
    { id: 'soil_alluvial', type: 'SoilType', label: 'Deep Alluvial Clay Loam', color: '#10b981', icon: '🌱', desc: 'High water retention capacity (0.35 field capacity), neutral pH 7.2' },
    { id: 'crop_rice', type: 'Crop', label: 'Paddy (Rice)', color: '#34d399', icon: '🌾', desc: 'Kharif Cereal • Water requirement: 1100–1250 mm total' },
    { id: 'var_swarna', type: 'Cultivar', label: 'Swarna (MTU-7029)', color: '#059669', icon: '🏆', desc: 'ICAR-NRRI verified • 140 days medium-late duration • Waterlogging tolerant' },
    { id: 'risk_dry_spell', type: 'RiskConstraint', label: 'Terminal Moisture Deficit Risk', color: '#f43f5e', icon: '⚠️', desc: 'High yield penalty if dry break >8 days occurs during panicle initiation' },
    { id: 'rec_action', type: 'Recommendation', label: 'Transplant Swarna with Field Bunding', color: '#a855f7', icon: '✅', desc: 'Maintain 3 cm standing water; prepare farm pond for supplemental life-saving irrigation' }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      
      {/* Header Banner */}
      <div className="glass-card" style={{ padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', border: '1px solid var(--border-cyan)' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
            <span className="badge badge-purple">{tr('Agronomic Knowledge Graph')}</span>
            <span style={{ fontSize: '0.74rem', color: '#94a3b8' }}>{tr('Explicit Relationship Reasoning')}</span>
          </div>
          <h2 style={{ fontSize: '1.25rem', color: '#fff', margin: 0 }}>
            {tr('Agricultural Relationship Trail & Decision Network')}
          </h2>
          <p style={{ fontSize: '0.84rem', color: '#94a3b8', margin: '0.2rem 0 0' }}>
            {tr('Transparent node-link chain establishing why a specific cultivar is recommended for this location and weather regime.')}
          </p>
        </div>

        <div className="badge badge-emerald" style={{ padding: '0.4rem 0.8rem', fontSize: '0.78rem' }}>
          {tr('Active Trail:')} {activeHub.name.split(' (')[0]}
        </div>
      </div>

      {/* Visual Relationship Chain Explorer */}
      <div className="glass-card" style={{ padding: '1.75rem', overflowX: 'auto', border: '1px solid var(--border-subtle)' }}>
        <h3 style={{ fontSize: '1rem', color: '#fff', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Network className="w-4 h-4 text-purple-400" />
          {tr('Interactive "Why This Recommendation?" Relationship Trail')}
        </h3>

        {/* Chain visualization */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: '850px', padding: '0.5rem 0' }}>
          {graphNodes.map((node, i) => (
            <React.Fragment key={node.id}>
              <div
                onClick={() => setSelectedNode(node)}
                style={{
                  background: selectedNode?.id === node.id ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                  border: `1.5px solid ${selectedNode?.id === node.id ? '#38bdf8' : node.color}`,
                  borderRadius: '14px',
                  padding: '1rem',
                  minWidth: '150px',
                  cursor: 'pointer',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: selectedNode?.id === node.id ? `0 0 20px ${node.color}55` : 'none'
                }}
              >
                <div style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.04em' }}>
                  {tr(node.type)}
                </div>
                <div style={{ fontSize: '1.25rem', margin: '0.35rem 0 0.2rem' }}>
                  {node.icon}
                </div>
                <strong style={{ fontSize: '0.85rem', color: '#fff', display: 'block', lineHeight: '1.25' }}>
                  {tr(node.label)}
                </strong>
              </div>

              {i < graphNodes.length - 1 && (
                <div style={{ color: '#64748b', display: 'flex', alignItems: 'center' }}>
                  <ChevronRight className="w-5 h-5" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Selected Node Details Card */}
      {selectedNode && (
        <div className="glass-card" style={{ padding: '1.25rem', border: `1.5px solid ${selectedNode.color}`, animation: 'modalIn 0.2s ease' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.4rem' }}>{selectedNode.icon}</span>
              <div>
                <span className="badge" style={{ background: `${selectedNode.color}22`, color: selectedNode.color, border: `1px solid ${selectedNode.color}55` }}>
                  {tr(selectedNode.type)}
                </span>
                <h4 style={{ fontSize: '1.15rem', color: '#fff', margin: '0.2rem 0 0' }}>
                  {tr(selectedNode.label)}
                </h4>
              </div>
            </div>
            <button onClick={() => setSelectedNode(null)} className="btn btn-secondary" style={{ padding: '0.25rem 0.5rem' }}>
              ✕
            </button>
          </div>
          <p style={{ fontSize: '0.84rem', color: '#cbd5e1', lineHeight: '1.5', margin: 0 }}>
            {tr(selectedNode.desc)}
          </p>
        </div>
      )}

    </div>
  );
}
