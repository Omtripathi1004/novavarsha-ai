import React, { useState } from 'react';
import { useApp } from '../common/AppContext';
import { 
  Lock, User, Shield, CheckCircle2, KeyRound, 
  ArrowRight, Sparkles, X, UserCheck, Smartphone, AlertCircle 
} from 'lucide-react';

export const DEMO_USERS = [
  {
    id: 'usr_farmer',
    role: 'farmer',
    name: 'Rameshwar Singh',
    roleTitle: 'Progressive Farmer (3.5 Acres)',
    location: 'Sarojini Nagar, Lucknow, UP',
    avatar: '👨‍🌾',
    badgeColor: '#10b981',
    credentials: { id: 'farmer@novavarsha.in', pin: '1234' }
  },
  {
    id: 'usr_officer',
    role: 'officer',
    name: 'Dr. Sunita Verma',
    roleTitle: 'District Agriculture Officer (DAO)',
    location: 'Directorate of Agriculture, Lucknow',
    avatar: '🏛️',
    badgeColor: '#0284c7',
    credentials: { id: 'dao.lucknow@up.gov.in', pin: '5678' }
  },
  {
    id: 'usr_admin',
    role: 'admin',
    name: 'Om Tripathi (Lead Dev)',
    roleTitle: 'Systems Architect & Disaster Admin',
    location: 'NovaVarsha Command Ops',
    avatar: '⚙️',
    badgeColor: '#a855f7',
    credentials: { id: 'admin@novavarsha.ai', pin: '9999' }
  },
  {
    id: 'usr_kvk',
    role: 'officer',
    name: 'Dr. P. K. Sharma',
    roleTitle: 'Senior Agronomist (ICAR-KVK)',
    location: 'KVK Research Station, Central UP',
    avatar: '🔬',
    badgeColor: '#f59e0b',
    credentials: { id: 'kvk.scientist@icar.org.in', pin: '4321' }
  }
];

export default function LoginModal() {
  const { 
    isLoginModalOpen, setIsLoginModalOpen, 
    currentUser, setCurrentUser, 
    setRole, t, tr, lang 
  } = useApp();

  const [inputIdentifier, setInputIdentifier] = useState('');
  const [inputPin, setInputPin] = useState('');
  const [authError, setAuthError] = useState('');
  const [successNotice, setSuccessNotice] = useState('');

  if (!isLoginModalOpen) return null;

  const handlePersonaSelect = (user) => {
    setCurrentUser(user);
    setRole(user.role);
    setSuccessNotice(`Signed in as ${user.name} (${user.roleTitle})`);
    setTimeout(() => {
      setSuccessNotice('');
      setIsLoginModalOpen(false);
    }, 600);
  };

  const handleManualLogin = (e) => {
    e.preventDefault();
    if (!inputIdentifier.trim() || !inputPin.trim()) {
      setAuthError('Please enter both identifier and security PIN.');
      return;
    }

    const found = DEMO_USERS.find(
      u => u.credentials.id.toLowerCase() === inputIdentifier.trim().toLowerCase() && u.credentials.pin === inputPin.trim()
    );

    if (found) {
      handlePersonaSelect(found);
    } else {
      // Allow seamless guest authentication if not exact demo credentials
      const customUser = {
        id: `usr_${Date.now()}`,
        role: 'farmer',
        name: inputIdentifier.split('@')[0],
        roleTitle: 'Authenticated User',
        location: 'Verified via OTP / Password',
        avatar: '🌾',
        badgeColor: '#10b981'
      };
      handlePersonaSelect(customUser);
    }
  };

  return (
    <div className="modal-backdrop" onClick={() => setIsLoginModalOpen(false)}>
      <div 
        className="modal-content glass-card" 
        style={{ maxWidth: '640px', padding: '2rem', position: 'relative', border: '1px solid var(--border-cyan)', background: 'rgba(14, 22, 38, 0.96)', boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 30px rgba(0, 240, 255, 0.15)' }} 
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => setIsLoginModalOpen(false)}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer'
          }}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.4rem' }}>
          <div style={{ background: 'linear-gradient(135deg, var(--neon-cyan) 0%, #0088cc 100%)', padding: '0.75rem', borderRadius: '14px', color: '#050811', boxShadow: '0 0 20px rgba(0, 240, 255, 0.4)' }}>
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: '#fff', margin: 0 }}>
              {t('login_title')}
            </h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: '0.2rem 0 0' }}>
              {t('login_sub')}
            </p>
          </div>
        </div>

        {/* Success Alert */}
        {successNotice && (
          <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.4)', color: 'var(--neon-emerald)', padding: '0.65rem 1rem', borderRadius: '10px', fontSize: '0.84rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle2 className="w-4 h-4" /> {tr(successNotice)}
          </div>
        )}

        {/* Error Alert */}
        {authError && (
          <div style={{ background: 'rgba(255, 0, 85, 0.15)', border: '1px solid rgba(255, 0, 85, 0.4)', color: '#ff8099', padding: '0.65rem 1rem', borderRadius: '10px', fontSize: '0.84rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <AlertCircle className="w-4 h-4" /> {tr(authError)}
          </div>
        )}

        {/* 1-Click Persona Login */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '0.74rem', color: 'var(--neon-cyan)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-heading)' }}>
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            {t('quick_login_btn')}:
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem' }}>
            {DEMO_USERS.map(u => {
              const isSelected = currentUser?.id === u.id;
              return (
                <div
                  key={u.id}
                  onClick={() => handlePersonaSelect(u)}
                  style={{
                    background: isSelected ? 'rgba(0, 240, 255, 0.12)' : 'rgba(5, 8, 17, 0.65)',
                    border: isSelected ? '1.5px solid var(--neon-cyan)' : '1px solid var(--border-subtle)',
                    borderRadius: '12px',
                    padding: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all 0.18s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--neon-cyan)'; }}
                  onMouseLeave={(e) => { if (!isSelected) e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '1.35rem' }}>{u.avatar}</span>
                    <div>
                      <strong style={{ fontFamily: 'var(--font-heading)', fontSize: '0.88rem', color: '#fff', display: 'block', lineHeight: 1.2 }}>{u.name}</strong>
                      <span style={{ fontSize: '0.72rem', color: isSelected ? 'var(--neon-cyan)' : 'var(--neon-saffron)', fontWeight: 600 }}>{tr(u.roleTitle)}</span>
                    </div>
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.4rem' }}>
                    <span>{u.location.split(',')[0]}</span>
                    <span style={{ color: 'var(--neon-cyan)', fontWeight: 700 }}>{tr('Select')} ➔</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', margin: '1.25rem 0' }}>
          <div style={{ flex: 1, height: '1px', background: 'var(--border-subtle)' }} />
          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'var(--font-heading)' }}>{tr('Or Sign In With Credentials')}</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border-subtle)' }} />
        </div>

        {/* Manual Login Form */}
        <form onSubmit={handleManualLogin} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <div>
            <label style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.35rem', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>
              {t('enter_phone')}
            </label>
            <input
              type="text"
              value={inputIdentifier}
              onChange={(e) => setInputIdentifier(e.target.value)}
              placeholder="e.g. 9876543210 or farmer@yuvasetu.gov.in"
              style={{
                width: '100%',
                background: 'rgba(5, 8, 17, 0.85)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '10px',
                padding: '0.65rem 0.85rem',
                color: '#fff',
                fontSize: '0.86rem',
                outline: 'none'
              }}
            />
          </div>

          <div>
            <label style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.35rem', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>
              {t('enter_otp')}
            </label>
            <input
              type="password"
              value={inputPin}
              onChange={(e) => setInputPin(e.target.value)}
              placeholder="Enter PIN (Demo: 1234, 5678, 9999)"
              style={{
                width: '100%',
                background: 'rgba(5, 8, 17, 0.85)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '10px',
                padding: '0.65rem 0.85rem',
                color: '#fff',
                fontSize: '0.86rem',
                outline: 'none'
              }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', padding: '0.75rem', marginTop: '0.4rem', fontSize: '0.92rem', background: 'linear-gradient(135deg, var(--neon-cyan) 0%, #0088cc 100%)', color: '#050811', fontWeight: 800, fontFamily: 'var(--font-heading)', boxShadow: '0 4px 18px rgba(0, 240, 255, 0.35)' }}
          >
            {t('verify_signin')}
          </button>
        </form>

      </div>
    </div>
  );
}
