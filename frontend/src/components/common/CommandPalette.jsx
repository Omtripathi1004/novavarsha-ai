import React, { useState, useEffect } from 'react';
import { useApp, AGRO_HUBS } from './AppContext';
import { Search, MapPin, Zap, Sprout, Layers, FileText, Cpu, X } from 'lucide-react';

export default function CommandPalette() {
  const { 
    isCommandPaletteOpen, setIsCommandPaletteOpen, 
    setActiveTab, switchHub, setIsReportModalOpen 
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsCommandPaletteOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isCommandPaletteOpen) return null;

  const quickCommands = [
    { id: 'tab_overview', title: 'Go to Real-Time Telemetry Overview', icon: <Zap className="w-4 h-4 text-sky-400" />, action: () => { setActiveTab('overview'); setIsCommandPaletteOpen(false); } },
    { id: 'tab_map', title: 'Open 6-Mode Sovereign Indian Map', icon: <Layers className="w-4 h-4 text-emerald-400" />, action: () => { setActiveTab('hydromap'); setIsCommandPaletteOpen(false); } },
    { id: 'tab_crops', title: 'Explore ICAR Cultivars & "Why Not?" Diagnostics', icon: <Sprout className="w-4 h-4 text-emerald-400" />, action: () => { setActiveTab('agriculture'); setIsCommandPaletteOpen(false); } },
    { id: 'tab_scenario', title: 'Launch What-If Agriculture Scenario Lab', icon: <Zap className="w-4 h-4 text-amber-400" />, action: () => { setActiveTab('scenario'); setIsCommandPaletteOpen(false); } },
    { id: 'tab_xai', title: 'Inspect SHAP Explainable AI Waterfall', icon: <Cpu className="w-4 h-4 text-purple-400" />, action: () => { setActiveTab('xai'); setIsCommandPaletteOpen(false); } },
    { id: 'tab_report', title: 'Generate 1-Click Regional Decision Brief', icon: <FileText className="w-4 h-4 text-sky-400" />, action: () => { setIsReportModalOpen(true); setIsCommandPaletteOpen(false); } }
  ];

  const filteredCommands = quickCommands.filter(c => 
    c.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredHubs = AGRO_HUBS.filter(h => 
    h.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    h.belt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="modal-backdrop" onClick={() => setIsCommandPaletteOpen(false)}>
      <div className="modal-content" style={{ maxWidth: '580px', padding: '0.85rem' }} onClick={e => e.stopPropagation()}>
        
        {/* Search Input */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', padding: '0.5rem 0.65rem', borderBottom: '1px solid var(--border-subtle)' }}>
          <Search className="w-4 h-4 text-sky-400" />
          <input 
            type="text"
            autoFocus
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search commands, agro-hubs, crops, or tabs... (Esc to close)"
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: '0.9rem',
              outline: 'none'
            }}
          />
          <button onClick={() => setIsCommandPaletteOpen(false)} style={{ background: 'transparent', border: 'none', color: '#64748b', cursor: 'pointer' }}>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div style={{ maxHeight: '360px', overflowY: 'auto', padding: '0.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          
          <div style={{ fontSize: '0.68rem', color: '#64748b', textTransform: 'uppercase', padding: '0.35rem 0.65rem', fontWeight: 700 }}>
            Navigation & Tools
          </div>
          {filteredCommands.map(cmd => (
            <div
              key={cmd.id}
              onClick={cmd.action}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.55rem 0.75rem',
                borderRadius: '8px',
                cursor: 'pointer',
                color: '#cbd5e1',
                fontSize: '0.82rem',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(56, 189, 248, 0.1)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#cbd5e1'; }}
            >
              {cmd.icon}
              <span>{cmd.title}</span>
            </div>
          ))}

          {filteredHubs.length > 0 && (
            <>
              <div style={{ fontSize: '0.68rem', color: '#64748b', textTransform: 'uppercase', padding: '0.5rem 0.65rem 0.2rem', fontWeight: 700 }}>
                Agro-Climatic Hubs
              </div>
              {filteredHubs.map(hub => (
                <div
                  key={hub.id}
                  onClick={() => { switchHub(hub.id); setIsCommandPaletteOpen(false); }}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.55rem 0.75rem',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    color: '#cbd5e1',
                    fontSize: '0.82rem',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(16, 185, 129, 0.1)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#cbd5e1'; }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>{hub.icon}</span>
                    <span>{hub.name}</span>
                  </div>
                  <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>{hub.belt}</span>
                </div>
              ))}
            </>
          )}

        </div>

      </div>
    </div>
  );
}
