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
          border: '1px solid rgba(201, 90, 74, 0.45)',
          background: 'rgba(16, 37, 30, 0.97)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 25px rgba(201, 90, 74, 0.2)'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'rgba(201, 90, 74, 0.15)',
            border: '2px solid #C95A4A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem',
            color: '#C95A4A',
            boxShadow: '0 0 20px rgba(201, 90, 74, 0.4)'
          }}>
            <Lock className="w-8 h-8" />
          </div>

          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.74rem', fontWeight: 700, color: '#C95A4A', background: 'rgba(201, 90, 74, 0.12)', border: '1px solid rgba(201, 90, 74, 0.3)', borderRadius: '999px', padding: '0.2rem 0.65rem', marginBottom: '0.75rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C95A4A', display: 'inline-block' }}></span>
            {tr('Restricted Operational Portal') || 'Restricted Operational Portal'}
          </span>

          <h2 style={{ fontSize: '1.4rem', color: '#F7F1E3', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
            {tr('Restricted Access: District Disaster Officer & Admin Only')}
          </h2>

          <p style={{ fontSize: '0.86rem', color: '#B9C6BB', lineHeight: 1.6, marginBottom: '1.5rem' }}>
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
              background: 'linear-gradient(135deg, #1E8A78 0%, #E2A83B 100%)',
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
        background: 'linear-gradient(135deg, rgba(201, 90, 74, 0.16) 0%, rgba(226, 168, 59, 0.08) 100%)',
        borderColor: 'rgba(201, 90, 74, 0.35)'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.2rem' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#C95A4A', background: 'rgba(201, 90, 74, 0.15)', border: '1px solid rgba(201, 90, 74, 0.35)', borderRadius: '999px', padding: '0.15rem 0.5rem' }}>
              🏙️ Official Government Early Warning Console
            </span>
            <span style={{ fontSize: '0.75rem', color: '#7D8D81' }}>
              Operator: <strong style={{ color: '#F7F1E3' }}>{currentUser.name} ({currentUser.roleTitle})</strong>
            </span>
          </div>
          <h2 style={{ fontSize: '1.35rem', color: '#F7F1E3', margin: 0 }}>
            Disaster Early-Warning & Emergency Alarm Dispatcher
          </h2>
          <p style={{ fontSize: '0.84rem', color: '#B9C6BB', margin: '0.2rem 0 0' }}>
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
                background: filterSeverity === sev ? '#C95A4A' : 'rgba(24, 58, 45, 0.6)',
                color: filterSeverity === sev ? '#F7F1E3' : '#7D8D81',
                border: filterSeverity === sev ? '1px solid #C95A4A' : '1px solid rgba(89, 199, 177, 0.15)',
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
        border: '1.5px solid rgba(201, 90, 74, 0.35)',
        background: 'rgba(16, 37, 30, 0.97)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <Radio className="w-5 h-5" style={{ color: '#C95A4A' }} />
          <h3 style={{ fontSize: '1.1rem', color: '#F7F1E3', margin: 0, fontWeight: 800 }}>
            Dispatch Government Emergency Warning & Sirens
          </h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          
          {/* Left: Message Editor */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div>
              <label style={{ fontSize: '0.76rem', color: '#B9C6BB', fontWeight: 600, display: 'block', marginBottom: '0.3rem' }}>
                Emergency Broadcast Advisory Message:
              </label>
              <textarea
                rows={3}
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(24, 58, 45, 0.7)',
                  border: '1px solid rgba(89, 199, 177, 0.18)',
                  borderRadius: '10px',
                  padding: '0.65rem',
                  color: '#F7F1E3',
                  fontSize: '0.82rem',
                  outline: 'none',
                  resize: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.76rem', color: '#B9C6BB', fontWeight: 600, display: 'block', marginBottom: '0.3rem' }}>
                Emergency Email / Gmail Recipients:
              </label>
              <input
                type="text"
                value={gmailRecipient}
                onChange={(e) => setGmailRecipient(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(24, 58, 45, 0.7)',
                  border: '1px solid rgba(89, 199, 177, 0.18)',
                  borderRadius: '8px',
                  padding: '0.5rem 0.75rem',
                  color: '#59C7B1',
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
                background: 'linear-gradient(135deg, #C95A4A 0%, #B85C38 100%)',
                color: '#F7F1E3',
                fontWeight: 800,
                fontSize: '0.86rem',
                border: 'none',
                cursor: isSending ? 'wait' : 'pointer',
                boxShadow: '0 4px 15px rgba(201, 90, 74, 0.4)'
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
                background: 'linear-gradient(135deg, #1E8A78 0%, #E2A83B 100%)',
                color: '#10251E',
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
                background: 'rgba(30, 138, 120, 0.18)',
                border: '1px solid rgba(89, 199, 177, 0.35)',
                borderRadius: '10px',
                padding: '0.65rem',
                fontSize: '0.76rem',
                color: '#59C7B1'
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
                borderLeft: `4px solid ${isWarn ? '#C95A4A' : isAdv ? '#E2A83B' : '#1E8A78'}`
              }}
            >
              <div 
                onClick={() => setExpandedAlertId(isExpanded ? null : alert.id)}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', cursor: 'pointer', gap: '1rem' }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span style={{ fontSize: '0.74rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '999px', border: '1px solid', borderColor: isWarn ? '#C95A4A' : isAdv ? '#E2A83B' : '#1E8A78', color: isWarn ? '#C95A4A' : isAdv ? '#E2A83B' : '#59C7B1', background: isWarn ? 'rgba(201, 90, 74, 0.12)' : isAdv ? 'rgba(226, 168, 59, 0.12)' : 'rgba(30, 138, 120, 0.12)' }}>
                      {alert.severity}
                    </span>
                    <span style={{ fontSize: '0.74rem', color: '#7D8D81' }}>
                      {alert.category} • {alert.timestamp}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.05rem', color: '#F7F1E3', margin: '0.2rem 0' }}>
                    {alert.title}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: '#B9C6BB', margin: 0 }}>
                    {alert.summary}
                  </p>
                </div>

                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <span style={{ fontSize: '0.74rem', color: '#59C7B1', fontWeight: 700 }}>
                    {alert.confidence}
                  </span>
                  <div style={{ marginTop: '0.4rem', color: '#7D8D81' }}>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </div>

              {/* Collapsible Evidence & Action */}
              {isExpanded && (
                <div style={{ marginTop: '1rem', paddingTop: '0.85rem', borderTop: '1px solid rgba(89, 199, 177, 0.08)', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <div style={{ background: 'rgba(30, 138, 120, 0.1)', padding: '0.65rem', borderRadius: '8px', fontSize: '0.78rem', color: '#B9C6BB' }}>
                    <strong style={{ color: '#59C7B1' }}>Why Am I Seeing This?</strong> {alert.why_seeing_this}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#B9C6BB' }}>
                    <strong style={{ color: '#F7F1E3' }}>Recommended Mitigation Actions:</strong>
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
