import React, { useState } from 'react';
import { useApp } from '../common/AppContext';
import { DEMO_USERS } from './LoginModal';
import { 
  Lock, User, Shield, CheckCircle2, KeyRound, 
  ArrowRight, Sparkles, UserCheck, Sprout, 
  CloudRain, ShieldAlert, Cpu, Eye, EyeOff, ArrowLeft 
} from 'lucide-react';

export default function LoginPage() {
  const { 
    currentUser, setCurrentUser, 
    setRole, setActiveTab, setIsLoginPage, 
    lang, t, tr 
  } = useApp();

  const [identifier, setIdentifier] = useState('');
  const [pin, setPin] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleQuickLogin = (demoUser) => {
    setIsSubmitting(true);
    setErrorMsg('');
    setTimeout(() => {
      setCurrentUser(demoUser);
      setRole(demoUser.role);
      setIsSubmitting(false);
      setSuccessMsg(tr(`Successfully logged in as ${demoUser.name}!`));
      setTimeout(() => {
        setIsLoginPage(false);
        setActiveTab('overview');
      }, 700);
    }, 400);
  };

  const handleManualLogin = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    setIsSubmitting(true);

    setTimeout(() => {
      // Find matching demo account or allow valid entry
      const matched = DEMO_USERS.find(
        u => (u.credentials.id.toLowerCase() === identifier.trim().toLowerCase()) &&
             (u.credentials.pin === pin.trim())
      );

      if (matched) {
        setCurrentUser(matched);
        setRole(matched.role);
        setIsSubmitting(false);
        setSuccessMsg(tr('Login Successful! Redirecting...'));
        setTimeout(() => {
          setIsLoginPage(false);
          setActiveTab('overview');
        }, 700);
      } else if (identifier.trim() && pin.trim()) {
        // Dynamic fallback user
        const customUser = {
          id: 'usr_custom',
          role: identifier.includes('officer') || identifier.includes('dao') ? 'officer' : 'farmer',
          name: identifier.split('@')[0],
          roleTitle: identifier.includes('officer') ? 'Agriculture Officer' : 'Registered Farmer',
          location: 'Lucknow, Uttar Pradesh',
          avatar: identifier.includes('officer') ? '🏛️' : '👨‍🌾',
          badgeColor: identifier.includes('officer') ? 'var(--neon-cyan)' : 'var(--neon-emerald)',
          credentials: { id: identifier, pin }
        };
        setCurrentUser(customUser);
        setRole(customUser.role);
        setIsSubmitting(false);
        setSuccessMsg(tr('Login Successful! Redirecting...'));
        setTimeout(() => {
          setIsLoginPage(false);
          setActiveTab('overview');
        }, 700);
      } else {
        setIsSubmitting(false);
        setErrorMsg(tr('Please enter a valid User ID / Email and Password'));
      }
    }, 500);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--primary-navy)',
      backgroundImage: `
        radial-gradient(ellipse at 15% 20%, rgba(0, 240, 255, 0.08) 0%, transparent 50%),
        radial-gradient(ellipse at 85% 25%, rgba(255, 119, 34, 0.1) 0%, transparent 55%),
        radial-gradient(ellipse at 50% 80%, rgba(16, 185, 129, 0.06) 0%, transparent 50%)
      `,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1.25rem',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)'
    }}>
      <div style={{
        maxWidth: '1080px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        alignItems: 'center'
      }}>

        {/* Left Side: Brand & Feature Highlights */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <button
            onClick={() => setIsLoginPage(false)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#94a3b8',
              borderRadius: '999px',
              padding: '0.4rem 0.9rem',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              width: 'fit-content',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#38bdf8'; }}
            onMouseOut={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{tr('Return to Dashboard')}</span>
          </button>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
              <span style={{
                fontSize: '2.4rem',
                filter: 'drop-shadow(0 0 16px rgba(0, 240, 255, 0.6))'
              }}>⚡</span>
              <div>
                <h1 style={{
                  fontSize: '2.2rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '-0.025em',
                  background: 'linear-gradient(135deg, var(--neon-saffron) 0%, #F59E0B 40%, var(--neon-cyan) 80%, var(--neon-emerald) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  margin: 0
                }}>
                  NovaVarsha AI
                </h1>
                <span style={{ fontSize: '0.78rem', color: 'var(--neon-cyan)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: 'var(--font-heading)' }}>
                  Hyperlocal Climate-to-Crop Intelligence • Lenovo Hackathon 2026
                </span>
              </div>
            </div>
            
            <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: '0.5rem 0 1.25rem' }}>
              {tr('India-first hyperlocal climate, agriculture, and decision-intelligence platform. Seamless decision loop: Observe → Understand → Predict → Explain → Recommend → Simulate → Act.')}
            </p>
          </div>

          {/* Value Badges */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              background: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              borderRadius: '14px',
              padding: '0.85rem 1rem'
            }}>
              <div style={{ background: 'rgba(16, 185, 129, 0.2)', padding: '0.5rem', borderRadius: '10px', color: 'var(--neon-emerald)' }}>
                <Sprout className="w-5 h-5" />
              </div>
              <div>
                <strong style={{ color: 'var(--neon-emerald)', fontSize: '0.88rem', fontFamily: 'var(--font-heading)' }}>
                  {tr('Farmer / Kisan Decision Portal')}
                </strong>
                <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  {tr('Tailored sowing windows, soil moisture & "Why Not?" cultivar matching')}
                </p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              background: 'rgba(0, 240, 255, 0.08)',
              border: '1px solid var(--border-cyan)',
              borderRadius: '14px',
              padding: '0.85rem 1rem'
            }}>
              <div style={{ background: 'rgba(0, 240, 255, 0.15)', padding: '0.5rem', borderRadius: '10px', color: 'var(--neon-cyan)' }}>
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <strong style={{ color: 'var(--neon-cyan)', fontSize: '0.88rem', fontFamily: 'var(--font-heading)' }}>
                  {tr('Agriculture Officer / DAO Command')}
                </strong>
                <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  {tr('District anomaly tracking, contingent planning & executive reports')}
                </p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              background: 'rgba(255, 119, 34, 0.08)',
              border: '1px solid var(--border-saffron)',
              borderRadius: '14px',
              padding: '0.85rem 1rem'
            }}>
              <div style={{ background: 'rgba(255, 119, 34, 0.15)', padding: '0.5rem', borderRadius: '10px', color: 'var(--neon-saffron)' }}>
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <strong style={{ color: 'var(--neon-saffron)', fontSize: '0.88rem', fontFamily: 'var(--font-heading)' }}>
                  {tr('Disaster Admin & Developer Sandbox')}
                </strong>
                <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  {tr('Full SHAP model waterfall, backtesting suite & live pipeline health')}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Login Card with 1-Click Persona & Manual Form */}
        <div style={{
          background: 'rgba(14, 22, 38, 0.92)',
          border: '1px solid var(--border-cyan)',
          borderRadius: '24px',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 240, 255, 0.15)',
          backdropFilter: 'blur(20px)',
          padding: '2.2rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          
          {/* Header */}
          <div style={{ marginBottom: '1.4rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="neon-badge neon-badge-cyan" style={{ fontSize: '0.74rem' }}>
                <span className="dot"></span>
                🔐 {tr('Role-Based Authentication')}
              </span>
              <span style={{ fontSize: '0.74rem', color: 'var(--neon-emerald)', fontWeight: 600 }}>
                ● {tr('System Online')}
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', color: '#fff', marginTop: '0.75rem', marginBottom: '0.25rem' }}>
              {tr('Sign in to Portal')}
            </h2>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', margin: 0 }}>
              {tr('Select a 1-click verified persona or enter credentials')}
            </p>
          </div>

          {/* Quick 1-Click Role Login Buttons */}
          <div style={{ marginBottom: '1.35rem' }}>
            <label style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--neon-cyan)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
              ⚡ {tr('1-Click Quick Persona Login (Judge / Demo Mode):')}
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {DEMO_USERS.map(user => {
                const isSelected = currentUser?.id === user.id;
                return (
                  <button
                    key={user.id}
                    type="button"
                    onClick={() => handleQuickLogin(user)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.7rem 0.95rem',
                      borderRadius: '12px',
                      background: isSelected ? 'rgba(0, 240, 255, 0.12)' : 'rgba(5, 8, 17, 0.65)',
                      border: isSelected ? '1.5px solid var(--neon-cyan)' : '1px solid var(--border-subtle)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--neon-cyan)'; e.currentTarget.style.background = 'rgba(0, 240, 255, 0.08)'; }}
                    onMouseOut={(e) => { 
                      e.currentTarget.style.borderColor = isSelected ? 'var(--neon-cyan)' : 'var(--border-subtle)'; 
                      e.currentTarget.style.background = isSelected ? 'rgba(0, 240, 255, 0.12)' : 'rgba(5, 8, 17, 0.65)'; 
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ fontSize: '1.5rem' }}>{user.avatar}</span>
                      <div>
                        <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-heading)' }}>
                          {user.name}
                        </div>
                        <div style={{ fontSize: '0.74rem', color: isSelected ? 'var(--neon-cyan)' : 'var(--neon-saffron)', fontWeight: 600 }}>
                          {tr(user.roleTitle)}
                        </div>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        padding: '0.2rem 0.6rem',
                        borderRadius: '999px',
                        background: isSelected ? 'var(--neon-cyan)' : 'rgba(255, 255, 255, 0.06)',
                        color: isSelected ? '#050811' : 'var(--text-secondary)',
                        fontFamily: 'var(--font-heading)'
                      }}>
                        {isSelected ? tr('Active') : tr('Switch')}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', margin: '1.25rem 0' }}>
            <div style={{ flex: 1, height: '1px', background: 'var(--border-subtle)' }} />
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.05em', fontFamily: 'var(--font-heading)' }}>
              {tr('OR ENTER MANUALLY')}
            </span>
            <div style={{ flex: 1, height: '1px', background: 'var(--border-subtle)' }} />
          </div>

          {/* Manual Login Form */}
          <form onSubmit={handleManualLogin} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div>
              <label style={{ fontSize: '0.76rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '0.35rem', fontFamily: 'var(--font-heading)' }}>
                {tr('User ID / Registered Email')}
              </label>
              <div style={{ position: 'relative' }}>
                <User className="w-4 h-4" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--neon-cyan)' }} />
                <input
                  type="text"
                  placeholder="e.g. farmer@novavarsha.gov.in"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'rgba(5, 8, 17, 0.85)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '10px',
                    padding: '0.65rem 0.85rem 0.65rem 2.4rem',
                    color: '#fff',
                    fontSize: '0.86rem',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--neon-cyan)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                <label style={{ fontSize: '0.76rem', fontWeight: 600, color: 'var(--text-secondary)', fontFamily: 'var(--font-heading)' }}>
                  {tr('Password / Security PIN')}
                </label>
                <span style={{ fontSize: '0.7rem', color: 'var(--neon-cyan)', cursor: 'pointer' }}>
                  Demo: 1234
                </span>
              </div>
              <div style={{ position: 'relative' }}>
                <KeyRound className="w-4 h-4" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--neon-cyan)' }} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  style={{
                    width: '100%',
                    background: 'rgba(5, 8, 17, 0.85)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '10px',
                    padding: '0.65rem 2.4rem 0.65rem 2.4rem',
                    color: '#fff',
                    fontSize: '0.86rem',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--neon-cyan)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute', right: '0.85rem', top: '50%', transform: 'translateY(-50%)',
                    background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer'
                  }}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', cursor: 'pointer' }}>
                <input 
                  type="checkbox" 
                  checked={rememberMe} 
                  onChange={(e) => setRememberMe(e.target.checked)} 
                  style={{ accentColor: 'var(--neon-cyan)' }}
                />
                <span>{tr('Keep me signed in')}</span>
              </label>
              <span style={{ color: 'var(--neon-emerald)', fontWeight: 600 }}>
                SSL 256-Bit Encrypted
              </span>
            </div>

            {/* Messages */}
            {errorMsg && (
              <div style={{
                background: 'rgba(255, 0, 85, 0.15)',
                border: '1px solid rgba(255, 0, 85, 0.4)',
                borderRadius: '8px',
                padding: '0.6rem 0.9rem',
                fontSize: '0.8rem',
                color: '#ff8099',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <ShieldAlert className="w-4 h-4 flex-shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {successMsg && (
              <div style={{
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                borderRadius: '8px',
                padding: '0.6rem 0.9rem',
                fontSize: '0.8rem',
                color: 'var(--neon-emerald)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>{successMsg}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                marginTop: '0.5rem',
                padding: '0.85rem',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, var(--neon-cyan) 0%, #0088cc 100%)',
                color: '#050811',
                fontWeight: 800,
                fontSize: '0.94rem',
                fontFamily: 'var(--font-heading)',
                border: 'none',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                boxShadow: '0 6px 22px rgba(0, 240, 255, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.55rem',
                transition: 'all 0.2s'
              }}
            >
              {isSubmitting ? (
                <>
                  <span style={{ animation: 'spin 1s linear infinite' }}>🔄</span>
                  <span>{tr('Authenticating...')}</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>{tr('Sign In to Decision Center')}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Guest button */}
            <button
              type="button"
              onClick={() => {
                setIsLoginPage(false);
                setActiveTab('overview');
              }}
              style={{
                background: 'transparent',
                border: '1px solid var(--border-subtle)',
                borderRadius: '10px',
                padding: '0.6rem',
                color: 'var(--text-muted)',
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.15s'
              }}
              onMouseOver={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'var(--border-cyan)'; }}
              onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; }}
            >
              {tr('Continue as Guest (No Login Required)')}
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}
