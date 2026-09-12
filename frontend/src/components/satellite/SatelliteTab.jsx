import React, { useState } from 'react';
import { useApp } from '../common/AppContext';
import { 
  Satellite, Eye, Droplets, Calendar, Layers, 
  CheckCircle2, AlertTriangle, ShieldCheck, RefreshCw, BarChart2,
  TrendingUp, Sparkles, Compass, ZoomIn, Info 
} from 'lucide-react';

export default function SatelliteTab() {
  const { activeHub, activeLocation, telemetry, t, tr, lang } = useApp();

  const [satelliteIndex, setSatelliteIndex] = useState('ndvi'); // 'ndvi' | 'ndwi' | 'evi'
  const [temporalStep, setTemporalStep] = useState('current'); // 'current' | '30d_prior'
  const [selectedPixel, setSelectedPixel] = useState({ x: 4, y: 3, val: 0.78, health: 'High Canopy Biomass' });

  const sensorMeta = {
    provider: 'Copernicus Sentinel-2 MSI & Landsat-8 Harmonized Grid (Adapter: ISRO MOSDAC)',
    resolution: '10m Multispectral Spatial Resolution',
    acquisitionDate: '2026-09-11 (10:42 AM IST)',
    cloudCover: '12.4%',
    footprint: 'Tile T44RNQ (766 Districts Indian Subcontinent)',
    status: 'VALID_OBSERVATION'
  };

  // 90-Day NDVI Seasonal Trajectory Data (June - September)
  const trajectoryData = [
    { date: '15 Jun (Sowing)', ndvi: 0.24, evi: 0.18, normalNdvi: 0.22 },
    { date: '30 Jun (Germination)', ndvi: 0.35, evi: 0.28, normalNdvi: 0.32 },
    { date: '15 Jul (Tillering)', ndvi: 0.52, evi: 0.42, normalNdvi: 0.48 },
    { date: '31 Jul (Vegetative)', ndvi: 0.68, evi: 0.56, normalNdvi: 0.62 },
    { date: '15 Aug (Panicle Prep)', ndvi: 0.76, evi: 0.65, normalNdvi: 0.70 },
    { date: '31 Aug (Peak Biomass)', ndvi: 0.82, evi: 0.71, normalNdvi: 0.75 },
    { date: '11 Sep (Current Pass)', ndvi: 0.78, evi: 0.67, normalNdvi: 0.72 }
  ];

  // Spectral Band Reflectance Profile
  const spectralBands = [
    { band: 'B2 (Blue 490nm)', refl: '4.2%', role: 'Soil/Vegetation Contrast' },
    { band: 'B3 (Green 560nm)', refl: '8.5%', role: 'Chlorophyll Peak' },
    { band: 'B4 (Red 665nm)', refl: '3.8%', role: 'Chlorophyll Absorption' },
    { band: 'B8 (NIR 842nm)', refl: '48.2%', role: 'Cellular Structure Reflectance' },
    { band: 'B11 (SWIR 1610nm)', refl: '18.4%', role: 'Leaf Canopy Water Stress' }
  ];

  // 8x6 Simulated 10m Agricultural Field Pixels
  const fieldGrid = [
    [0.72, 0.76, 0.82, 0.85, 0.88, 0.84, 0.79, 0.65],
    [0.68, 0.74, 0.80, 0.86, 0.89, 0.83, 0.75, 0.58],
    [0.62, 0.70, 0.78, 0.84, 0.86, 0.80, 0.72, 0.45],
    [0.55, 0.68, 0.75, 0.82, 0.84, 0.78, 0.68, 0.35],
    [0.48, 0.62, 0.72, 0.78, 0.80, 0.74, 0.62, 0.28],
    [0.42, 0.55, 0.65, 0.72, 0.75, 0.68, 0.54, 0.22]
  ];

  const getPixelColor = (val) => {
    if (satelliteIndex === 'ndwi') {
      // Water index colors
      if (val >= 0.70) return '#0284c7'; // Saturated / Water
      if (val >= 0.50) return '#06b6d4'; // High moisture
      if (val >= 0.35) return '#38bdf8'; // Moderate
      return '#94a3b8'; // Dry
    }
    // NDVI / EVI colors
    if (val >= 0.80) return '#059669'; // Deep Lush Biomass
    if (val >= 0.70) return '#10b981'; // Healthy crop
    if (val >= 0.55) return '#84cc16'; // Moderate vegetative
    if (val >= 0.40) return '#eab308'; // Moderate / stressed
    if (val >= 0.25) return '#f97316'; // Sparse
    return '#b45309'; // Bare soil
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      
      {/* Header Banner */}
      <div className="glass-card" style={{ 
        padding: '1.4rem 1.6rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexWrap: 'wrap', 
        gap: '1rem',
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(14, 22, 38, 0.95) 100%)',
        border: '1px solid var(--border-emerald)'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.35rem' }}>
            <span className="neon-badge neon-badge-emerald">
              <span className="neon-dot neon-dot-emerald"></span>
              <span>{tr('Copernicus Sentinel-2 & ISRO MOSDAC')}</span>
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--neon-cyan)', fontWeight: 700 }}>
              {tr('10m Multispectral Spatial Resolution')}
            </span>
          </div>
          <h2 style={{ fontSize: '1.45rem', margin: 0, fontFamily: 'var(--font-heading)' }} className="gradient-text-saffron-emerald">
            {tr('Vegetation Health, NDVI & Canopy Moisture Maps') || 'Vegetation Health, NDVI & Canopy Moisture Maps'}
          </h2>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', margin: '0.25rem 0 0' }}>
            {tr('Multi-spectral vegetation index monitoring for localized canopy vigor, chlorophyll absorption, and root-zone water content.')}
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(16, 185, 129, 0.14)', border: '1px solid var(--border-emerald)', borderRadius: '10px', padding: '0.45rem 0.95rem' }}>
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--neon-emerald)' }}>
            {tr('Calibration: Verified') || 'Calibration: Verified'}
          </span>
        </div>
      </div>

      {/* Sensor Metadata & Metrics Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
        
        <div className="telemetry-card emerald" style={{ borderLeft: '4px solid #10b981' }}>
          <div className="telemetry-label" style={{ color: '#34d399' }}>{tr('Mean Canopy NDVI') || 'Mean Canopy NDVI'}</div>
          <div className="telemetry-value" style={{ color: '#fff' }}>0.78</div>
          <div className="telemetry-sub" style={{ color: '#34d399' }}>+0.16 vs normal (Vigorous Biomass)</div>
        </div>

        <div className="telemetry-card" style={{ borderLeft: '4px solid #0284c7' }}>
          <div className="telemetry-label" style={{ color: '#38bdf8' }}>{tr('Normalized Difference Water Index (NDWI)')}</div>
          <div className="telemetry-value" style={{ color: '#fff' }}>0.42</div>
          <div className="telemetry-sub" style={{ color: '#38bdf8' }}>Adequate leaf turgor pressure</div>
        </div>

        <div className="telemetry-card amber" style={{ borderLeft: '4px solid #f59e0b' }}>
          <div className="telemetry-label" style={{ color: '#fbbf24' }}>{tr('Cloud Contamination') || 'Cloud Contamination'}</div>
          <div className="telemetry-value" style={{ color: '#fff' }}>{sensorMeta.cloudCover}</div>
          <div className="telemetry-sub" style={{ color: '#fbbf24' }}>Cloud-masked pixels filtered out</div>
        </div>

        <div className="telemetry-card purple" style={{ borderLeft: '4px solid #a855f7' }}>
          <div className="telemetry-label" style={{ color: '#c084fc' }}>{tr('Orbital Pass Timestamp') || 'Orbital Pass'}</div>
          <div className="telemetry-value" style={{ fontSize: '1.25rem', color: '#fff' }}>Sep 11, 2026</div>
          <div className="telemetry-sub" style={{ color: '#c084fc' }}>10:42 AM IST Sentinel-2 MSI</div>
        </div>

      </div>

      {/* 1. INTERACTIVE SATELLITE RASTER MAP VISUALIZER (NDVI / NDWI / EVI) */}
      <div className="glass-card" style={{ padding: '1.35rem', border: '1.5px solid rgba(16, 185, 129, 0.3)' }}>
        
        {/* Top Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          
          {/* Index Buttons */}
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {[
              { id: 'ndvi', label: '🌿 NDVI (Canopy Vigor)', desc: 'Vegetation Greenness (NIR-Red)/(NIR+Red)' },
              { id: 'ndwi', label: '💧 NDWI (Water Index)', desc: 'Canopy Water Content (NIR-SWIR)/(NIR+SWIR)' },
              { id: 'evi', label: '🌱 EVI (Enhanced Index)', desc: 'Atmosphere Corrected High Biomass' }
            ].map(idx => (
              <button
                key={idx.id}
                onClick={() => setSatelliteIndex(idx.id)}
                className="btn"
                style={{
                  padding: '0.4rem 0.85rem',
                  fontSize: '0.78rem',
                  borderRadius: '8px',
                  background: satelliteIndex === idx.id ? 'linear-gradient(135deg, #059669 0%, #0284c7 100%)' : 'rgba(255, 255, 255, 0.05)',
                  color: satelliteIndex === idx.id ? '#ffffff' : '#cbd5e1',
                  border: satelliteIndex === idx.id ? '1px solid #34d399' : '1px solid var(--border-subtle)',
                  fontWeight: satelliteIndex === idx.id ? 800 : 500
                }}
              >
                {tr(idx.label)}
              </button>
            ))}
          </div>

          {/* Temporal Comparison Toggle */}
          <div style={{ display: 'flex', gap: '0.35rem', background: 'rgba(255,255,255,0.04)', padding: '0.25rem', borderRadius: '8px' }}>
            <button
              onClick={() => setTemporalStep('current')}
              style={{
                padding: '0.3rem 0.65rem',
                fontSize: '0.74rem',
                borderRadius: '6px',
                background: temporalStep === 'current' ? '#059669' : 'transparent',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 700
              }}
            >
              {tr('Latest Pass (Sep 11)') || 'Latest Pass'}
            </button>
            <button
              onClick={() => setTemporalStep('30d_prior')}
              style={{
                padding: '0.3rem 0.65rem',
                fontSize: '0.74rem',
                borderRadius: '6px',
                background: temporalStep === '30d_prior' ? '#0284c7' : 'transparent',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 700
              }}
            >
              {tr('30-Day Prior (Aug 12)') || '30-Day Prior'}
            </button>
          </div>
        </div>

        {/* 10m Multispectral Parcel Grid Canvas Map */}
        <div style={{
          background: 'rgba(11, 15, 30, 0.95)',
          borderRadius: '16px',
          border: '1.5px solid rgba(56, 189, 248, 0.25)',
          padding: '1.25rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          alignItems: 'center'
        }}>
          
          {/* Left: Pixel Grid View */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#fff' }}>
                📍 {activeLocation.district} Farm Parcel Sector (10m Resolution Grid)
              </span>
              <span style={{ fontSize: '0.72rem', color: '#38bdf8' }}>
                {tr('Click any pixel to inspect') || 'Click pixel to inspect'}
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(8, 1fr)',
              gap: '4px',
              background: 'rgba(0, 0, 0, 0.4)',
              padding: '6px',
              borderRadius: '12px'
            }}>
              {fieldGrid.map((row, rIdx) => 
                row.map((val, cIdx) => {
                  const factor = temporalStep === '30d_prior' ? 0.82 : 1.0;
                  const adjustedVal = parseFloat((val * factor).toFixed(2));
                  const isSelected = selectedPixel.x === cIdx && selectedPixel.y === rIdx;
                  const pixelBg = getPixelColor(adjustedVal);

                  return (
                    <div
                      key={`${rIdx}-${cIdx}`}
                      onClick={() => setSelectedPixel({
                        x: cIdx,
                        y: rIdx,
                        val: adjustedVal,
                        health: adjustedVal >= 0.75 ? 'Dense Healthy Canopy' : adjustedVal >= 0.55 ? 'Moderate Crop Growth' : 'Sparse / Soil'
                      })}
                      style={{
                        height: '42px',
                        background: pixelBg,
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        color: '#ffffff',
                        cursor: 'pointer',
                        border: isSelected ? '2px solid #ffffff' : '1px solid rgba(0,0,0,0.2)',
                        boxShadow: isSelected ? '0 0 12px #fff' : 'none',
                        transition: 'transform 0.15s ease'
                      }}
                      title={`Plot [${cIdx}, ${rIdx}]: ${satelliteIndex.toUpperCase()} = ${adjustedVal}`}
                    >
                      {adjustedVal}
                    </div>
                  );
                })
              )}
            </div>

            {/* Color Ramp Scale Bar */}
            <div style={{ marginTop: '0.85rem' }}>
              <div style={{
                height: '10px',
                borderRadius: '999px',
                background: satelliteIndex === 'ndwi' 
                  ? 'linear-gradient(to right, #94a3b8, #38bdf8, #06b6d4, #0284c7)'
                  : 'linear-gradient(to right, #b45309, #f97316, #eab308, #84cc16, #10b981, #059669)',
                marginBottom: '0.35rem'
              }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: '#94a3b8' }}>
                <span>0.0 (Bare Soil / Dry)</span>
                <span>0.4 (Emerging)</span>
                <span>0.6 (Active Tillering)</span>
                <span>0.9 (Peak Canopy Biomass)</span>
              </div>
            </div>
          </div>

          {/* Right: Selected Pixel Inspector & Agronomic Health */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '14px',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="badge badge-cyan" style={{ fontSize: '0.72rem' }}>
                Parcel Pixel Inspector
              </span>
              <span style={{ fontSize: '0.72rem', color: '#34d399' }}>
                Plot ID: #PCL-UP-{selectedPixel.x}{selectedPixel.y}
              </span>
            </div>

            <div>
              <span style={{ fontSize: '0.74rem', color: '#94a3b8', display: 'block' }}>Observed {satelliteIndex.toUpperCase()} Value:</span>
              <div style={{ fontSize: '2.6rem', fontWeight: 900, color: getPixelColor(selectedPixel.val), lineHeight: 1 }}>
                {selectedPixel.val}
              </div>
              <strong style={{ fontSize: '0.92rem', color: '#fff' }}>
                {tr(selectedPixel.health)}
              </strong>
            </div>

            <div style={{ fontSize: '0.78rem', color: '#cbd5e1', lineHeight: 1.45 }}>
              Vegetative growth index confirms robust leaf chlorophyll density in standing Kharif crops. No acute moisture stress detected in top 30cm root layer.
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: '#94a3b8', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.5rem' }}>
              <span>Grid: [X:{selectedPixel.x}, Y:{selectedPixel.y}]</span>
              <span>Coordinates: <strong>{activeLocation.lat?.toFixed(2) || '26.85'}°N, {activeLocation.lng?.toFixed(2) || '80.95'}°E</strong></span>
            </div>
          </div>

        </div>

      </div>

      {/* 2. 90-DAY VEGETATION INDEX SEASONAL TRAJECTORY GRAPH */}
      <div className="glass-card" style={{ padding: '1.35rem', border: '1.5px solid rgba(56, 189, 248, 0.25)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <h3 style={{ fontSize: '1.05rem', color: '#fff', margin: 0, fontWeight: 800 }}>
                90-Day Seasonal NDVI & EVI Growth Trajectory
              </h3>
            </div>
            <p style={{ fontSize: '0.78rem', color: '#94a3b8', margin: '0.2rem 0 0' }}>
              Tracks vegetative progression from June sowing to September maturity vs 5-year climatological normal.
            </p>
          </div>
          <span className="badge badge-emerald" style={{ fontSize: '0.68rem' }}>
            +12.4% Biomass Gain vs 5-Yr Avg
          </span>
        </div>

        {/* Trajectory Bar Chart */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '0.65rem',
          alignItems: 'flex-end',
          height: '180px',
          paddingBottom: '1rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          {trajectoryData.map((t, idx) => {
            const ndviHeight = (t.ndvi / 1.0) * 100;
            const normHeight = (t.normalNdvi / 1.0) * 100;

            return (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end', gap: '0.3rem' }}>
                <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#34d399' }}>
                  {t.ndvi}
                </span>

                <div style={{ display: 'flex', gap: '3px', alignItems: 'flex-end', height: '110px', width: '70%' }}>
                  {/* Normal baseline */}
                  <div 
                    title={`5-Yr Normal: ${t.normalNdvi}`}
                    style={{
                      flex: 1,
                      height: `${normHeight}%`,
                      background: 'rgba(255, 255, 255, 0.15)',
                      borderRadius: '3px 3px 0 0'
                    }} 
                  />
                  {/* Actual NDVI */}
                  <div 
                    title={`Observed NDVI: ${t.ndvi}`}
                    style={{
                      flex: 1,
                      height: `${ndviHeight}%`,
                      background: 'linear-gradient(180deg, #34d399 0%, #059669 100%)',
                      borderRadius: '3px 3px 0 0',
                      boxShadow: '0 0 8px rgba(52, 211, 153, 0.4)'
                    }} 
                  />
                </div>

                <span style={{ fontSize: '0.68rem', color: '#cbd5e1', textAlign: 'center', fontWeight: 600 }}>
                  {t.date.split(' (')[0]}
                </span>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '0.75rem', fontSize: '0.74rem', color: '#cbd5e1' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#059669' }} />
            <span>Observed Sentinel-2 NDVI</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: 'rgba(255, 255, 255, 0.2)' }} />
            <span>5-Year Climatological Average</span>
          </div>
        </div>
      </div>

      {/* 3. MULTI-SPECTRAL SENSOR BAND REFLECTANCE PROFILE */}
      <div className="glass-card" style={{ padding: '1.35rem' }}>
        <h3 style={{ fontSize: '1.05rem', color: '#fff', margin: '0 0 0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Layers className="w-4 h-4 text-sky-400" />
          Multi-Spectral Sensor Band Reflectance Profile (Copernicus MSI)
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.85rem' }}>
          {spectralBands.map((b, idx) => (
            <div 
              key={idx} 
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '10px',
                padding: '0.85rem'
              }}
            >
              <div style={{ fontSize: '0.74rem', color: '#38bdf8', fontWeight: 700 }}>
                {b.band}
              </div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', margin: '0.2rem 0' }}>
                {b.refl}
              </div>
              <p style={{ fontSize: '0.7rem', color: '#94a3b8', margin: 0 }}>
                {b.role}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
