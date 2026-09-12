import React, { useState } from 'react';
import { useApp } from '../common/AppContext';
import { 
  AlertTriangle, ShieldAlert, CheckCircle2, Info, 
  ChevronDown, ChevronUp, Bell, Sliders, Filter, 
  Send, Mail, PhoneCall, Radio, Lock, UserCheck, ArrowRight 
} from 'lucide-react';

const SAMPLE_ALERTS = [
  {
    id: 'alt-1',
    title: 'Heavy Rainfall Surge Warning (>45 mm in 24 Hours)',
    category: 'Meteorological Hazard',
    severity: 'WARNING',
    confidence: '88% (IMD High-Res NWP Ensemble)',
    timestamp: 'Today, 04:30 AM IST',
    summary: 'A localized monsoon depression over south-central Uttar Pradesh is expected to produce intense convective downpours between tomorrow evening and Wednesday morning.',
    why_seeing_this: 'Atmospheric precipitable water exceeds 58mm with low-level cyclonic vorticity at 850 hPa. Historical analog matches 2021 active monsoon surge.',
    recommended_actions: [
      'Ensure field drainage channels and perimeter furrows are clear of silt.',
      'Postpone urea / pesticide application until after storm passage to prevent chemical runoff.'
    ]
  },
  {
    id: 'alt-2',
    title: 'Elevated High-Humidity Fungal Blast Risk in Paddy',
    category: 'Agronomic Disease Risk',
    severity: 'ADVISORY',
    confidence: '82% (Micro-Climate Crop Model)',
    timestamp: 'Yesterday, 06:00 PM IST',
    summary: 'Prolonged relative humidity exceeding 85% with night temperatures around 24°C creates favorable micro-climate for leaf blast (Magnaporthe oryzae) development.',
    why_seeing_this: 'Consecutive 48-hour leaf wetness duration calculated from surface humidity and morning dew forecasts.',
    recommended_actions: [
      'Inspect lower canopy tillers for spindle-shaped grey-center lesions.',
      'Refrain from excess nitrogenous fertilizer; prepare prophylactic biocontrol spray of Pseudomonas fluorescens.'
    ]
  },
  {
    id: 'alt-3',
    title: 'Stale Sensor Warning: Regional AWS Gauge Discrepancy',
    category: 'Data Quality & Telemetry',
    severity: 'NORMAL',
    confidence: '99% (Integrity Watchdog)',
    timestamp: '2 hours ago',
    summary: 'Backup telemetry active. Ground telemetry cross-verified against satellite rainfall estimation (GPM IMERG) within 5% variance.',
    why_seeing_this: 'Automated QA/QC watchdog detected 12-minute ping delay from peripheral district station; routed to primary synoptic feed.',
    recommended_actions: ['No farmer action needed. System integrity is maintained.']
  }
];

export default function AlertsTab() {
  const { currentUser, setRole, setIsLoginPage, activeLocation, t, tr, lang } = useApp();
  
  const [expandedAlertId, setExpandedAlertId] = useState(SAMPLE_ALERTS[0].id);
  const [filterSeverity, setFilterSeverity] = useState('ALL');

  // Broadcast & Alarm Form State
  const [broadcastTarget, setBroadcastTarget] = useState('All Registered Farmers in District');
  const [customMsg, setCustomMsg] = useState('Heavy monsoon surge forecast: Clear field drains immediately to prevent waterlogging.');
  const [gmailRecipient, setGmailRecipient] = useState('district.collector@up.gov.in, omtripathi1004@gmail.com');
  const [dispatchStatus, setDispatchStatus] = useState(null);
  const [isSending, setIsSending] = useState(false);

  // STRICT ACCESS CONTROL: Only Officer and Admin/Developer
  const isPrivileged = currentUser?.role === 'admin' || currentUser?.role === 'officer';

  if (!isPrivileged) {
    return (
      <div style={{
        minHeight: '65vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1rem'
      }}>
        <div className="glass-card" style={{
          maxWidth: '580px',
          width: '100%',
          padding: '2.5rem 2rem',
          textAlign: 'center',
          border: '1px solid rgba(244, 63, 94, 0.45)',
          background: 'rgba(14, 22, 38, 0.95)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 25px rgba(244, 63, 94, 0.2)'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'rgba(244, 63, 94, 0.15)',
            border: '2px solid var(--neon-rose)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem',
            color: 'var(--neon-rose)',
            boxShadow: '0 0 20px rgba(244, 63, 94, 0.4)'
          }}>
            <Lock className="w-8 h-8" />
          </div>

          <span className="neon-badge neon-badge-rose" style={{ marginBottom: '0.75rem', fontSize: '0.74rem' }}>
            <span className="neon-dot neon-dot-rose"></span>
            <span>{tr('Restricted Operational Portal') || 'Restricted Operational Portal'}</span>
          </span>

          <h2 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
            {tr('Restricted Access: District Disaster Officer & Admin Only')}
          </h2>

          <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            Under NDMA & Government Early-Warning safety guidelines, sending regional emergency siren alarms, mass cellular broadcasts, and configuring disaster thresholds is restricted strictly to <strong>Agriculture Officers (DAO)</strong> and <strong>System Administrators / Developers</strong>. General users and farmers cannot trigger emergency alarms.
          </p>

          <button
            onClick={() => setIsLoginPage(true)}
            className="btn btn-primary"
            style={{
              padding: '0.7rem 1.4rem',
              borderRadius: '12px',
              fontSize: '0.9rem',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #0284c7 0%, #059669 100%)',
              margin: '0 auto',
              gap: '0.5rem'
            }}
          >
            <UserCheck className="w-4 h-4" />
            <span>Sign In with Authority / Developer Credentials</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  const handleDispatchAlarm = (channel) => {
    setIsSending(true);
    setDispatchStatus(null);
    setTimeout(() => {
      setIsSending(false);
      setDispatchStatus({
        channel,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        receiptId: `NDMA-CAP-${Math.floor(100000 + Math.random() * 900000)}`,
        count: channel === 'sms' ? '24,850 Farmers' : 'Civil Authorities & Collectorate'
      });
    }, 800);
  };

  const filteredAlerts = filterSeverity === 'ALL' 
    ? SAMPLE_ALERTS 
    : SAMPLE_ALERTS.filter(a => a.severity === filterSeverity);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
      
      {/* Header Banner */}
      <div className="glass-card" style={{ 
        padding: '1.35rem 1.6rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexWrap: 'wrap', 
        gap: '1rem',
        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.16) 0%, rgba(245, 158, 11, 0.1) 100%)',
        borderColor: 'rgba(239, 68, 68, 0.35)'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.2rem' }}>
            <span className="badge badge-rose" style={{ fontSize: '0.72rem' }}>
              🏛️ Official Government Early Warning Console
            </span>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
              Operator: <strong style={{ color: '#fff' }}>{currentUser.name} ({currentUser.roleTitle})</strong>
            </span>
          </div>
          <h2 style={{ fontSize: '1.35rem', color: '#fff', margin: 0 }}>
            Disaster Early-Warning & Emergency Alarm Dispatcher
          </h2>
          <p style={{ fontSize: '0.84rem', color: '#cbd5e1', margin: '0.2rem 0 0' }}>
            CAP (Common Alerting Protocol) compliant emergency broadcasting for {activeLocation.district} district.
          </p>
        </div>

        {/* Severity Filter */}
        <div style={{ display: 'flex', gap: '0.35rem' }}>
          {['ALL', 'WARNING', 'ADVISORY', 'NORMAL'].map(sev => (
            <button
              key={sev}
              onClick={() => setFilterSeverity(sev)}
              className="btn"
              style={{
                padding: '0.35rem 0.65rem',
                fontSize: '0.74rem',
                borderRadius: '8px',
                background: filterSeverity === sev ? '#ef4444' : 'rgba(255, 255, 255, 0.04)',
                color: filterSeverity === sev ? '#ffffff' : '#94a3b8',
                border: filterSeverity === sev ? '1px solid #f87171' : '1px solid var(--border-subtle)',
                fontWeight: filterSeverity === sev ? 800 : 500
              }}
            >
              {sev}
            </button>
          ))}
        </div>
      </div>

      {/* GOVERNMENT WARNING ALARM BROADCAST DISPATCHER PANEL */}
      <div className="glass-card" style={{
        padding: '1.4rem',
        border: '1.5px solid rgba(239, 68, 68, 0.35)',
        background: 'rgba(18, 14, 40, 0.95)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <Radio className="w-5 h-5 text-rose-400" />
          <h3 style={{ fontSize: '1.1rem', color: '#fff', margin: 0, fontWeight: 800 }}>
            Dispatch Government Emergency Warning & Sirens
          </h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
          
          {/* Left: Message Editor */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div>
              <label style={{ fontSize: '0.76rem', color: '#cbd5e1', fontWeight: 600, display: 'block', marginBottom: '0.3rem' }}>
                Emergency Broadcast Advisory Message:
              </label>
              <textarea
                rows={3}
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '10px',
                  padding: '0.65rem',
                  color: '#fff',
                  fontSize: '0.82rem',
                  outline: 'none',
                  resize: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.76rem', color: '#cbd5e1', fontWeight: 600, display: 'block', marginBottom: '0.3rem' }}>
                Emergency Email / Gmail Recipients:
              </label>
              <input
                type="text"
                value={gmailRecipient}
                onChange={(e) => setGmailRecipient(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  padding: '0.5rem 0.75rem',
                  color: '#38bdf8',
                  fontSize: '0.8rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Right: Broadcast Action Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.75rem' }}>
            
            <button
              onClick={() => handleDispatchAlarm('sms')}
              disabled={isSending}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.75rem',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #dc2626 0%, #ea580c 100%)',
                color: '#fff',
                fontWeight: 800,
                fontSize: '0.86rem',
                border: 'none',
                cursor: isSending ? 'wait' : 'pointer',
                boxShadow: '0 4px 15px rgba(220, 38, 38, 0.4)'
              }}
            >
              <PhoneCall className="w-4 h-4" />
              <span>Broadcast Cell-Broadcast SMS & Siren Alarm</span>
            </button>

            <button
              onClick={() => handleDispatchAlarm('gmail')}
              disabled={isSending}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.75rem',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #0284c7 0%, #059669 100%)',
                color: '#fff',
                fontWeight: 800,
                fontSize: '0.86rem',
                border: 'none',
                cursor: isSending ? 'wait' : 'pointer'
              }}
            >
              <Mail className="w-4 h-4" />
              <span>Send Emergency Email Warning (Gmail Protocol)</span>
            </button>

            {dispatchStatus && (
              <div style={{
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                borderRadius: '10px',
                padding: '0.65rem',
                fontSize: '0.76rem',
                color: '#6ee7b7'
              }}>
                <div>✅ <strong>Emergency Warning Dispatched Successfully!</strong></div>
                <div>Receipt: <code>{dispatchStatus.receiptId}</code> • Time: {dispatchStatus.time}</div>
                <div>Reached: {dispatchStatus.count} in {activeLocation.district}</div>
              </div>
            )}

          </div>

        </div>
      </div>

      {/* ACTIVE ALERTS LIST */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {filteredAlerts.map(alert => {
          const isExpanded = expandedAlertId === alert.id;
          const isWarn = alert.severity === 'WARNING';
          const isAdv = alert.severity === 'ADVISORY';

          return (
            <div 
              key={alert.id} 
              className="glass-card" 
              style={{ 
                padding: '1.25rem',
                borderLeft: `4px solid ${isWarn ? '#ef4444' : isAdv ? '#f59e0b' : '#38bdf8'}`
              }}
            >
              <div 
                onClick={() => setExpandedAlertId(isExpanded ? null : alert.id)}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', cursor: 'pointer', gap: '1rem' }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span className={`badge ${isWarn ? 'badge-rose' : isAdv ? 'badge-amber' : 'badge-cyan'}`}>
                      {alert.severity}
                    </span>
                    <span style={{ fontSize: '0.74rem', color: '#94a3b8' }}>
                      {alert.category} • {alert.timestamp}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.05rem', color: '#fff', margin: '0.2rem 0' }}>
                    {alert.title}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: '#cbd5e1', margin: 0 }}>
                    {alert.summary}
                  </p>
                </div>

                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <span style={{ fontSize: '0.74rem', color: '#38bdf8', fontWeight: 700 }}>
                    {alert.confidence}
                  </span>
                  <div style={{ marginTop: '0.4rem', color: '#94a3b8' }}>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </div>

              {/* Collapsible Evidence & Action */}
              {isExpanded && (
                <div style={{ marginTop: '1rem', paddingTop: '0.85rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <div style={{ background: 'rgba(56, 189, 248, 0.08)', padding: '0.65rem', borderRadius: '8px', fontSize: '0.78rem', color: '#cbd5e1' }}>
                    <strong style={{ color: '#38bdf8' }}>Why Am I Seeing This?</strong> {alert.why_seeing_this}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>
                    <strong style={{ color: '#fff' }}>Recommended Mitigation Actions:</strong>
                    <ul style={{ paddingLeft: '1.25rem', marginTop: '0.3rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      {alert.recommended_actions.map((act, aIdx) => (
                        <li key={aIdx}>{act}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}
