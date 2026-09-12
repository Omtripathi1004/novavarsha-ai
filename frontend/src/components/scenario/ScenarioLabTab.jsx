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
      
      {/* Header Banner */}
      <div className="glass-card-saffron" style={{ 
        padding: '1.4rem 1.6rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexWrap: 'wrap', 
        gap: '1rem',
        background: 'linear-gradient(135deg, rgba(255, 119, 34, 0.12) 0%, rgba(14, 22, 38, 0.95) 100%)',
        border: '1px solid var(--border-saffron)'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.35rem' }}>
            <span className="neon-badge neon-badge-saffron">
              <span className="neon-dot neon-dot-saffron"></span>
              <span>⚡ What-If Climate Sandbox</span>
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--neon-cyan)', fontWeight: 700 }}>
              Interactive Agronomic Recalculation Engine
            </span>
          </div>
          <h2 style={{ fontSize: '1.45rem', margin: 0, fontFamily: 'var(--font-heading)' }} className="gradient-text-saffron-emerald">
            {tr('What-If Agriculture Climate Stress Lab')}
          </h2>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', margin: '0.25rem 0 0' }}>
            Simulate adverse climate shocks, delay in monsoons, and water distress before investing in inputs.
          </p>
        </div>

        <button
          onClick={resetToBaseline}
          className="btn btn-secondary"
          style={{ fontSize: '0.8rem', gap: '0.35rem' }}
        >
          <RotateCcw className="w-3.5 h-3.5" /> {tr('Reset Baseline')}
        </button>
      </div>

      {/* QUICK-LOAD SITUATIONAL PRESETS */}
      <div className="glass-card" style={{ padding: '1rem 1.25rem' }}>
        <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.5rem' }}>
          🚨 {tr('Quick-Load Situational Stress Presets:')}
        </span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.65rem' }}>
          {SITUATIONAL_PRESETS.map(preset => {
            const isSelected = activeSituation === preset.name;
            return (
              <button
                key={preset.id}
                onClick={() => applyPreset(preset)}
                style={{
                  textAlign: 'left',
                  padding: '0.65rem 0.85rem',
                  borderRadius: '10px',
                  background: isSelected ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                  border: isSelected ? '1.5px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.08)',
                  cursor: 'pointer',
                  transition: 'all 0.15s'
                }}
              >
                <strong style={{ fontSize: '0.82rem', color: isSelected ? '#fbbf24' : '#fff', display: 'block', marginBottom: '0.15rem' }}>
                  {tr(preset.name)}
                </strong>
                <p style={{ fontSize: '0.72rem', color: '#94a3b8', margin: 0, lineHeight: 1.3 }}>
                  {tr(preset.desc)}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* SIMULATION SLIDERS & DYNAMIC RESULTS DISPLAY */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '1.25rem' }}>
        
        {/* SLIDERS COLUMN */}
        <div className="glass-card" style={{ padding: '1.35rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <Sliders className="w-4 h-4 text-amber-400" />
            <h3 style={{ fontSize: '1.05rem', color: '#fff', margin: 0 }}>
              {tr('Adjust Environmental Parameters')}
            </h3>
          </div>

          {/* 1. Rainfall Deviation Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
              <label style={{ fontSize: '0.8rem', color: '#cbd5e1', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Droplets className="w-3.5 h-3.5 text-sky-400" /> {tr('Monsoon Rainfall Deviation:')}
              </label>
              <strong style={{ fontSize: '0.9rem', color: rainPercentDelta < 0 ? '#fb7185' : '#34d399' }}>
                {rainPercentDelta > 0 ? `+${rainPercentDelta}%` : `${rainPercentDelta}%`}
                <span style={{ fontSize: '0.74rem', color: '#94a3b8', marginLeft: '0.3rem' }}>
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
              style={{ accentColor: '#0284c7' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: '#64748b', marginTop: '0.25rem' }}>
              <span>-50% (Severe Drought)</span>
              <span>0% (IMD Normal)</span>
              <span>+100% (Deluge)</span>
            </div>
          </div>

          {/* 2. Temperature Shift Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
              <label style={{ fontSize: '0.8rem', color: '#cbd5e1', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Thermometer className="w-3.5 h-3.5 text-amber-400" /> {tr('Ambient Temperature Offset:')}
              </label>
              <strong style={{ fontSize: '0.9rem', color: tempOffset > 0 ? '#fbbf24' : '#38bdf8' }}>
                {tempOffset > 0 ? `+${tempOffset.toFixed(1)}°C` : `${tempOffset.toFixed(1)}°C`}
                <span style={{ fontSize: '0.74rem', color: '#94a3b8', marginLeft: '0.3rem' }}>
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
              style={{ accentColor: '#f59e0b' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: '#64748b', marginTop: '0.25rem' }}>
              <span>-4.0°C (Cold Wave)</span>
              <span>0.0°C (Normal)</span>
              <span>+6.0°C (Extreme Heat)</span>
            </div>
          </div>

          {/* 3. Sowing Window Shift */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
              <label style={{ fontSize: '0.8rem', color: '#cbd5e1', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Calendar className="w-3.5 h-3.5 text-emerald-400" /> {tr('Planned Sowing Window Shift:')}
              </label>
              <strong style={{ fontSize: '0.9rem', color: sowingShiftDays === 0 ? '#34d399' : '#f87171' }}>
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
              style={{ accentColor: '#10b981' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: '#64748b', marginTop: '0.25rem' }}>
              <span>-20d (Premature)</span>
              <span>0 (Recommended)</span>
              <span>+30d (Severe Delay)</span>
            </div>
          </div>

          {/* 4. Irrigation Source */}
          <div>
            <label style={{ fontSize: '0.8rem', color: '#cbd5e1', fontWeight: 600, display: 'block', marginBottom: '0.35rem' }}>
              {tr('Irrigation & Water Management:')}
            </label>
            <select
              value={waterSource}
              onChange={(e) => { setWaterSource(e.target.value); setActiveSituation('Custom Parameters'); }}
              style={{
                width: '100%',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                padding: '0.5rem',
                color: '#fff',
                fontSize: '0.82rem',
                outline: 'none'
              }}
            >
              <option value="Canal Irrigation" style={{ background: '#0b1120' }}>{tr('Canal Irrigation')}</option>
              <option value="Drip Irrigation" style={{ background: '#0b1120' }}>{tr('Drip Irrigation')}</option>
              <option value="Tube-well / Borewell" style={{ background: '#0b1120' }}>{tr('Tube-well / Borewell')}</option>
              <option value="Rainfed / Natural Only" style={{ background: '#0b1120' }}>{tr('Rainfed / Natural Only')}</option>
            </select>
          </div>
        </div>

        {/* OUTCOMES & ECONOMIC IMPACT COLUMN */}
        <div className="glass-card" style={{ padding: '1.35rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <h3 style={{ fontSize: '1.05rem', color: '#fff', margin: 0 }}>
                {tr('Projected Crop Suitability Impact') || tr('Simulated Impact Analysis')}
              </h3>
              <span className="badge badge-amber" style={{ fontSize: '0.68rem' }}>
                Instant Physics Engine
              </span>
            </div>

            {/* Suitability Score Box */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '14px',
              padding: '1.1rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1rem'
            }}>
              <div>
                <span style={{ fontSize: '0.76rem', color: '#94a3b8', display: 'block' }}>{tr('Predicted Suitability')}</span>
                <div style={{ fontSize: '2.4rem', fontWeight: 900, color: simulationResults.scenarioSuitability >= 80 ? '#34d399' : simulationResults.scenarioSuitability >= 60 ? '#fbbf24' : '#fb7185', lineHeight: 1 }}>
                  {simulationResults.scenarioSuitability}%
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.76rem', color: '#94a3b8', display: 'block' }}>{tr('Delta vs Baseline') || 'Delta'}</span>
                <strong style={{ fontSize: '1.3rem', color: simulationResults.suitDelta >= 0 ? '#34d399' : '#f87171' }}>
                  {simulationResults.suitDelta >= 0 ? `+${simulationResults.suitDelta}%` : `${simulationResults.suitDelta}%`}
                </strong>
              </div>
            </div>

            {/* Estimated Yield & Economic Loss */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem', marginBottom: '1rem' }}>
              <div style={{ background: 'rgba(234, 88, 12, 0.1)', border: '1px solid rgba(234, 88, 12, 0.25)', borderRadius: '10px', padding: '0.75rem' }}>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8', display: 'block' }}>{tr('Harvest Yield Expectancy') || tr('Yield Potential Projection')}</span>
                <strong style={{ fontSize: '1.25rem', color: '#fbbf24' }}>{simulationResults.estimatedYieldPct}%</strong>
                <span style={{ fontSize: '0.65rem', color: '#cbd5e1', display: 'block' }}>of potential maximum</span>
              </div>

              <div style={{ background: 'rgba(244, 63, 94, 0.1)', border: '1px solid rgba(244, 63, 94, 0.25)', borderRadius: '10px', padding: '0.75rem' }}>
                <span style={{ fontSize: '0.7rem', color: '#94a3b8', display: 'block' }}>{tr('Estimated Financial Risk') || tr('Estimated Financial Impact (₹/Acre)')}</span>
                <strong style={{ fontSize: '1.25rem', color: '#fda4af' }}>-₹{simulationResults.estimatedLossRupees.toLocaleString()}</strong>
                <span style={{ fontSize: '0.65rem', color: '#cbd5e1', display: 'block' }}>Potential loss per acre</span>
              </div>
            </div>

            {/* Penalty Breakdown Bar */}
            <div>
              <span style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
                {tr('Deduction Breakdown:') || tr('Multi-Factor Stress Breakdown')}
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.76rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#cbd5e1' }}>🌡️ {tr('Thermal Stress')}</span>
                  <span style={{ color: '#f87171', fontWeight: 700 }}>-{simulationResults.tempPenalty}%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#cbd5e1' }}>💧 {tr('Water Stress')}</span>
                  <span style={{ color: '#f87171', fontWeight: 700 }}>-{simulationResults.rainPenalty}%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#cbd5e1' }}>📅 {tr('Planned Sowing Window Shift:')}</span>
                  <span style={{ color: '#f87171', fontWeight: 700 }}>-{simulationResults.sowPenalty}%</span>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => alert(`Scenario Simulation Saved: ${activeSituation} for ${targetCrop}. Suitability: ${simulationResults.scenarioSuitability}%.`)}
            className="btn btn-primary"
            style={{ width: '100%', padding: '0.65rem', fontSize: '0.84rem', background: 'linear-gradient(135deg, #ea580c 0%, #f59e0b 100%)' }}
          >
            <Save className="w-4 h-4" /> {tr('Save Scenario to Decision Portfolio') || tr('Save Scenario')}
          </button>
        </div>

      </div>

    </div>
  );
}
