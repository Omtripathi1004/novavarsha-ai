import React, { useEffect, useRef } from 'react';
import { useApp } from './AppContext';
import { 
  CloudRain, Map, Sprout, Zap, Waves, Cpu, 
  Satellite, Network, BarChart2, ShieldAlert, 
  ClipboardList, Settings, Lock, X, ArrowRight, UserCheck 
} from 'lucide-react';

export const ALL_DRAWER_TABS = [
  {
    category_en: '🌾 Farmer & Weather Intelligence',
    category_hi: '🌾 कृषि व मौसम सेवाएं',
    color: '#10b981',
    items: [
      { id: 'overview', icon: '🌧️', label_en: 'Overview & Telemetry', label_hi: 'मुख्य पृष्ठ (होम)', color: '#38bdf8' },
      { id: 'hydromap', icon: '🗺️', label_en: '6-Mode Hydro-GIS Map', label_hi: 'जल-भूस्थानिक मानचित्र', color: '#059669' },
      { id: 'agriculture', icon: '🌾', label_en: 'Smart Crops & Cultivars', label_hi: 'फसल एवं किस्म चयन', color: '#10b981' },
      { id: 'scenario', icon: '⚡', label_en: 'What-If Scenario Lab', label_hi: 'सिमुलेशन लैब', color: '#f59e0b' },
      { id: 'monsoon', icon: '🌊', label_en: 'Monsoon Phase & Teleconnections', label_hi: 'मानसून चरण व टेलीकनेक्शन', color: '#06b6d4' },
      { id: 'satellite', icon: '🛰️', label_en: 'Satellite Remote Sensing (NDVI)', label_hi: 'उपग्रह रिमोट सेंसिंग', color: '#84cc16' },
      { id: 'knowledge_graph', icon: '🕸️', label_en: 'Decision Knowledge Graph', label_hi: 'ज्ञान नेटवर्क ग्राफ', color: '#38bdf8' }
    ]
  },
  {
    category_en: '🔬 Explainable AI & Analytics',
    category_hi: '🔬 व्याख्यात्मक एआई व विश्लेषण',
    color: '#a855f7',
    items: [
      { id: 'xai', icon: '🧠', label_en: 'Explainable AI (TreeSHAP)', label_hi: 'व्याख्यात्मक एआई (XAI)', color: '#a855f7' },
      { id: 'analytics', icon: '🔬', label_en: 'Comparative Analytics Lab', label_hi: 'तुलनात्मक विश्लेषण लैब', color: '#c084fc' },
      { id: 'alerts', icon: '🚨', label_en: 'Early Warning & Alerts', label_hi: 'आपदा पूर्व चेतावनी', color: '#ef4444' }
    ]
  },
  {
    category_en: '🏛️ Disaster Command & System Controls',
    category_hi: '🏛️ आपदा कमांड व प्रणाली नियंत्रण',
    color: '#f43f5e',
    items: [
      { id: 'planner', icon: '📋', label_en: 'Farm Action Planner', label_hi: 'फार्म एक्शन प्लानर', color: '#0ea5e9' },
      { id: 'system', icon: '⚙️', label_en: 'Trust & Telemetry Health', label_hi: 'डेटा विश्वसनीयता व स्वास्थ्य', color: '#6366f1' }
    ]
  }
];

export default function NavDrawer() {
  const { 
    activeTab, setActiveTab, 
    isDrawerOpen, setIsDrawerOpen, 
    setIsLoginPage, currentUser, 
    lang, t 
  } = useApp();

  const drawerRef = useRef(null);

  // Close on escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDrawerOpen]);

  // Prevent background scroll when open on mobile
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isDrawerOpen]);

  if (!isDrawerOpen) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div 
        onClick={() => setIsDrawerOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(5, 3, 15, 0.72)',
          backdropFilter: 'blur(8px)',
          zIndex: 9998,
          animation: 'fadeIn 0.2s ease'
        }}
      />

      {/* Slide-out Drawer from Right */}
      <div
        ref={drawerRef}
        role="navigation"
        aria-label="Main Navigation Menu"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '340px',
          maxWidth: '88vw',
          background: 'rgba(13, 9, 28, 0.96)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          borderLeft: '1px solid rgba(168, 85, 247, 0.25)',
          boxShadow: '-12px 0 50px rgba(0, 0, 0, 0.75), 0 0 30px rgba(168, 85, 247, 0.15)',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
          animation: 'slideInRight 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Drawer Header */}
        <div style={{
          padding: '1.25rem 1.4rem 1rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          background: 'linear-gradient(180deg, rgba(168, 85, 247, 0.08) 0%, transparent 100%)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <div style={{
              fontSize: '1.25rem',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              background: 'linear-gradient(135deg, #FF7722 0%, #F59E0B 40%, #00F0FF 80%, #10B981 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem'
            }}>
              <span>⚡</span>
              <span>YuvaSetu AI</span>
            </div>
            
            {/* Current Active Persona Info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginTop: '0.35rem' }}>
              <span style={{ fontSize: '1rem' }}>{currentUser?.avatar || '👨‍🌾'}</span>
              <span style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                color: currentUser?.badgeColor || '#34d399',
                background: 'rgba(255, 255, 255, 0.06)',
                padding: '0.15rem 0.55rem',
                borderRadius: '999px',
                border: `1px solid ${currentUser?.badgeColor || '#34d399'}44`
              }}>
                {currentUser?.name?.split(' ')[0] || 'User'} ({currentUser?.roleTitle?.split(' (')[0] || 'Farmer'})
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsDrawerOpen(false)}
            aria-label="Close navigation"
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#94a3b8',
              cursor: 'pointer',
              fontSize: '1.1rem',
              transition: 'all 0.15s'
            }}
            onMouseOver={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#ef4444'; }}
            onMouseOut={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'; }}
          >
            ✕
          </button>
        </div>

        {/* Dedicated Login / Switch Role CTA Button in Drawer */}
        <div style={{ padding: '0.85rem 1.15rem 0.2rem' }}>
          <button
            onClick={() => {
              setIsDrawerOpen(false);
              setIsLoginPage(true);
            }}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.65rem 0.95rem',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(56, 189, 248, 0.15) 100%)',
              border: '1px solid rgba(168, 85, 247, 0.35)',
              color: '#f8fafc',
              cursor: 'pointer',
              fontSize: '0.84rem',
              fontWeight: 700,
              boxShadow: '0 4px 14px rgba(168, 85, 247, 0.2)',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.borderColor = '#c084fc'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.35)'; }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Lock className="w-4 h-4 text-purple-400" />
              <span>{lang === 'hi' ? '🔐 लॉगिन पेज / भूमिका बदलें' : '🔐 Login Page / Switch Role'}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-purple-400" />
          </button>
        </div>

        {/* Categorized Navigation Items with Operations Colors */}
        <div style={{ padding: '0.85rem 1.15rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {ALL_DRAWER_TABS.map((group, gIdx) => (
            <div key={gIdx}>
              {/* Category Header */}
              <div style={{
                fontSize: '0.72rem',
                fontWeight: 800,
                color: group.color,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                padding: '0.2rem 0.5rem 0.45rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                marginBottom: '0.4rem'
              }}>
                {lang === 'en' ? group.category_en : (group.category_hi || group.category_en)}
              </div>

              {/* Items in this category */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {group.items.map(tab => {
                  const isActive = activeTab === tab.id;
                  const localizedLabel = t('tab_' + tab.id) || (lang === 'en' ? tab.label_en : (tab.label_hi || tab.label_en));
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setIsDrawerOpen(false);
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.6rem 0.85rem',
                        borderRadius: '10px',
                        background: isActive 
                          ? `linear-gradient(135deg, ${tab.color}33 0%, rgba(255, 255, 255, 0.05) 100%)` 
                          : 'transparent',
                        border: isActive ? `1.5px solid ${tab.color}` : '1px solid transparent',
                        color: isActive ? '#ffffff' : '#cbd5e1',
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontSize: '0.86rem',
                        fontWeight: isActive ? 700 : 500,
                        transition: 'all 0.15s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                      onMouseOver={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                          e.currentTarget.style.color = '#ffffff';
                        }
                      }}
                      onMouseOut={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = '#cbd5e1';
                        }
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                        <span style={{ fontSize: '1.15rem' }}>{tab.icon}</span>
                        <span>{localizedLabel}</span>
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        {(tab.id === 'alerts' || tab.id === 'system') && currentUser?.role === 'farmer' && (
                          <span style={{
                            fontSize: '0.62rem',
                            fontWeight: 700,
                            padding: '0.15rem 0.45rem',
                            borderRadius: '6px',
                            background: 'rgba(239, 68, 68, 0.15)',
                            border: '1px solid rgba(239, 68, 68, 0.3)',
                            color: '#f87171',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.2rem'
                          }}>
                            🔒 Auth Only
                          </span>
                        )}
                        {isActive && (
                          <span style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: tab.color,
                            boxShadow: `0 0 8px ${tab.color}`
                          }} />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Drawer Footer */}
        <div style={{
          padding: '1rem 1.4rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          background: 'rgba(5, 3, 15, 0.4)',
          fontSize: '0.72rem',
          color: '#64748b',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span>Survey of India Verified Cartography</span>
          <span style={{ color: '#10b981', fontWeight: 700 }}>v2.4 Ready</span>
        </div>
      </div>
    </>
  );
}
