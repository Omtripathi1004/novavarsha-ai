import React, { useState, useRef, useEffect } from 'react';
import { useApp, DEMO_ROLES, SUPPORTED_LANGUAGES } from './AppContext';
import { 
  Languages, Search, UserCircle, FileText, Database, 
  Radio, CheckCircle, ChevronDown, ChevronLeft, ChevronRight, 
  LogIn, Sparkles, MessageSquare, Compass, Layers, Bot, Menu,
  Eye, Cpu, BarChart3, Sprout, CloudRain, ShieldAlert, CheckSquare,
  Activity, Globe
} from 'lucide-react';

export const WEBPAGES = [
  { id: 'overview', icon: '🌧️', label_en: 'Overview & Telemetry', label_hi: 'होम (टेलीमेट्री)', stage: 'OBSERVE', color: '#0284c7' },
  { id: 'hydromap', icon: '🗺️', label_en: '6-Mode Hydro-GIS', label_hi: 'जल मानचित्र (6-मोड)', stage: 'OBSERVE', color: '#0284c7' },
  { id: 'monsoon', icon: '🌊', label_en: 'Monsoon Phase', label_hi: 'मानसून चरण', stage: 'UNDERSTAND', color: '#059669' },
  { id: 'analytics', icon: '🔬', label_en: 'Analytics Lab', label_hi: 'विश्लेषण लैब', stage: 'UNDERSTAND', color: '#059669' },
  { id: 'agriculture', icon: '🌾', label_en: 'Smart Crops & Cultivars', label_hi: 'फसल व किस्म चयन', stage: 'PREDICT', color: '#10b981' },
  { id: 'xai', icon: '🧠', label_en: 'Explainable AI (SHAP)', label_hi: 'व्याख्यात्मक AI', stage: 'EXPLAIN', color: '#a855f7' },
  { id: 'knowledge_graph', icon: '🕸️', label_en: 'Knowledge Graph', label_hi: 'ज्ञान नेटवर्क', stage: 'EXPLAIN', color: '#a855f7' },
  { id: 'scenario', icon: '⚡', label_en: 'What-If Scenario Lab', label_hi: 'सिमुलेशन लैब', stage: 'SIMULATE', color: '#ec4899' },
  { id: 'planner', icon: '📋', label_en: 'Farm Action Planner', label_hi: 'कार्य योजना', stage: 'ACT', color: '#ef4444' },
  { id: 'alerts', icon: '🚨', label_en: 'Alerts Center', label_hi: 'आपातकालीन चेतावनी', stage: 'ACT', color: '#ef4444' },
  { id: 'satellite', icon: '🛰️', label_en: 'Satellite NDVI', label_hi: 'उपग्रह डेटा', stage: 'OBSERVE', color: '#0284c7' },
  { id: 'system', icon: '⚙️', label_en: 'System & Data Health', label_hi: 'डेटा स्वास्थ्य', stage: 'TRUST', color: '#6366f1' },
];

export default function Navbar() {
  const { 
    lang, setLang, 
    currentUser, 
    setIsLoginModalOpen, 
    setIsLoginPage, 
    activeTab, setActiveTab, 
    isDrawerOpen, setIsDrawerOpen, 
    isAssistantOpen, setIsAssistantOpen, 
    setIsReportModalOpen, 
    setIsCommandPaletteOpen,
    isJudgeTourOpen, setIsJudgeTourOpen,
    isExplainSystemOpen, setIsExplainSystemOpen,
    t, tr 
  } = useApp();

  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isPageJumpOpen, setIsPageJumpOpen] = useState(false);
  const scrollRef = useRef(null);

  const activeLangObj = SUPPORTED_LANGUAGES.find(l => l.code === lang) || SUPPORTED_LANGUAGES[0];
  const activePageObj = WEBPAGES.find(p => p.id === activeTab) || WEBPAGES[0];

  const scrollNav = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === 'left' ? -260 : 260, behavior: 'smooth' });
    }
  };

  // Close dropdowns on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('#lang-selector-container')) {
        setIsLangDropdownOpen(false);
      }
      if (!e.target.closest('#page-jump-container')) {
        setIsPageJumpOpen(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, []);

  return (
    <header className="navbar" style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(8, 10, 24, 0.94)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.09)',
      boxShadow: '0 6px 28px rgba(0, 0, 0, 0.55)',
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    }}>
      {/* 1. TOP ROW: Brand, Quick Jump & Critical Action Utilities */}
      <div style={{
        height: '56px',
        padding: '0 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.6rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        width: '100%'
      }}>
        
        {/* Left: Brand Logo & Title */}
        <div 
          onClick={() => {
            setIsLoginPage(false);
            setActiveTab('overview');
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.55rem',
            cursor: 'pointer',
            flexShrink: 0
          }}
        >
          <span style={{
            fontSize: '1.55rem',
            filter: 'drop-shadow(0 0 12px rgba(255, 119, 34, 0.75))'
          }}>⚡</span>
          <div>
            <div style={{
              fontSize: '1.2rem',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              background: 'linear-gradient(135deg, #FF7722 0%, #F59E0B 40%, #00F0FF 80%, #10B981 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.025em',
              lineHeight: 1.1
            }}>
              NovaVarsha AI
            </div>
            <div style={{
              fontSize: '0.62rem',
              color: 'var(--neon-cyan)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontWeight: 700,
              fontFamily: 'var(--font-heading)'
            }}>
              <span>Climate-to-Crop</span>
              <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>•</span>
              <span style={{ color: 'var(--neon-saffron)' }}>Lenovo 2026</span>
            </div>
          </div>
        </div>

        {/* Center / Quick Webpage Selector Dropdown */}
        <div id="page-jump-container" style={{ position: 'relative', flexShrink: 1 }}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsPageJumpOpen(!isPageJumpOpen);
            }}
            style={{
              padding: '0.3rem 0.65rem',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#e2e8f0',
              cursor: 'pointer',
              fontSize: '0.74rem',
              fontWeight: 700,
              transition: 'all 0.15s',
              maxWidth: '220px'
            }}
            title="Click to instantly switch to any webpage"
          >
            <span>{activePageObj.icon}</span>
            <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {lang === 'hi' ? activePageObj.label_hi : activePageObj.label_en}
            </span>
            <ChevronDown className="w-3 h-3 text-sky-400 flex-shrink-0" />
          </button>

          {isPageJumpOpen && (
            <div style={{
              position: 'absolute',
              top: 'calc(100% + 6px)',
              left: 0,
              width: '260px',
              background: '#0d111e',
              border: '1px solid rgba(56, 189, 248, 0.35)',
              borderRadius: '12px',
              padding: '0.4rem',
              boxShadow: '0 16px 36px rgba(0, 0, 0, 0.85)',
              zIndex: 350,
              maxHeight: '380px',
              overflowY: 'auto'
            }}>
              <div style={{
                fontSize: '0.66rem',
                fontWeight: 800,
                color: '#94a3b8',
                padding: '0.3rem 0.5rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase'
              }}>
                {tr('All Application Webpages (12 Modules)')}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', marginTop: '0.3rem' }}>
                {WEBPAGES.map((page) => {
                  const isCur = page.id === activeTab;
                  return (
                    <button
                      key={page.id}
                      onClick={() => {
                        setActiveTab(page.id);
                        setIsPageJumpOpen(false);
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.45rem 0.6rem',
                        borderRadius: '8px',
                        background: isCur ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
                        border: isCur ? '1px solid #38bdf8' : '1px solid transparent',
                        color: isCur ? '#38bdf8' : '#cbd5e1',
                        cursor: 'pointer',
                        fontSize: '0.78rem',
                        fontWeight: isCur ? 800 : 500,
                        textAlign: 'left',
                        transition: 'all 0.15s'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>{page.icon}</span>
                        <span>{lang === 'hi' ? page.label_hi : page.label_en}</span>
                      </div>
                      <span style={{
                        fontSize: '0.6rem',
                        fontWeight: 700,
                        padding: '0.1rem 0.35rem',
                        borderRadius: '4px',
                        background: `${page.color}22`,
                        color: page.color
                      }}>
                        {page.stage}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Right Action Utilities (Permanently visible & fully anchored) */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.45rem',
          flexShrink: 0
        }}>
          
          {/* Judge Tour Button */}
          <button
            onClick={() => setIsJudgeTourOpen(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              padding: '0.3rem 0.65rem',
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.18) 0%, rgba(239, 68, 68, 0.18) 100%)',
              border: '1px solid rgba(245, 158, 11, 0.45)',
              borderRadius: '999px',
              color: '#fbbf24',
              fontSize: '0.72rem',
              fontWeight: 800,
              cursor: 'pointer',
              transition: 'all 0.15s',
              whiteSpace: 'nowrap'
            }}
            title="Start 2-3 Minute Guided Evaluation Tour for Hackathon Judges"
          >
            <span>⚖️</span>
            <span>{lang === 'hi' ? 'जज टूर' : 'Judge Tour'}</span>
          </button>

          {/* Architecture Button */}
          <button
            onClick={() => setIsExplainSystemOpen(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              padding: '0.3rem 0.6rem',
              background: 'rgba(56, 189, 248, 0.08)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              borderRadius: '999px',
              color: '#38bdf8',
              fontSize: '0.72rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.15s',
              whiteSpace: 'nowrap'
            }}
            title="View System Architecture, Data Provenance & AI Lineage"
          >
            <span>🏛️</span>
            <span>{lang === 'hi' ? 'आर्किटेक्चर' : 'Architecture'}</span>
          </button>

          {/* AI Chatbot Button — PROMINENT & NEVER HIDDEN */}
          <button
            onClick={() => setIsAssistantOpen(!isAssistantOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.32rem 0.75rem',
              background: isAssistantOpen 
                ? 'linear-gradient(135deg, #0284c7 0%, #059669 100%)' 
                : 'linear-gradient(135deg, rgba(2, 132, 199, 0.25) 0%, rgba(5, 150, 105, 0.25) 100%)',
              color: '#ffffff',
              border: isAssistantOpen ? '1px solid #38bdf8' : '1px solid rgba(56, 189, 248, 0.4)',
              borderRadius: '999px',
              fontSize: '0.74rem',
              fontWeight: 800,
              cursor: 'pointer',
              transition: 'all 0.18s',
              boxShadow: isAssistantOpen ? '0 0 14px rgba(56, 189, 248, 0.5)' : '0 2px 8px rgba(0, 0, 0, 0.3)',
              whiteSpace: 'nowrap'
            }}
            title={lang === 'hi' ? 'नोवावर्षा AI कृषि सलाहकार खोलें' : 'Open NovaVarsha AI Agriculture Assistant'}
          >
            <span style={{ fontSize: '0.9rem' }}>🤖</span>
            <span>{lang === 'hi' ? 'AI चैट' : 'AI Chat'}</span>
          </button>

          {/* Language Selector Dropdown (11 Indian Languages) — NEVER HIDDEN */}
          <div id="lang-selector-container" style={{ position: 'relative' }}>
            <button
              id="lang-selector-btn"
              onClick={(e) => {
                e.stopPropagation();
                setIsLangDropdownOpen(!isLangDropdownOpen);
              }}
              style={{
                padding: '0.3rem 0.65rem',
                borderRadius: '8px',
                fontSize: '0.74rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                background: 'rgba(255, 255, 255, 0.07)',
                color: '#ffffff',
                cursor: 'pointer',
                flexShrink: 0,
                transition: 'all 0.15s',
                whiteSpace: 'nowrap'
              }}
              title="Select Language / भाषा चुनें (11 Indian Languages)"
            >
              <Languages className="w-3.5 h-3.5 text-sky-400" />
              <span>{activeLangObj.native}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {isLangDropdownOpen && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 6px)',
                right: 0,
                width: '210px',
                background: '#0d111e',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                borderRadius: '12px',
                padding: '0.45rem',
                boxShadow: '0 16px 36px rgba(0, 0, 0, 0.85)',
                zIndex: 350,
                maxHeight: '340px',
                overflowY: 'auto'
              }}>
                <div style={{
                  fontSize: '0.66rem',
                  fontWeight: 800,
                  color: '#94a3b8',
                  padding: '0.3rem 0.6rem 0.45rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase'
                }}>
                  11 Indian Languages (भाषा)
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', marginTop: '0.3rem' }}>
                  {SUPPORTED_LANGUAGES.map((item) => {
                    const isSelected = item.code === lang;
                    return (
                      <button
                        key={item.code}
                        onClick={() => {
                          setLang(item.code);
                          setIsLangDropdownOpen(false);
                        }}
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.45rem 0.65rem',
                          borderRadius: '8px',
                          background: isSelected ? 'rgba(56, 189, 248, 0.16)' : 'transparent',
                          border: isSelected ? '1px solid #38bdf8' : '1px solid transparent',
                          color: isSelected ? '#38bdf8' : '#e2e8f0',
                          cursor: 'pointer',
                          fontSize: '0.78rem',
                          fontWeight: isSelected ? 800 : 500,
                          textAlign: 'left',
                          transition: 'all 0.15s'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span>{item.flag}</span>
                          <span>{item.native}</span>
                        </div>
                        <span style={{ fontSize: '0.66rem', color: '#94a3b8' }}>{item.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* User Role Pill */}
          <div
            onClick={() => setIsLoginPage(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'rgba(255, 255, 255, 0.05)',
              border: `1px solid ${currentUser?.badgeColor || '#38bdf8'}55`,
              borderRadius: '999px',
              padding: '0.25rem 0.65rem',
              cursor: 'pointer',
              transition: 'all 0.15s',
              whiteSpace: 'nowrap'
            }}
            title={lang === 'hi' ? 'लॉगिन पेज पर जाएं या भूमिका बदलें' : 'Click to Open Full Login Page'}
          >
            <span style={{ fontSize: '0.95rem' }}>{currentUser?.avatar || '👨‍🌾'}</span>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#f8fafc' }}>
              {currentUser?.name?.split(' ')[0] || 'User'}
            </span>
          </div>

          {/* Global Search Button */}
          <button
            onClick={() => setIsCommandPaletteOpen(true)}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '8px',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#38bdf8',
              cursor: 'pointer',
              transition: 'all 0.15s'
            }}
            title="Search (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5" />
          </button>

          {/* 3-DOT ALL MODULES DRAWER TRIGGER — PINNED ON THE RIGHT */}
          <button
            id="three-dot-menu-btn"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            aria-label="Open all navigation modules"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '34px',
              height: '34px',
              borderRadius: '9px',
              background: isDrawerOpen 
                ? 'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)' 
                : 'linear-gradient(135deg, rgba(168, 85, 247, 0.25) 0%, rgba(56, 189, 248, 0.25) 100%)',
              color: '#ffffff',
              border: '1.5px solid rgba(168, 85, 247, 0.5)',
              cursor: 'pointer',
              fontSize: '1.3rem',
              fontWeight: 900,
              transition: 'all 0.18s',
              flexShrink: 0,
              boxShadow: '0 2px 10px rgba(168, 85, 247, 0.3)'
            }}
            title={lang === 'hi' ? 'सभी 12 मॉड्यूल खोलें (3-डॉट মেনू)' : 'Open All 12 Navigation Modules (3-Dot Menu)'}
          >
            ⋮
          </button>

        </div>
      </div>

      {/* 2. BOTTOM ROW: Horizontally Scrollable Webpages Ribbon with Left/Right Arrows */}
      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        background: 'rgba(5, 7, 16, 0.75)',
        padding: '0.25rem 0.5rem',
        gap: '0.35rem',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        {/* Left Scroll Button */}
        <button
          onClick={() => scrollNav('left')}
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '6px',
            width: '24px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#94a3b8',
            cursor: 'pointer',
            flexShrink: 0,
            transition: 'all 0.15s'
          }}
          onMouseOver={(e) => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.16)'; }}
          onMouseOut={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; }}
          title="Scroll Left"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        {/* Scrollable Webpage Tabs Container */}
        <div 
          ref={scrollRef}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            flex: 1,
            padding: '0.1rem 0',
            whiteSpace: 'nowrap'
          }}
        >
          {WEBPAGES.map((page) => {
            const isActive = page.id === activeTab;
            return (
              <button
                key={page.id}
                onClick={() => {
                  setIsLoginPage(false);
                  setActiveTab(page.id);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.22rem 0.65rem',
                  borderRadius: '8px',
                  background: isActive ? `${page.color}28` : 'rgba(255, 255, 255, 0.03)',
                  border: isActive ? `1.5px solid ${page.color}` : '1px solid rgba(255, 255, 255, 0.06)',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  fontSize: '0.72rem',
                  fontWeight: isActive ? 800 : 500,
                  cursor: 'pointer',
                  flexShrink: 0,
                  transition: 'all 0.18s',
                  boxShadow: isActive ? `0 0 12px ${page.color}66` : 'none'
                }}
                onMouseOver={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  }
                }}
                onMouseOut={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#94a3b8';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  }
                }}
                title={`Open ${page.label_en}`}
              >
                <span style={{ fontSize: '0.85rem' }}>{page.icon}</span>
                <span>{lang === 'hi' ? page.label_hi : page.label_en}</span>
                <span style={{
                  fontSize: '0.58rem',
                  fontWeight: 800,
                  padding: '0.08rem 0.3rem',
                  borderRadius: '4px',
                  background: isActive ? page.color : 'rgba(255, 255, 255, 0.06)',
                  color: isActive ? '#ffffff' : '#64748b',
                  letterSpacing: '0.02em'
                }}>
                  {page.stage}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scrollNav('right')}
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '6px',
            width: '24px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#94a3b8',
            cursor: 'pointer',
            flexShrink: 0,
            transition: 'all 0.15s'
          }}
          onMouseOver={(e) => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.16)'; }}
          onMouseOut={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; }}
          title="Scroll Right to see more webpages"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </header>
  );
}
