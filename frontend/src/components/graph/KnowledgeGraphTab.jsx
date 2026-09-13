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
    { id: 'loc_gangetic', type: 'Location', label: 'Gangetic Basin (Lucknow)', color: '#1E8A78', icon: '📍', desc: 'District: Lucknow, UP • Coordinates: 26.85°N, 80.95°E' },
    { id: 'zone_gangetic', type: 'AgroZone', label: 'Upper/Middle Gangetic Plain', color: '#59C7B1', icon: '🏛️', desc: 'Alluvial deep soil basin, subtropical humid monsoon climate' },
    { id: 'soil_alluvial', type: 'SoilType', label: 'Deep Alluvial Clay Loam', color: '#7A4E35', icon: '🌱', desc: 'High water retention capacity (0.35 field capacity), neutral pH 7.2' },
    { id: 'crop_rice', type: 'Crop', label: 'Paddy (Rice)', color: '#2F6B4F', icon: '🌾', desc: 'Kharif Cereal • Water requirement: 1100–1250 mm total' },
    { id: 'var_swarna', type: 'Cultivar', label: 'Swarna (MTU-7029)', color: '#E2A83B', icon: '🏆', desc: 'ICAR-NRRI verified • 140 days medium-late duration • Waterlogging tolerant' },
    { id: 'risk_dry_spell', type: 'RiskConstraint', label: 'Terminal Moisture Deficit Risk', color: '#C95A4A', icon: '⚠️', desc: 'High yield penalty if dry break >8 days occurs during panicle initiation' },
    { id: 'rec_action', type: 'Recommendation', label: 'Transplant Swarna with Field Bunding', color: '#59C7B1', icon: '✅', desc: 'Maintain 3 cm standing water; prepare farm pond for supplemental life-saving irrigation' }
  ];

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
        background: 'linear-gradient(135deg, rgba(30, 138, 120, 0.2) 0%, rgba(16, 37, 30, 0.95) 55%, rgba(226, 168, 59, 0.15) 100%)',
        border: '1px solid rgba(89, 199, 177, 0.3)',
        borderRadius: '18px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              background: 'rgba(89, 199, 177, 0.2)',
              border: '1px solid rgba(89, 199, 177, 0.4)',
              color: '#59C7B1',
              borderRadius: '999px',
              padding: '0.2rem 0.65rem',
              fontSize: '0.74rem',
              fontWeight: 800
            }}>
              {tr('Agronomic Knowledge Graph')}
            </span>
            <span style={{ fontSize: '0.74rem', color: '#B9C6BB' }}>{tr('Explicit Relationship Reasoning')}</span>
          </div>
          <h2 style={{ fontSize: '1.35rem', color: '#F7F1E3', margin: 0, fontWeight: 800 }}>
            {tr('Agricultural Relationship Trail & Decision Network')}
          </h2>
          <p style={{ fontSize: '0.84rem', color: '#B9C6BB', margin: '0.2rem 0 0' }}>
            {tr('Transparent node-link chain establishing why a specific cultivar is recommended for this location and weather regime.')}
          </p>
        </div>

        <div style={{
          background: 'rgba(30, 138, 120, 0.25)',
          border: '1px solid rgba(89, 199, 177, 0.4)',
          borderRadius: '10px',
          padding: '0.4rem 0.85rem',
          fontSize: '0.78rem',
          color: '#F7F1E3',
          fontWeight: 700
        }}>
          {tr('Active Trail:')} <strong style={{ color: '#E2A83B' }}>{activeHub.name.split(' (')[0]}</strong>
        </div>
      </div>

      {/* Visual Relationship Chain Explorer */}
      <div className="glass-card" style={{ padding: '1.75rem', overflowX: 'auto', background: 'rgba(24, 58, 45, 0.75)', border: '1.5px solid rgba(89, 199, 177, 0.25)' }}>
        <h3 style={{ fontSize: '1rem', color: '#F7F1E3', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 800 }}>
          <Network className="w-4 h-4" style={{ color: '#59C7B1' }} />
          {tr('Interactive "Why This Recommendation?" Relationship Trail')}
        </h3>

        {/* Chain visualization */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: '850px', padding: '0.5rem 0' }}>
          {graphNodes.map((node, i) => (
            <React.Fragment key={node.id}>
              <div
                onClick={() => setSelectedNode(node)}
                style={{
                  background: selectedNode?.id === node.id ? `${node.color}28` : 'rgba(16, 37, 30, 0.75)',
                  border: `1.5px solid ${selectedNode?.id === node.id ? '#F7F1E3' : node.color}`,
                  borderRadius: '14px',
                  padding: '1rem',
                  minWidth: '150px',
                  cursor: 'pointer',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: selectedNode?.id === node.id ? `0 0 20px ${node.color}55` : 'none'
                }}
              >
                <div style={{ fontSize: '0.68rem', color: '#B9C6BB', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.04em' }}>
                  {tr(node.type)}
                </div>
                <div style={{ fontSize: '1.25rem', margin: '0.35rem 0 0.2rem' }}>
                  {node.icon}
                </div>
                <strong style={{ fontSize: '0.85rem', color: '#F7F1E3', display: 'block', lineHeight: '1.25' }}>
                  {tr(node.label)}
                </strong>
              </div>

              {i < graphNodes.length - 1 && (
                <div style={{ color: '#59C7B1', display: 'flex', alignItems: 'center', opacity: 0.6 }}>
                  <ChevronRight className="w-5 h-5" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Selected Node Details Card */}
      {selectedNode && (
        <div className="glass-card" style={{ padding: '1.25rem', background: 'rgba(24, 58, 45, 0.9)', border: `1.5px solid ${selectedNode.color}`, animation: 'modalIn 0.2s ease' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.4rem' }}>{selectedNode.icon}</span>
              <div>
                <span style={{
                  display: 'inline-block',
                  background: `${selectedNode.color}25`,
                  color: selectedNode.color,
                  border: `1px solid ${selectedNode.color}55`,
                  borderRadius: '6px',
                  padding: '0.15rem 0.45rem',
                  fontSize: '0.7rem',
                  fontWeight: 800
                }}>
                  {tr(selectedNode.type)}
                </span>
                <h4 style={{ fontSize: '1.15rem', color: '#F7F1E3', margin: '0.2rem 0 0', fontWeight: 800 }}>
                  {tr(selectedNode.label)}
                </h4>
              </div>
            </div>
            <button onClick={() => setSelectedNode(null)} className="btn btn-secondary" style={{ padding: '0.25rem 0.5rem', borderColor: 'rgba(89, 199, 177, 0.3)' }}>
              ✕
            </button>
          </div>
          <p style={{ fontSize: '0.84rem', color: '#B9C6BB', lineHeight: '1.5', margin: 0 }}>
            {tr(selectedNode.desc)}
          </p>
        </div>
      )}

    </div>
  );
}
