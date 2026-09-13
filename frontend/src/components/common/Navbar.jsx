import React, { useState } from 'react';
import { useApp, DEMO_ROLES, SUPPORTED_LANGUAGES } from './AppContext';
import { 
  Languages, Search, UserCircle, FileText, Database, 
  Radio, CheckCircle, ChevronDown, LogIn, Sparkles, MessageSquare 
} from 'lucide-react';

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
    t 
  } = useApp();

  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const activeLangObj = SUPPORTED_LANGUAGES.find(l => l.code === lang) || SUPPORTED_LANGUAGES[0];

  const toggleLang = () => {
    setLang(lang === 'en' ? 'hi' : 'en');
  };

  return (
    <header className="navbar" style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(10, 7, 22, 0.88)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.09)',
      padding: '0 1.25rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '0.75rem',
      height: '62px',
      boxShadow: '0 4px 24px rgba(0, 0, 0, 0.5)'
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
          gap: '0.6rem',
          cursor: 'pointer',
          flexShrink: 0
        }}
      >
        <span style={{
          fontSize: '1.65rem',
          filter: 'drop-shadow(0 0 12px rgba(255, 119, 34, 0.75))'
        }}>⚡</span>
        <div>
          <div style={{
            fontSize: '1.3rem',
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
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontWeight: 700,
            fontFamily: 'var(--font-heading)'
          }}>
            <span>Hyperlocal Climate-to-Crop</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>•</span>
            <span style={{ color: 'var(--neon-saffron)' }}>Lenovo Hackathon 2026</span>
          </div>
        </div>
      </div>

      {/* Center: 7-Stage Climate-to-Crop Pipeline (OBSERVE → UNDERSTAND → PREDICT → EXPLAIN → RECOMMEND → SIMULATE → ACT) */}
      <div className="desktop-only" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.2rem',
        fontSize: '0.66rem',
        fontWeight: 800,
        color: '#64748b',
        letterSpacing: '0.03em'
      }}>
        {[
          { step: 'OBSERVE', color: '#0284c7', tabs: ['overview', 'hydromap', 'satellite'] },
          { step: 'UNDERSTAND', color: '#059669', tabs: ['monsoon', 'analytics'] },
          { step: 'PREDICT', color: '#10b981', tabs: ['agriculture'] },
          { step: 'EXPLAIN', color: '#a855f7', tabs: ['xai', 'knowledge_graph'] },
          { step: 'RECOMMEND', color: '#f59e0b', tabs: ['agriculture'] },
          { step: 'SIMULATE', color: '#ec4899', tabs: ['scenario'] },
          { step: 'ACT', color: '#ef4444', tabs: ['planner', 'alerts'] }
        ].map((item, i) => {
          const isActive = item.tabs.includes(activeTab);
          return (
            <React.Fragment key={item.step}>
              <span 
                onClick={() => setActiveTab(item.tabs[0])}
                style={{
                  padding: '0.18rem 0.45rem',
                  borderRadius: '6px',
                  background: isActive ? item.color : 'rgba(255, 255, 255, 0.04)',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  boxShadow: isActive ? `0 0 10px ${item.color}88` : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontSize: '0.62rem'
                }}
                title={`Jump to ${item.step} module`}
              >
                {item.step}
              </span>
              {i < 6 && <span style={{ color: '#475569', fontSize: '0.6rem' }}>→</span>}
            </React.Fragment>
          );
        })}
      </div>

      {/* Right Action Container: Judge Flow, Architecture, User Role Pill, AI Chat, Lang Toggle & 3-DOT MENU BUTTON */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
        
        {/* Judge 2-3 Min Guided Flow Button */}
        <button
          onClick={() => setIsJudgeTourOpen(true)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.32rem 0.75rem',
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(239, 68, 68, 0.2) 100%)',
            border: '1px solid rgba(245, 158, 11, 0.5)',
            borderRadius: '999px',
            color: '#fbbf24',
            fontSize: '0.74rem',
            fontWeight: 800,
            cursor: 'pointer',
            transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
            boxShadow: '0 0 12px rgba(245, 158, 11, 0.2)'
          }}
          onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 0 16px rgba(245, 158, 11, 0.4)'; }}
          onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 12px rgba(245, 158, 11, 0.2)'; }}
          title="Start 2-3 Minute Guided Evaluation Tour for Hackathon Judges"
        >
          <span>⚖️</span>
          <span className="desktop-only">Judge Tour</span>
        </button>

        {/* Explain This System / Architecture Modal Button */}
        <button
          onClick={() => setIsExplainSystemOpen(true)}
          className="desktop-only"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.32rem 0.7rem',
            background: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.35)',
            borderRadius: '999px',
            color: '#38bdf8',
            fontSize: '0.74rem',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(56, 189, 248, 0.2)'; }}
          onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(56, 189, 248, 0.1)'; }}
          title="View System Architecture, Data Provenance, AI Methods & Limitations"
        >
          <span>🏛️</span>
          <span>Architecture</span>
        </button>
        
        {/* User Role Pill — Click to Open Full Login Page */}
        <div
          onClick={() => setIsLoginPage(true)}
          className="user-role-pill"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: `1px solid ${currentUser?.badgeColor || '#38bdf8'}55`,
            borderRadius: '999px',
            padding: '0.3rem 0.75rem',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
          onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.transform = 'none'; }}
          title={lang === 'hi' ? 'लॉगिन पेज पर जाएं या भूमिका बदलें' : 'Click to Open Full Login Page'}
        >
          <span style={{ fontSize: '1.05rem' }}>{currentUser?.avatar || '👨‍🌾'}</span>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.76rem', fontWeight: 800, color: '#f8fafc', lineHeight: 1.1 }}>
              {currentUser?.name?.split(' ')[0] || 'User'}
            </span>
            <span style={{ fontSize: '0.62rem', color: currentUser?.badgeColor || '#34d399', fontWeight: 700 }}>
              {currentUser?.roleTitle?.split(' (')[0] || 'Farmer'}
            </span>
          </div>
          <span style={{ fontSize: '0.62rem', color: '#94a3b8' }}>▼</span>
        </div>

        {/* AI Chatbot Button */}
        <button
          className="desktop-only"
          onClick={() => setIsAssistantOpen(!isAssistantOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.35rem 0.8rem',
            background: isAssistantOpen ? 'linear-gradient(135deg, #0284c7 0%, #059669 100%)' : 'rgba(255, 255, 255, 0.06)',
            color: isAssistantOpen ? '#ffffff' : '#cbd5e1',
            border: isAssistantOpen ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '999px',
            fontSize: '0.78rem',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.2s',
            boxShadow: isAssistantOpen ? '0 0 14px rgba(56, 189, 248, 0.35)' : 'none'
          }}
          title={lang === 'hi' ? 'नोवावर्षा AI सलाहकार' : 'AI Agricultural Advisor'}
        >
          <span style={{ fontSize: '0.95rem' }}>🤖</span>
          <span>{lang === 'hi' ? 'AI चैट' : 'AI Chat'}</span>
        </button>

        {/* Language Selector Dropdown (Top 10 Indian Languages) */}
        <div style={{ position: 'relative' }}>
          <button
            id="lang-selector-btn"
            onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
            style={{
              padding: '0.35rem 0.65rem',
              borderRadius: '8px',
              fontSize: '0.78rem',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              background: 'rgba(255, 255, 255, 0.06)',
              color: '#ffffff',
              cursor: 'pointer',
              flexShrink: 0,
              transition: 'all 0.18s'
            }}
            title="Select Language / भाषा चुनें (10 Indian Languages)"
          >
            <Languages className="w-3.5 h-3.5 text-sky-400" />
            <span>{activeLangObj.native}</span>
            <span style={{ fontSize: '0.62rem', color: '#94a3b8' }}>▼</span>
          </button>

          {isLangDropdownOpen && (
            <div style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              right: 0,
              width: '200px',
              background: '#0d111e',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              borderRadius: '12px',
              padding: '0.45rem',
              boxShadow: '0 16px 36px rgba(0, 0, 0, 0.7)',
              zIndex: 300,
              maxHeight: '340px',
              overflowY: 'auto'
            }}>
              <div style={{
                fontSize: '0.68rem',
                fontWeight: 800,
                color: '#94a3b8',
                padding: '0.3rem 0.6rem 0.45rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase'
              }}>
                10 Indian Languages (भाषा)
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
                        fontSize: '0.8rem',
                        fontWeight: isSelected ? 800 : 500,
                        textAlign: 'left',
                        transition: 'all 0.15s'
                      }}
                      onMouseOver={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                          e.currentTarget.style.color = '#ffffff';
                        }
                      }}
                      onMouseOut={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = '#e2e8f0';
                        }
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '0.9rem' }}>{item.flag}</span>
                        <span>{item.native}</span>
                      </div>
                      <span style={{ fontSize: '0.68rem', color: '#94a3b8' }}>{item.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Global Search / Command Palette Shortcut */}
        <button
          onClick={() => setIsCommandPaletteOpen(true)}
          style={{
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '8px',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#38bdf8',
            cursor: 'pointer',
            transition: 'all 0.18s'
          }}
          title="Search districts, crops, schemes (Ctrl+K)"
        >
          <Search className="w-4 h-4" />
        </button>

        {/* THREE-DOT VERTICAL NAVIGATION BUTTON (Primary Navigation Menu Trigger) */}
        <button
          id="three-dot-menu-btn"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          aria-label="Open navigation menu"
          aria-expanded={isDrawerOpen}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: isDrawerOpen 
              ? 'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)' 
              : 'linear-gradient(135deg, rgba(168, 85, 247, 0.25) 0%, rgba(56, 189, 248, 0.25) 100%)',
            color: '#ffffff',
            border: '1.5px solid rgba(168, 85, 247, 0.5)',
            cursor: 'pointer',
            fontSize: '1.35rem',
            fontWeight: 900,
            transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
            flexShrink: 0,
            boxShadow: isDrawerOpen 
              ? '0 0 16px rgba(168, 85, 247, 0.6)' 
              : '0 2px 10px rgba(168, 85, 247, 0.25)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.08)';
            e.currentTarget.style.borderColor = '#38bdf8';
            e.currentTarget.style.boxShadow = '0 0 18px rgba(56, 189, 248, 0.5)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.5)';
            e.currentTarget.style.boxShadow = isDrawerOpen 
              ? '0 0 16px rgba(168, 85, 247, 0.6)' 
              : '0 2px 10px rgba(168, 85, 247, 0.25)';
          }}
          title={lang === 'hi' ? 'नेविगेशन मेनू खोलें (3-डॉट)' : 'Open All Navigation Modules (3-Dot Menu)'}
        >
          ⋮
        </button>

      </div>
    </header>
  );
}
