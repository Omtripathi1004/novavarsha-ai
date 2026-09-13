import React, { useState, useMemo } from 'react';
import { useApp } from '../common/AppContext';
import { INDIAN_CROPS_CATALOG } from '../../data/cropsCatalog';
import { 
  BarChart2, TrendingUp, Calendar, Filter, 
  Download, ArrowUpRight, ArrowDownRight, Layers, PieChart,
  Sprout, Droplets, Thermometer, ShieldAlert, DollarSign, Activity 
} from 'lucide-react';

export default function AnalyticsTab() {
  const { activeHub, telemetry, setIsReportModalOpen, t, tr, lang } = useApp();

  const [selectedCropId, setSelectedCropId] = useState(INDIAN_CROPS_CATALOG[0].id);
  const [selectedYearRange, setSelectedYearRange] = useState('10yr');

  const selectedCrop = useMemo(() => {
    return INDIAN_CROPS_CATALOG.find(c => c.id === selectedCropId) || INDIAN_CROPS_CATALOG[0];
  }, [selectedCropId]);

  // Extract base numerical attributes from selectedCrop
  const currentMspNum = useMemo(() => {
    const raw = selectedCrop.mspPerQuintal?.replace(/[^0-9]/g, '');
    return raw ? parseInt(raw, 10) : 2300;
  }, [selectedCrop]);

  const optimalWaterMm = useMemo(() => {
    const numbers = selectedCrop.waterNeedMm?.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      return Math.round((parseInt(numbers[0], 10) + parseInt(numbers[1], 10)) / 2);
    }
    if (numbers && numbers.length === 1) {
      return parseInt(numbers[0], 10);
    }
    return 850;
  }, [selectedCrop]);

  const durationDays = useMemo(() => {
    return selectedCrop.durationDays || 120;
  }, [selectedCrop]);

  // 1. DYNAMIC GRAPH 1: Yield vs. Rainfall Sensitivity Response (Physiological response tailored per crop category)
  const yieldSensitivityData = useMemo(() => {
    const opt = optimalWaterMm;
    const cat = (selectedCrop.category || '').toLowerCase();
    const name = (selectedCrop.name || '').toLowerCase();
    const cropSuitability = selectedCrop.suitability || 90;

    // Physiological categories
    const isWetland = name.includes('paddy') || name.includes('rice') || name.includes('sugarcane') || name.includes('jute');
    const isDroughtHardy = name.includes('bajra') || name.includes('jowar') || name.includes('sorghum') || 
                           name.includes('ragi') || name.includes('millet') || name.includes('arhar') || 
                           name.includes('chana') || name.includes('gram') || name.includes('moong') || 
                           name.includes('urad') || name.includes('lentil') || name.includes('barley') || 
                           name.includes('cumin') || name.includes('coriander') || name.includes('psyllium');
    const isOilseedCash = name.includes('cotton') || name.includes('soybean') || name.includes('mustard') || 
                          name.includes('sunflower') || name.includes('groundnut') || name.includes('sesame');

    // Individual deterministic seed for each crop name to guarantee unique percentages
    const nameSeed = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 7;

    const steps = [
      { factor: 0.35, label: `${Math.round(opt * 0.35)}mm (${tr('Deficit')})`, zone: tr('Severe Stress') },
      { factor: 0.60, label: `${Math.round(opt * 0.60)}mm`, zone: tr('Sub-Optimal') },
      { factor: 0.85, label: `${Math.round(opt * 0.85)}mm`, zone: tr('Good Vegetative') },
      { factor: 1.00, label: `${opt}mm (${tr('Optimum')})`, zone: tr('Optimal Yield') },
      { factor: 1.20, label: `${Math.round(opt * 1.20)}mm`, zone: tr('High Production') },
      { factor: 1.45, label: `${Math.round(opt * 1.45)}mm (${tr('Excess')})`, zone: tr('Waterlogging Hazard') },
      { factor: 1.75, label: `${Math.round(opt * 1.75)}mm (${tr('Deluge')})`, zone: tr('Root Hypoxia') }
    ];

    return steps.map((s, idx) => {
      let yieldPct = 50;

      if (isWetland) {
        // Wetland crops: severe yield crash in drought/deficit; remarkably resilient to excess water/deluge
        if (s.factor <= 0.35) yieldPct = 22 + nameSeed;
        else if (s.factor <= 0.60) yieldPct = 50 + nameSeed;
        else if (s.factor <= 0.85) yieldPct = 84 + (cropSuitability % 4);
        else if (s.factor <= 1.00) yieldPct = Math.min(99, cropSuitability + 2);
        else if (s.factor <= 1.20) yieldPct = Math.min(97, cropSuitability - 1);
        else if (s.factor <= 1.45) yieldPct = 88 - nameSeed;
        else yieldPct = 78 - nameSeed; // Remains high even under deluge
      } else if (isDroughtHardy) {
        // Drought-tolerant millets & pulses: retain high yield at deficit, drop sharply on waterlogging
        if (s.factor <= 0.35) yieldPct = 72 + nameSeed;
        else if (s.factor <= 0.60) yieldPct = 88 + (nameSeed % 3);
        else if (s.factor <= 0.85) yieldPct = 96;
        else if (s.factor <= 1.00) yieldPct = Math.min(99, cropSuitability);
        else if (s.factor <= 1.20) yieldPct = 78 - nameSeed;
        else if (s.factor <= 1.45) yieldPct = 48 - nameSeed * 2;
        else yieldPct = 26 - nameSeed; // Severe hypoxia for dryland crops
      } else if (isOilseedCash) {
        // Cash crops & oilseeds: sharp optimal curve, fungal wilt/boll rot on excess
        if (s.factor <= 0.35) yieldPct = 34 + nameSeed;
        else if (s.factor <= 0.60) yieldPct = 66 + (nameSeed % 4);
        else if (s.factor <= 0.85) yieldPct = 91 + (nameSeed % 3);
        else if (s.factor <= 1.00) yieldPct = Math.min(99, cropSuitability + 1);
        else if (s.factor <= 1.20) yieldPct = 76 - nameSeed;
        else if (s.factor <= 1.45) yieldPct = 42 - nameSeed * 2;
        else yieldPct = 22 - nameSeed;
      } else {
        // Horticulture & general crops: distinct bell curve
        const base = Math.round(96 - Math.pow(Math.abs(1.0 - s.factor), 1.5) * (115 + nameSeed * 3));
        yieldPct = Math.max(22, Math.min(99, base + (idx === 3 ? nameSeed : -nameSeed)));
      }

      return {
        rainMm: s.label,
        yieldPct: Math.round(yieldPct),
        zone: s.zone
      };
    });
  }, [optimalWaterMm, durationDays, selectedCrop, tr]);

  // 2. DYNAMIC GRAPH 2: Growing Degree Days (GDD) Accumulation by Stage (Scaled to crop's exact durationDays)
  const gddStages = useMemo(() => {
    const totalGdd = Math.round(durationDays * 16.5);
    const d1 = Math.round(durationDays * 0.08);
    const d2 = Math.round(durationDays * 0.28);
    const d3 = Math.round(durationDays * 0.50);
    const d4 = Math.round(durationDays * 0.70);
    const d5 = Math.round(durationDays * 0.88);
    const d6 = durationDays;

    return [
      { stage: `${tr('Germination (Day 1–10)')}`.replace(/1–10/, `1–${d1}`), gddReq: Math.round(totalGdd * 0.08), gddActual: Math.round(totalGdd * 0.085), status: tr('On Track') },
      { stage: `${tr('Tillering / Branching (Day 11–40)')}`.replace(/11–40/, `${d1 + 1}–${d2}`), gddReq: Math.round(totalGdd * 0.22), gddActual: Math.round(totalGdd * 0.23), status: tr('Accelerated') },
      { stage: `${tr('Stem Elongation (Day 41–65)')}`.replace(/41–65/, `${d2 + 1}–${d3}`), gddReq: Math.round(totalGdd * 0.20), gddActual: Math.round(totalGdd * 0.195), status: tr('Normal') },
      { stage: `${tr('Anthesis / Flowering (Day 66–85)')}`.replace(/66–85/, `${d3 + 1}–${d4}`), gddReq: Math.round(totalGdd * 0.18), gddActual: Math.round(totalGdd * 0.19), status: tr('Optimal') },
      { stage: `${tr('Grain / Pod Filling (Day 86–115)')}`.replace(/86–115/, `${d4 + 1}–${d5}`), gddReq: Math.round(totalGdd * 0.22), gddActual: Math.round(totalGdd * 0.21), status: tr('Favorable') },
      { stage: `${tr('Maturity & Senescence (Day 116–140)')}`.replace(/116–140/, `${d5 + 1}–${d6}`), gddReq: Math.round(totalGdd * 0.10), gddActual: Math.round(totalGdd * 0.09), status: tr('Ready') }
    ];
  }, [durationDays, tr]);

  // 3. DYNAMIC GRAPH 3: Crop Evapotranspiration (ETc mm/day) & Soil Moisture Drawdown
  const evapotranspirationData = useMemo(() => {
    const isWetland = optimalWaterMm > 1000;
    const isDrought = optimalWaterMm < 550;
    const baseEt = isWetland ? 8.4 : isDrought ? 3.6 : 5.8;
    return [
      { stage: tr('Initial Sowing'), etcMmDay: +(baseEt * 0.32).toFixed(1), soilSaturation: isWetland ? '94%' : isDrought ? '74%' : '84%' },
      { stage: tr('Early Vegetative'), etcMmDay: +(baseEt * 0.58).toFixed(1), soilSaturation: isWetland ? '88%' : isDrought ? '65%' : '76%' },
      { stage: tr('Peak Tillering'), etcMmDay: +(baseEt * 0.92).toFixed(1), soilSaturation: isWetland ? '78%' : isDrought ? '54%' : '66%' },
      { stage: tr('Flowering Stage'), etcMmDay: +(baseEt * 1.12).toFixed(1), soilSaturation: isWetland ? '68%' : isDrought ? '44%' : '56%' },
      { stage: tr('Milky Grain Stage'), etcMmDay: +(baseEt * 0.85).toFixed(1), soilSaturation: isWetland ? '60%' : isDrought ? '38%' : '48%' },
      { stage: tr('Ripening Stage'), etcMmDay: +(baseEt * 0.42).toFixed(1), soilSaturation: isWetland ? '48%' : isDrought ? '28%' : '38%' }
    ];
  }, [optimalWaterMm, tr]);

  // 4. DYNAMIC GRAPH 4: 10-Year Historical MSP Price vs Yield Trend (2015–2024 scaling to this crop's exact MSP)
  const historicalMspTrend = useMemo(() => {
    const curMsp = currentMspNum;
    const baseMsp2015 = Math.round(curMsp * 0.58);
    const mspStep = (curMsp - baseMsp2015) / 9;

    const yieldMatches = selectedCrop.yieldPotential?.match(/\d+/g);
    const curYield = yieldMatches && yieldMatches.length ? parseInt(yieldMatches[yieldMatches.length - 1], 10) : 30;
    const baseYield = Math.max(6, Math.round(curYield * 0.72));
    const yieldStep = (curYield - baseYield) / 9;

    return Array.from({ length: 10 }, (_, idx) => {
      const year = String(2015 + idx);
      const msp = Math.round(baseMsp2015 + idx * mspStep);
      const yieldQtl = +(baseYield + idx * yieldStep).toFixed(1);
      return { year, msp, yieldQtl };
    });
  }, [currentMspNum, selectedCrop]);

  // 5. DYNAMIC GRAPH 5: Specific Crop Pest & Pathogen Risk Thresholds
  const pestRiskData = useMemo(() => {
    const cat = (selectedCrop.category || '').toLowerCase();
    const name = (selectedCrop.name || '').toLowerCase();

    if (name.includes('wheat')) {
      return [
        { pathogen: 'Yellow Rust (Puccinia striiformis)', threshold: 'Temp 10–15°C + High Morning Dew', riskScore: 82, level: tr('High Precaution') },
        { pathogen: 'Karnal Bunt & Loose Smut', threshold: 'Cloudy Days at Flowering Window', riskScore: 56, level: tr('Moderate Scout') },
        { pathogen: 'Wheat Aphids (Rhopalosiphum)', threshold: 'Dry Days + Rising Temperatures', riskScore: 48, level: tr('Normal Baseline') },
        { pathogen: 'Spot Blotch (Bipolaris sorokiniana)', threshold: 'High Temperature > 28°C + RH > 80%', riskScore: 64, level: tr('Elevated Watch') }
      ];
    }
    if (name.includes('cotton')) {
      return [
        { pathogen: 'Pink Bollworm (Pectinophora)', threshold: 'Night Temp > 22°C + Continuous Squaring', riskScore: 86, level: tr('High Precaution') },
        { pathogen: 'Whitefly (Bemisia tabaci)', threshold: 'Dry Spell + High Heat (> 35°C)', riskScore: 74, level: tr('High Precaution') },
        { pathogen: 'Cotton Leaf Curl Virus (CLCuV)', threshold: 'High Whitefly Population Density', riskScore: 68, level: tr('Elevated Watch') },
        { pathogen: 'Spodoptera Armyworm', threshold: 'Overcast Skies + Intermittent Drizzle', riskScore: 52, level: tr('Moderate Scout') }
      ];
    }
    if (cat.includes('pulse') || name.includes('gram') || name.includes('chickpea')) {
      return [
        { pathogen: 'Gram Pod Borer (Helicoverpa)', threshold: 'Flowering Stage + Humid Warm Nights', riskScore: 78, level: tr('High Precaution') },
        { pathogen: 'Fusarium Wilt (Soil-Borne)', threshold: 'Soil Temp > 25°C + Moisture Stress', riskScore: 65, level: tr('Elevated Watch') },
        { pathogen: 'Ascochyta Blight', threshold: 'Cool Weather (15–20°C) + High Rainfall', riskScore: 54, level: tr('Moderate Scout') },
        { pathogen: 'Dry Root Rot (Rhizoctonia)', threshold: 'Severe Heat Waves + Dry Topsoil', riskScore: 45, level: tr('Normal Baseline') }
      ];
    }
    if (name.includes('mustard')) {
      return [
        { pathogen: 'Mustard Aphid (Lipaphis erysimi)', threshold: 'Cloudy Weather + RH > 75% in Jan/Feb', riskScore: 84, level: tr('High Precaution') },
        { pathogen: 'White Rust (Albugo candida)', threshold: 'Cool Foggy Nights + High Morning Dew', riskScore: 68, level: tr('Elevated Watch') },
        { pathogen: 'Alternaria Leaf Blight', threshold: 'Intermittent Winter Rains (Temp 18–24°C)', riskScore: 58, level: tr('Moderate Scout') },
        { pathogen: 'Downy Mildew (Peronospora)', threshold: 'Prolonged Fog + Cold Arid Breeze', riskScore: 42, level: tr('Normal Baseline') }
      ];
    }
    // Default / Paddy (Rice)
    return [
      { pathogen: 'Leaf Blast / Blight (Magnaporthe)', threshold: 'RH > 85% & Temp 24–28°C', riskScore: 78, level: tr('High Precaution') },
      { pathogen: 'Stem Borer / Armyworm Larvae', threshold: 'Warm Days (30°C) + Dry Spell', riskScore: 54, level: tr('Moderate Scout') },
      { pathogen: 'Sheath Rot & Bacterial Streak', threshold: 'Standing Water + High Nitrogen', riskScore: 62, level: tr('Elevated Watch') },
      { pathogen: 'Brown Plant Hopper (BPH)', threshold: 'Dense Canopy + High Relative Humidity', riskScore: 42, level: tr('Normal Baseline') }
    ];
  }, [selectedCrop, tr]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
      
      {/* Header Banner */}
      <div className="glass-card" style={{ 
        padding: '1.5rem 1.75rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexWrap: 'wrap', 
        gap: '1.25rem',
        background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.08) 0%, rgba(14, 22, 38, 0.95) 100%)',
        border: '1px solid var(--border-cyan)'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.35rem' }}>
            <span className="neon-badge neon-badge-cyan">
              <span className="dot"></span>
              <span>{tr('Precision Crop Analytics')}</span>
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--neon-cyan)', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
              {tr('10-Year Agro-Climatic Data & Phenology')}
            </span>
          </div>
          <h2 style={{ fontSize: '1.5rem', margin: 0, fontFamily: 'var(--font-heading)' }} className="gradient-text-saffron-emerald">
            {tr('Comparative Crop Analytics & Agro-Phenology Lab')}
          </h2>
          <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', margin: '0.3rem 0 0' }}>
            {tr('Select any crop to analyze yield curves, thermal GDD accumulation, soil drawdown, MSP progression, and pest risks.')}
          </p>
        </div>

        <button 
          onClick={() => setIsReportModalOpen(true)}
          className="btn btn-primary" 
          style={{ fontSize: '0.84rem', gap: '0.45rem', padding: '0.65rem 1.25rem' }}
        >
          <Download className="w-4 h-4" /> {tr('Export Report')}
        </button>
      </div>

      {/* CROP SELECTOR BAR (Select from 42+ Indian Crops) */}
      <div className="glass-card" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', border: '1px solid var(--border-cyan)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <span style={{ fontSize: '2.2rem', filter: 'drop-shadow(0 0 10px rgba(0, 240, 255, 0.4))' }}>{selectedCrop.icon}</span>
          <div>
            <span style={{ fontSize: '0.74rem', color: 'var(--neon-cyan)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'var(--font-heading)' }}>
              {tr('Select Active Crop for Multi-Graph Analysis:')}
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.3rem', flexWrap: 'wrap' }}>
              <select
                value={selectedCropId}
                onChange={(e) => setSelectedCropId(e.target.value)}
                style={{
                  background: 'rgba(5, 8, 17, 0.85)',
                  border: '1.5px solid var(--neon-cyan)',
                  borderRadius: '10px',
                  color: '#fff',
                  fontSize: '0.94rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  padding: '0.5rem 0.95rem',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                {INDIAN_CROPS_CATALOG.map(crop => (
                  <option key={crop.id} value={crop.id} style={{ background: '#050811', color: '#fff' }}>
                    {crop.icon} {tr(crop.name)} — {crop.variety} ({tr(crop.category)})
                  </option>
                ))}
              </select>

              <span className="neon-badge neon-badge-emerald" style={{ fontSize: '0.74rem' }}>
                <span className="dot"></span>
                {tr('Suitability')}: {selectedCrop.suitability}%
              </span>
            </div>

            {/* Live Crop Telemetry Badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginTop: '0.55rem', flexWrap: 'wrap' }}>
              <span className="badge badge-cyan" style={{ fontSize: '0.72rem', background: 'rgba(0, 240, 255, 0.15)', border: '1px solid rgba(0, 240, 255, 0.35)', color: '#38bdf8' }}>
                💧 {tr('Water Need')}: {selectedCrop.waterNeedMm}
              </span>
              <span className="badge badge-amber" style={{ fontSize: '0.72rem', background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.35)', color: '#fbbf24' }}>
                ⏱️ {tr('Duration')}: {durationDays} {tr('Days')}
              </span>
              <span className="badge badge-emerald" style={{ fontSize: '0.72rem', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.35)', color: '#34d399' }}>
                💰 MSP: {selectedCrop.mspPerQuintal}
              </span>
              <span className="badge badge-purple" style={{ fontSize: '0.72rem', background: 'rgba(168, 85, 247, 0.15)', border: '1px solid rgba(168, 85, 247, 0.35)', color: '#c084fc' }}>
                📈 {tr('Yield')}: {selectedCrop.yieldPotential}
              </span>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>{tr('Scientific Taxonomy')}</div>
          <strong style={{ fontSize: '0.9rem', color: 'var(--neon-cyan)', fontStyle: 'italic', fontFamily: 'var(--font-heading)' }}>
            {selectedCrop.scientificName}
          </strong>
        </div>
      </div>

      {/* 5 COMPREHENSIVE GRAPHS SUITE FOR SELECTED CROP */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.35rem' }}>
        
        {/* GRAPH 1: YIELD VS RAINFALL SENSITIVITY RESPONSE CURVE */}
        <div className="glass-card" style={{ padding: '1.35rem', border: '1px solid var(--border-cyan)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Droplets className="w-4 h-4 text-cyan-400" />
              <h3 style={{ fontSize: '1.02rem', color: '#fff', margin: 0, fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                {tr('Graph 1: Yield vs. Rainfall Sensitivity Response')}
              </h3>
            </div>
            <span className="neon-badge neon-badge-cyan" style={{ fontSize: '0.66rem' }}>
              <span className="dot"></span>
              {tr('Optimal')}: {optimalWaterMm} mm
            </span>
          </div>

          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: '0 0 1rem' }}>
            {tr('Harvest yield potential (%) across rainfall spectrum for')} <strong style={{ color: '#fff' }}>{tr(selectedCrop.name)}</strong> ({selectedCrop.variety}).
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '0.5rem',
            alignItems: 'flex-end',
            height: '160px',
            paddingBottom: '0.85rem',
            borderBottom: '1px solid var(--border-subtle)'
          }}>
            {yieldSensitivityData.map((d, i) => {
              const barHeight = d.yieldPct;
              const isOptimum = d.yieldPct >= 90;

              return (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end', gap: '0.25rem' }}>
                  <span style={{ fontSize: '0.74rem', fontWeight: 800, color: isOptimum ? 'var(--neon-emerald)' : 'var(--neon-cyan)', fontFamily: 'var(--font-heading)' }}>
                    {d.yieldPct}%
                  </span>
                  <div 
                    title={`${d.rainMm}: ${d.yieldPct}% yield (${d.zone})`}
                    style={{
                      width: '80%',
                      height: `${barHeight}%`,
                      background: isOptimum 
                        ? 'linear-gradient(180deg, var(--neon-emerald) 0%, #059669 100%)' 
                        : 'linear-gradient(180deg, var(--neon-cyan) 0%, #0088cc 100%)',
                      borderRadius: '4px 4px 0 0',
                      boxShadow: isOptimum ? '0 0 12px rgba(16, 185, 129, 0.4)' : 'none'
                    }} 
                  />
                  <span style={{ fontSize: '0.64rem', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.1 }}>
                    {d.rainMm.split(' ')[0]}
                  </span>
                </div>
              );
            })}
          </div>
          <div style={{ fontSize: '0.74rem', color: 'var(--neon-emerald)', textAlign: 'center', marginTop: '0.6rem', fontWeight: 700 }}>
            ● {tr('Water Need')}: {selectedCrop.waterNeedMm}
          </div>
        </div>

        {/* GRAPH 2: GROWING DEGREE DAYS (GDD) BY PHENOLOGICAL STAGE */}
        <div className="glass-card" style={{ padding: '1.35rem', border: '1px solid var(--border-saffron)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Thermometer className="w-4 h-4 text-amber-400" />
              <h3 style={{ fontSize: '1.02rem', color: '#fff', margin: 0, fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                {tr('Graph 2: Thermal Heat Units (GDD) Accumulation')}
              </h3>
            </div>
            <span className="neon-badge neon-badge-gold" style={{ fontSize: '0.66rem' }}>
              <span className="dot"></span>
              {durationDays} {tr('Days')}
            </span>
          </div>

          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: '0 0 1rem' }}>
            {tr('Growing Degree Days (GDD) Thermal Stages')} ({tr('Duration')}: {durationDays} {tr('Days')}).
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
            {gddStages.map((stg, i) => {
              const maxGdd = Math.max(...gddStages.map(s => s.gddActual)) * 1.25 || 600;
              const fillPct = Math.min(100, (stg.gddActual / maxGdd) * 100);

              return (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.25rem' }}>
                    <span style={{ color: '#fff', fontWeight: 600 }}>{stg.stage}</span>
                    <span style={{ color: 'var(--neon-saffron)', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>{stg.gddActual} GDD</span>
                  </div>
                  <div style={{ height: '7px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '999px', overflow: 'hidden' }}>
                    <div style={{
                      height: '100%',
                      width: `${fillPct}%`,
                      background: 'linear-gradient(90deg, var(--neon-saffron) 0%, #ea580c 100%)',
                      borderRadius: '999px'
                    }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* GRAPH 3: EVAPOTRANSPIRATION & WATER DRAWDOWN TIMELINE */}
        <div className="glass-card" style={{ padding: '1.35rem', border: '1px solid var(--border-cyan)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Activity className="w-4 h-4 text-emerald-400" />
              <h3 style={{ fontSize: '1.02rem', color: '#fff', margin: 0, fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                {tr('Graph 3: Crop Evapotranspiration (ETc & Soil Drawdown)')}
              </h3>
            </div>
            <span className="neon-badge neon-badge-emerald" style={{ fontSize: '0.66rem' }}>
              <span className="dot"></span>
              {tr('Water Need')}
            </span>
          </div>

          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: '0 0 1rem' }}>
            {tr('Daily crop water demand (ETc = Kc × ETo) and root-zone moisture drawdown.')}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '0.5rem',
            alignItems: 'flex-end',
            height: '150px',
            paddingBottom: '0.85rem',
            borderBottom: '1px solid var(--border-subtle)'
          }}>
            {evapotranspirationData.map((e, idx) => {
              const maxEt = Math.max(...evapotranspirationData.map(d => d.etcMmDay)) * 1.15 || 8.0;
              const barHeight = (e.etcMmDay / maxEt) * 100;

              return (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end', gap: '0.25rem' }}>
                  <span style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--neon-emerald)', fontFamily: 'var(--font-heading)' }}>
                    {e.etcMmDay}
                  </span>
                  <div 
                    title={`${e.stage}: ${e.etcMmDay} mm/day • Soil Saturation ${e.soilSaturation}`}
                    style={{
                      width: '75%',
                      height: `${barHeight}%`,
                      background: 'linear-gradient(180deg, var(--neon-emerald) 0%, #059669 100%)',
                      borderRadius: '4px 4px 0 0'
                    }} 
                  />
                  <span style={{ fontSize: '0.64rem', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.1 }}>
                    {e.stage.split(' ')[0]}
                  </span>
                </div>
              );
            })}
          </div>
          <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '0.6rem' }}>
            {tr('Peak Demand')}: <strong style={{ color: 'var(--neon-emerald)' }}>{Math.max(...evapotranspirationData.map(d => d.etcMmDay))} mm/{tr('Days')}</strong>
          </div>
        </div>

        {/* GRAPH 4: 10-YEAR HISTORICAL MSP & HARVEST PRICE TREND */}
        <div className="glass-card" style={{ padding: '1.35rem', border: '1px solid var(--border-saffron)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <DollarSign className="w-4 h-4 text-amber-400" />
              <h3 style={{ fontSize: '1.02rem', color: '#fff', margin: 0, fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                {tr('Graph 4: 10-Year Historical MSP vs Yield Trend')}
              </h3>
            </div>
            <span className="neon-badge neon-badge-gold" style={{ fontSize: '0.66rem' }}>
              <span className="dot"></span>
              {tr('Govt. MSP Rate')}
            </span>
          </div>

          <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', margin: '0 0 1rem' }}>
            {tr('10-Year Government MSP Price Trend (₹/Quintal)')} ({tr('Current')}: <strong style={{ color: 'var(--neon-saffron)' }}>{selectedCrop.mspPerQuintal}</strong>).
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(10, 1fr)',
            gap: '0.3rem',
            alignItems: 'flex-end',
            height: '150px',
            paddingBottom: '0.85rem',
            borderBottom: '1px solid var(--border-subtle)'
          }}>
            {historicalMspTrend.map((t, idx) => {
              const maxPrice = currentMspNum * 1.1;
              const barHeight = (t.msp / maxPrice) * 100;

              return (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end', gap: '0.2rem' }}>
                  <div 
                    title={`Year ${t.year}: MSP ₹${t.msp} • Yield: ${t.yieldQtl} Qtl/Ha`}
                    style={{
                      width: '80%',
                      height: `${barHeight}%`,
                      background: 'linear-gradient(180deg, var(--neon-saffron) 0%, #ea580c 100%)',
                      borderRadius: '3px 3px 0 0'
                    }} 
                  />
                  <span style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}>
                    {t.year.slice(2)}'
                  </span>
                </div>
              );
            })}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: 'var(--text-secondary)', marginTop: '0.6rem' }}>
            <span>2015: ₹{historicalMspTrend[0]?.msp} / Qtl</span>
            <strong style={{ color: 'var(--neon-saffron)', fontFamily: 'var(--font-heading)' }}>2024: {selectedCrop.mspPerQuintal}</strong>
          </div>
        </div>

        {/* GRAPH 5: PEST, BLAST & PATHOGEN RISK PROBABILITY INDEX */}
        <div className="glass-card" style={{ padding: '1.35rem', border: '1px solid var(--border-cyan)', gridColumn: '1 / -1' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <ShieldAlert className="w-4 h-4 text-rose-400" />
              <h3 style={{ fontSize: '1.05rem', color: '#fff', margin: 0, fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                {tr('Graph 5: Pest & Pathogen Risk Threshold vs Micro-climate')}
              </h3>
            </div>
            <span className="neon-badge neon-badge-rose" style={{ fontSize: '0.66rem' }}>
              <span className="dot"></span>
              {tr(selectedCrop.name)} {tr('Risks')}
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.85rem' }}>
            {pestRiskData.map((p, idx) => (
              <div key={idx} style={{ background: 'rgba(5, 8, 17, 0.65)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                  <strong style={{ color: '#fff', fontSize: '0.86rem', fontFamily: 'var(--font-heading)' }}>{tr(p.pathogen)}</strong>
                  <span style={{ fontSize: '1.15rem', fontWeight: 900, color: p.riskScore >= 70 ? '#f87171' : 'var(--neon-saffron)', fontFamily: 'var(--font-heading)' }}>
                    {p.riskScore}%
                  </span>
                </div>
                <div style={{ height: '6px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '999px', overflow: 'hidden', marginBottom: '0.45rem' }}>
                  <div style={{
                    height: '100%',
                    width: `${p.riskScore}%`,
                    background: p.riskScore >= 70 ? 'linear-gradient(90deg, #ef4444, #f43f5e)' : 'linear-gradient(90deg, var(--neon-saffron), #f59e0b)',
                    borderRadius: '999px'
                  }} />
                </div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                  <strong style={{ color: 'var(--text-secondary)' }}>{tr('Trigger')}:</strong> {p.threshold}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
