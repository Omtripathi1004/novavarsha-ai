import React, { useState, useMemo } from 'react';
import { useApp } from '../common/AppContext';
import { 
  Zap, Sliders, Play, RotateCcw, Save, TrendingUp, 
  TrendingDown, ShieldAlert, Droplets, Thermometer, Calendar, 
  CheckCircle2, Sparkles, BarChart2, ArrowRight, Sun, AlertTriangle, 
  Layers, DollarSign, Activity 
} from 'lucide-react';

export default function ScenarioLabTab() {
  const { telemetry, activeLocation, t, tr } = useApp();

  // Scenario Input Parameters
  const [rainPercentDelta, setRainPercentDelta] = useState(0); // -50% to +100%
  const [tempOffset, setTempOffset] = useState(0.0); // -4°C to +6°C
  const [sowingShiftDays, setSowingShiftDays] = useState(0); // -30 to +30 days
  const [waterSource, setWaterSource] = useState('Canal Irrigation');
  const [targetCrop, setTargetCrop] = useState('Paddy (Rice)');
  const [activeSituation, setActiveSituation] = useState('Custom Parameters');

  // Situational Emergency Presets
  const SITUATIONAL_PRESETS = [
    {
      id: 'heatwave',
      name: '☀️ Severe Heatwave Spike (+4.5°C)',
      rainDelta: -25,
      tempOffset: 4.5,
      sowingShift: 10,
      water: 'Canal Irrigation',
      desc: 'Heat spike during anthesis causing pollen sterility and accelerated evapotranspiration.'
    },
    {
      id: 'dry_break',
      name: '🏜️ Extended 14-Day Dry Break (-45% Rain)',
      rainDelta: -45,
      tempOffset: 2.0,
      sowingShift: 14,
      water: 'Rainfed / Natural Only',
      desc: 'Monsoon hiatus in vegetative phase leading to acute soil moisture deficit.'
    },
    {
      id: 'flash_deluge',
      name: '⛈️ Sudden Monsoon Deluge (+75% Rain)',
      rainDelta: 75,
      tempOffset: -1.0,
      sowingShift: -5,
      water: 'Canal Irrigation',
      desc: 'Excess precipitation causing root asphyxia and standing water submergence.'
    },
    {
      id: 'groundwater_crisis',
      name: '📉 Aquifer Depletion (Tube-well Failure)',
      rainDelta: -30,
      tempOffset: 1.5,
      sowingShift: 7,
      water: 'Tube-well / Borewell',
      desc: 'Falling water table limits critical supplemental irrigations during pod filling.'
    }
  ];

  const applyPreset = (preset) => {
    setRainPercentDelta(preset.rainDelta);
    setTempOffset(preset.tempOffset);
    setSowingShiftDays(preset.sowingShift);
    setWaterSource(preset.water);
    setActiveSituation(preset.name);
  };

  const resetToBaseline = () => {
    setRainPercentDelta(0);
    setTempOffset(0);
    setSowingShiftDays(0);
    setWaterSource('Canal Irrigation');
    setActiveSituation('Baseline Telemetry');
  };

  // Instant Mathematical Simulation Calculations
  const simulationResults = useMemo(() => {
    const baselineTemp = telemetry.temp;
    const simTemp = parseFloat((baselineTemp + tempOffset).toFixed(1));
    const baselineRain = telemetry.rainMm7d;
    const simRain = Math.max(0, parseFloat((baselineRain * (1 + rainPercentDelta / 100)).toFixed(1)));

    const waterBuffers = {
      'Drip Irrigation': 0.85,
      'Canal Irrigation': 0.70,
      'Tube-well / Borewell': 0.65,
      'Rainfed / Natural Only': 0.20
    };
    const buffer = waterBuffers[waterSource] || 0.5;

    // Thermal penalty
    let tempPenalty = 0;
    if (simTemp > 33) tempPenalty = (simTemp - 33) * 9.5;
    else if (simTemp < 20) tempPenalty = (20 - simTemp) * 9.0;

    // Rain penalty
    let rainPenalty = 0;
    if (rainPercentDelta < -15) {
      rainPenalty = Math.abs(rainPercentDelta + 15) * (1.0 - buffer * 0.7) * 0.85;
    } else if (rainPercentDelta > 50) {
      rainPenalty = (rainPercentDelta - 50) * 0.75;
    }

    const sowPenalty = Math.abs(sowingShiftDays) * 0.9;
    const baseSuit = 92.0;
    const scenarioSuitability = Math.max(10.0, Math.min(98.0, parseFloat((baseSuit - tempPenalty - rainPenalty - sowPenalty).toFixed(1))));
    const baselineSuitability = 90.0;
    const suitDelta = parseFloat((scenarioSuitability - baselineSuitability).toFixed(1));

    // Yield projection & economic estimate
    const estimatedYieldPct = Math.max(15, Math.min(105, parseFloat((100 - tempPenalty * 0.9 - rainPenalty * 1.1 - sowPenalty * 0.7).toFixed(1))));
    const baselineGrossReturn = 48000; // ₹/Acre for Paddy/Wheat
    const estimatedLossRupees = Math.round(baselineGrossReturn * (1.0 - estimatedYieldPct / 100));

    // Multi-factor stress components
    const rStress = Math.min(100, Math.max(5, Math.abs(rainPercentDelta) * 0.9 + (rainPercentDelta < -20 ? 25 : 0)));
    const tStress = Math.min(100, Math.max(5, Math.max(0, simTemp - 30.0) * 14.0 + Math.max(0, 21.0 - simTemp) * 8.0));
    const wStress = Math.min(100, Math.max(5, (1.0 - buffer) * 80.0 + (rainPercentDelta < -25 ? 18 : 0)));
    const fHazard = rainPercentDelta > 40 ? Math.min(100, (rainPercentDelta - 40) * 1.6) : 5.0;

    const compositeRisk = Math.min(98, Math.max(10, Math.round(0.35 * rStress + 0.25 * tStress + 0.25 * wStress + 0.15 * fHazard)));

    return {
      simTemp,
      simRain,
      scenarioSuitability,
      suitDelta,
      estimatedYieldPct,
      estimatedLossRupees,
      tempPenalty: parseFloat(tempPenalty.toFixed(1)),
      rainPenalty: parseFloat(rainPenalty.toFixed(1)),
      sowPenalty: parseFloat(sowPenalty.toFixed(1)),
      compositeRisk,
      rStress,
      tStress,
      wStress,
      fHazard
    };
  }, [rainPercentDelta, tempOffset, sowingShiftDays, waterSource, telemetry]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      
      {/* Header Banner with Multi-Color Contrast & Multi-Font Typography */}
      <div className="glass-card" style={{ 
        padding: '1.4rem 1.6rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexWrap: 'wrap', 
        gap: '1rem',
        background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.12) 0%, rgba(16, 37, 30, 0.95) 50%, rgba(56, 189, 248, 0.08) 100%)',
        border: '1.5px solid rgba(251, 146, 60, 0.3)',
        boxShadow: '0 12px 35px rgba(0,0,0,0.5)',
        borderRadius: '18px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              background: 'rgba(251, 146, 60, 0.18)',
              border: '1px solid rgba(251, 146, 60, 0.45)',
              color: '#FB923C',
              borderRadius: '999px',
              padding: '0.2rem 0.65rem',
              fontSize: '0.74rem',
              fontWeight: 800,
              fontFamily: 'var(--font-display)'
            }}>
              <span>⚡ What-If Climate Sandbox</span>
            </span>
            <span style={{ fontSize: '0.75rem', color: '#38BDF8', fontWeight: 700 }}>
              Stage 06: SIMULATE • Agronomic Recalculation Engine
            </span>
          </div>

          {/* Multi-font & Multi-color Heading */}
          <h2 style={{ fontSize: '1.6rem', margin: 0, letterSpacing: '-0.02em', display: 'flex', alignItems: 'baseline', gap: '0.45rem', flexWrap: 'wrap' }}>
            <span style={{ color: '#FB923C', fontFamily: 'var(--font-display)', fontWeight: 900 }}>
              What-If
            </span>
            <span style={{ color: '#F7F1E3', fontFamily: 'var(--font-heading)' }}>
              Agriculture Climate
            </span>
            <span style={{ background: 'linear-gradient(135deg, #38BDF8 0%, #818CF8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontFamily: 'var(--font-sora)', fontWeight: 800 }}>
              Stress Lab
            </span>
          </h2>

          <p style={{ fontSize: '0.84rem', color: '#B9C6BB', margin: '0.25rem 0 0' }}>
            Simulate adverse climate shocks, delay in monsoons, and water distress before committing capital to inputs.
          </p>
        </div>

        <button
          onClick={resetToBaseline}
          className="btn btn-secondary"
          style={{ fontSize: '0.8rem', gap: '0.35rem', borderColor: 'rgba(251, 146, 60, 0.35)', color: '#FB923C' }}
        >
          <RotateCcw className="w-3.5 h-3.5" style={{ color: '#FB923C' }} /> {tr('Reset Baseline')}
        </button>
      </div>

      {/* QUICK-LOAD SITUATIONAL PRESETS WITH CHROMATIC ACCENTS */}
      <div className="glass-card" style={{ padding: '1.1rem 1.35rem', background: 'rgba(24, 58, 45, 0.75)', border: '1px solid rgba(89, 199, 177, 0.22)' }}>
        <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#FBBF24', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.65rem', fontFamily: 'var(--font-display)' }}>
          🚨 {tr('Quick-Load Situational Stress Presets:')}
        </span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem' }}>
          {SITUATIONAL_PRESETS.map((preset, idx) => {
            const isSelected = activeSituation === preset.name;
            const presetColors = ['#FB7185', '#FB923C', '#38BDF8', '#818CF8'];
            const pColor = presetColors[idx % presetColors.length];
            return (
              <button
                key={preset.id}
                onClick={() => applyPreset(preset)}
                style={{
                  textAlign: 'left',
                  padding: '0.75rem 0.95rem',
                  borderRadius: '12px',
                  background: isSelected ? `${pColor}22` : 'rgba(16, 37, 30, 0.65)',
                  border: isSelected ? `2px solid ${pColor}` : `1px solid ${pColor}33`,
                  boxShadow: isSelected ? `0 4px 16px ${pColor}44` : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.15s'
                }}
              >
                <strong style={{ fontSize: '0.84rem', color: isSelected ? pColor : '#F7F1E3', display: 'block', marginBottom: '0.2rem', fontFamily: 'var(--font-heading)' }}>
                  {tr(preset.name)}
                </strong>
                <p style={{ fontSize: '0.72rem', color: '#B9C6BB', margin: 0, lineHeight: 1.35 }}>
                  {tr(preset.desc)}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* SIMULATION SLIDERS & DYNAMIC RESULTS DISPLAY */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
        
        {/* SLIDERS COLUMN */}
        <div className="glass-card" style={{ padding: '1.35rem', display: 'flex', flexDirection: 'column', gap: '1.2rem', background: 'rgba(24, 58, 45, 0.75)', border: '1.5px solid rgba(89, 199, 177, 0.25)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <Sliders className="w-4 h-4" style={{ color: '#FB923C' }} />
            <h3 style={{ fontSize: '1.05rem', color: '#F7F1E3', margin: 0, fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
              {tr('Adjust Environmental Parameters')}
            </h3>
          </div>

          {/* 1. Rainfall Deviation Slider (Sky Blue) */}
          <div style={{ background: 'rgba(56, 189, 248, 0.06)', padding: '0.85rem', borderRadius: '12px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
              <label style={{ fontSize: '0.8rem', color: '#B9C6BB', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Droplets className="w-3.5 h-3.5" style={{ color: '#38BDF8' }} /> {tr('Monsoon Rainfall Deviation:')}
              </label>
              <strong style={{ fontSize: '0.95rem', color: rainPercentDelta < 0 ? '#FB7185' : '#38BDF8', fontFamily: 'var(--font-display)', fontWeight: 800 }}>
                {rainPercentDelta > 0 ? `+${rainPercentDelta}%` : `${rainPercentDelta}%`}
                <span style={{ fontSize: '0.74rem', color: '#B9C6BB', marginLeft: '0.3rem', fontWeight: 500 }}>
                  ({simulationResults.simRain} mm)
                </span>
              </strong>
            </div>
            <input 
              type="range" 
              min="-50" 
              max="100" 
              step="5" 
              value={rainPercentDelta} 
              onChange={(e) => { setRainPercentDelta(parseInt(e.target.value)); setActiveSituation('Custom Parameters'); }}
              style={{ accentColor: '#38BDF8', width: '100%' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: '#94A3B8', marginTop: '0.25rem' }}>
              <span style={{ color: '#FB7185' }}>-50% (Severe Drought)</span>
              <span style={{ color: '#38BDF8' }}>0% (Normal)</span>
              <span style={{ color: '#818CF8' }}>+100% (Deluge)</span>
            </div>
          </div>

          {/* 2. Temperature Shift Slider (Coral/Pink) */}
          <div style={{ background: 'rgba(251, 113, 133, 0.06)', padding: '0.85rem', borderRadius: '12px', border: '1px solid rgba(251, 113, 133, 0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
              <label style={{ fontSize: '0.8rem', color: '#B9C6BB', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Thermometer className="w-3.5 h-3.5" style={{ color: '#FB7185' }} /> {tr('Ambient Temperature Offset:')}
              </label>
              <strong style={{ fontSize: '0.95rem', color: tempOffset > 0 ? '#FB7185' : '#38BDF8', fontFamily: 'var(--font-display)', fontWeight: 800 }}>
                {tempOffset > 0 ? `+${tempOffset.toFixed(1)}°C` : `${tempOffset.toFixed(1)}°C`}
                <span style={{ fontSize: '0.74rem', color: '#B9C6BB', marginLeft: '0.3rem', fontWeight: 500 }}>
                  ({simulationResults.simTemp}°C)
                </span>
              </strong>
            </div>
            <input 
              type="range" 
              min="-4.0" 
              max="6.0" 
              step="0.5" 
              value={tempOffset} 
              onChange={(e) => { setTempOffset(parseFloat(e.target.value)); setActiveSituation('Custom Parameters'); }}
              style={{ accentColor: '#FB7185', width: '100%' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: '#94A3B8', marginTop: '0.25rem' }}>
              <span style={{ color: '#38BDF8' }}>-4.0°C (Cold Wave)</span>
              <span style={{ color: '#84CC16' }}>0.0°C (Normal)</span>
              <span style={{ color: '#FB7185' }}>+6.0°C (Extreme Heat)</span>
            </div>
          </div>

          {/* 3. Sowing Window Shift (Orange) */}
          <div style={{ background: 'rgba(251, 146, 60, 0.06)', padding: '0.85rem', borderRadius: '12px', border: '1px solid rgba(251, 146, 60, 0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
              <label style={{ fontSize: '0.8rem', color: '#B9C6BB', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Calendar className="w-3.5 h-3.5" style={{ color: '#FB923C' }} /> {tr('Planned Sowing Window Shift:')}
              </label>
              <strong style={{ fontSize: '0.95rem', color: sowingShiftDays === 0 ? '#84CC16' : '#FB923C', fontFamily: 'var(--font-display)', fontWeight: 800 }}>
                {sowingShiftDays > 0 ? `+${sowingShiftDays} Days Late` : sowingShiftDays < 0 ? `${sowingShiftDays} Days Early` : 'On-Time (Optimal)'}
              </strong>
            </div>
            <input 
              type="range" 
              min="-20" 
              max="30" 
              step="2" 
              value={sowingShiftDays} 
              onChange={(e) => { setSowingShiftDays(parseInt(e.target.value)); setActiveSituation('Custom Parameters'); }}
              style={{ accentColor: '#FB923C', width: '100%' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: '#94A3B8', marginTop: '0.25rem' }}>
              <span>-20d (Early)</span>
              <span style={{ color: '#84CC16' }}>0 (Optimal)</span>
              <span style={{ color: '#FB7185' }}>+30d (Severe Delay)</span>
            </div>
          </div>

          {/* 4. Irrigation Source */}
          <div style={{ background: 'rgba(132, 204, 22, 0.06)', padding: '0.85rem', borderRadius: '12px', border: '1px solid rgba(132, 204, 22, 0.2)' }}>
            <label style={{ fontSize: '0.8rem', color: '#B9C6BB', fontWeight: 600, display: 'block', marginBottom: '0.35rem' }}>
              {tr('Irrigation & Water Management:')}
            </label>
            <select
              value={waterSource}
              onChange={(e) => { setWaterSource(e.target.value); setActiveSituation('Custom Parameters'); }}
              style={{
                width: '100%',
                background: 'rgba(16, 37, 30, 0.95)',
                border: '1.5px solid rgba(132, 204, 22, 0.4)',
                borderRadius: '8px',
                padding: '0.55rem',
                color: '#F7F1E3',
                fontSize: '0.82rem',
                outline: 'none',
                fontFamily: 'var(--font-display)',
                fontWeight: 700
              }}
            >
              <option value="Canal Irrigation" style={{ background: '#10251E' }}>{tr('Canal Irrigation')}</option>
              <option value="Drip Irrigation" style={{ background: '#10251E' }}>{tr('Drip Irrigation')}</option>
              <option value="Tube-well / Borewell" style={{ background: '#10251E' }}>{tr('Tube-well / Borewell')}</option>
              <option value="Rainfed / Natural Only" style={{ background: '#10251E' }}>{tr('Rainfed / Natural Only')}</option>
            </select>
          </div>
        </div>

        {/* OUTCOMES & ECONOMIC IMPACT COLUMN */}
        <div className="glass-card" style={{ padding: '1.35rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1rem', background: 'rgba(24, 58, 45, 0.75)', border: '1.5px solid rgba(89, 199, 177, 0.25)' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <h3 style={{ fontSize: '1.05rem', color: '#F7F1E3', margin: 0, fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                {tr('Projected Crop Suitability Impact') || tr('Simulated Impact Analysis')}
              </h3>
              <span style={{
                fontSize: '0.68rem',
                padding: '0.2rem 0.6rem',
                borderRadius: '999px',
                background: 'rgba(129, 140, 248, 0.18)',
                color: '#818CF8',
                border: '1px solid rgba(129, 140, 248, 0.4)',
                fontWeight: 800,
                fontFamily: 'var(--font-display)'
              }}>
                Instant Physics Engine
              </span>
            </div>

            {/* Suitability Score Box */}
            <div style={{
              background: 'rgba(16, 37, 30, 0.9)',
              border: '1.5px solid rgba(89, 199, 177, 0.25)',
              borderRadius: '14px',
              padding: '1.1rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1rem'
            }}>
              <div>
                <span style={{ fontSize: '0.76rem', color: '#B9C6BB', display: 'block', fontWeight: 600 }}>{tr('Predicted Suitability')}</span>
                <div style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: 900, 
                  color: simulationResults.scenarioSuitability >= 80 ? '#84CC16' : simulationResults.scenarioSuitability >= 60 ? '#FBBF24' : '#FB7185', 
                  lineHeight: 1,
                  fontFamily: 'var(--font-heading)',
                  textShadow: '0 0 16px rgba(0,0,0,0.5)'
                }}>
                  {simulationResults.scenarioSuitability}%
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.76rem', color: '#B9C6BB', display: 'block', fontWeight: 600 }}>{tr('Delta vs Baseline') || 'Delta'}</span>
                <strong style={{ fontSize: '1.4rem', color: simulationResults.suitDelta >= 0 ? '#84CC16' : '#FB7185', fontFamily: 'var(--font-heading)' }}>
                  {simulationResults.suitDelta >= 0 ? `+${simulationResults.suitDelta}%` : `${simulationResults.suitDelta}%`}
                </strong>
              </div>
            </div>

            {/* Estimated Yield & Economic Loss */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ background: 'rgba(251, 191, 36, 0.1)', border: '1px solid rgba(251, 191, 36, 0.35)', borderRadius: '12px', padding: '0.85rem' }}>
                <span style={{ fontSize: '0.7rem', color: '#B9C6BB', display: 'block', fontWeight: 600 }}>{tr('Harvest Yield Expectancy') || tr('Yield Potential Projection')}</span>
                <strong style={{ fontSize: '1.35rem', color: '#FBBF24', fontFamily: 'var(--font-heading)' }}>{simulationResults.estimatedYieldPct}%</strong>
                <span style={{ fontSize: '0.66rem', color: '#94A3B8', display: 'block' }}>of potential maximum</span>
              </div>

              <div style={{ background: 'rgba(251, 113, 133, 0.1)', border: '1px solid rgba(251, 113, 133, 0.35)', borderRadius: '12px', padding: '0.85rem' }}>
                <span style={{ fontSize: '0.7rem', color: '#B9C6BB', display: 'block', fontWeight: 600 }}>{tr('Estimated Financial Risk') || tr('Estimated Financial Impact (₹/Acre)')}</span>
                <strong style={{ fontSize: '1.35rem', color: '#FB7185', fontFamily: 'var(--font-heading)' }}>-₹{simulationResults.estimatedLossRupees.toLocaleString()}</strong>
                <span style={{ fontSize: '0.66rem', color: '#94A3B8', display: 'block' }}>Potential loss per acre</span>
              </div>
            </div>

            {/* Penalty Breakdown Bar */}
            <div style={{ background: 'rgba(16, 37, 30, 0.6)', padding: '0.75rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <span style={{ fontSize: '0.72rem', color: '#B9C6BB', fontWeight: 800, textTransform: 'uppercase', display: 'block', marginBottom: '0.45rem', letterSpacing: '0.04em' }}>
                {tr('Deduction Breakdown:') || tr('Multi-Factor Stress Breakdown')}
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.76rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#F7F1E3' }}>🌡️ <span style={{ color: '#FB7185' }}>{tr('Thermal Stress')}</span></span>
                  <span style={{ color: '#FB7185', fontWeight: 700 }}>-{simulationResults.tempPenalty}%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#F7F1E3' }}>💧 <span style={{ color: '#38BDF8' }}>{tr('Water Stress')}</span></span>
                  <span style={{ color: '#FB7185', fontWeight: 700 }}>-{simulationResults.rainPenalty}%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#F7F1E3' }}>📅 <span style={{ color: '#FB923C' }}>{tr('Planned Sowing Window Shift:')}</span></span>
                  <span style={{ color: '#FB7185', fontWeight: 700 }}>-{simulationResults.sowPenalty}%</span>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => alert(`Scenario Simulation Saved: ${activeSituation} for ${targetCrop}. Suitability: ${simulationResults.scenarioSuitability}%.`)}
            className="btn"
            style={{ 
              width: '100%', 
              padding: '0.65rem', 
              fontSize: '0.85rem',
              background: 'linear-gradient(135deg, #FB923C 0%, #E11D48 100%)',
              color: '#FFFFFF',
              fontWeight: 800,
              boxShadow: '0 4px 16px rgba(251, 146, 60, 0.4)'
            }}
          >
            <Save className="w-4 h-4" /> {tr('Save Scenario to Decision Portfolio') || tr('Save Scenario')}
          </button>
        </div>

      </div>

    </div>
  );
}
