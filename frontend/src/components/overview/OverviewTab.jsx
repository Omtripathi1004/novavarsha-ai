import React, { useState, useEffect, useRef, useMemo } from 'react';
import maplibregl from 'maplibre-gl';
import { useApp, AGRO_HUBS } from '../common/AppContext';
import { INDIAN_CROPS_CATALOG, getTopCropsForLocation } from '../../data/cropsCatalog';
import { INDIA_BOUNDARY_GEOJSON, INDIA_STATES_GEOJSON } from '../../data/indiaGeoJson';
import VoiceBroadcastPlayer from '../common/VoiceBroadcastPlayer';
import { 
  CloudRain, Thermometer, Droplets, Wind, Compass, AlertTriangle, 
  TrendingUp, CheckCircle2, ShieldAlert, Cpu, ArrowRight, Sprout, 
  Layers, Clock, FileText, Zap, Radio, Sparkles, RefreshCw, Sun,
  MapPin, Award, ExternalLink, Activity, BarChart2, LocateFixed
} from 'lucide-react';

export default function OverviewTab() {
  const { 
    telemetry, setTelemetry, activeLocation, setActiveLocation, 
    activeHub, switchHub, setActiveTab, setIsReportModalOpen, 
    setIsAssistantOpen, lang, t, tr 
  } = useApp();

  const [graphMode, setGraphMode] = useState('7d'); // '7d' | '30d'
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [miniMapMode, setMiniMapMode] = useState('street'); // 'street' | 'satellite' | 'topo'

  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);

  // 1. Calculate TOP 3 CROPS for the current location
  const top3Crops = useMemo(() => {
    return getTopCropsForLocation(activeLocation.state, activeHub.state);
  }, [activeLocation.state, activeHub.state]);

  // 2. 7-Day & 30-Day Trend Data
  const data7Day = [
    { label: 'Today (13 Sep)', rainMm: 14.2, normalMm: 8.5, maxT: 29.4, minT: 23.1, condition: 'Moderate Rain' },
    { label: '14 Sep', rainMm: 22.0, normalMm: 9.0, maxT: 28.5, minT: 22.8, condition: 'Heavy Showers' },
    { label: '15 Sep', rainMm: 8.4, normalMm: 8.0, maxT: 30.1, minT: 23.5, condition: 'Scattered' },
    { label: '16 Sep', rainMm: 0.5, normalMm: 7.8, maxT: 31.8, minT: 24.2, condition: 'Clear Sky' },
    { label: '17 Sep', rainMm: 2.1, normalMm: 7.5, maxT: 32.2, minT: 24.0, condition: 'Partly Cloudy' },
    { label: '18 Sep', rainMm: 12.6, normalMm: 7.0, maxT: 30.0, minT: 23.2, condition: 'Monsoon Surge' },
    { label: '19 Sep', rainMm: 18.2, normalMm: 6.8, maxT: 29.2, minT: 22.9, condition: 'Active Trough' }
  ];

  const data30Day = [
    { label: 'Week 1 (Aug 15–21)', rainMm: 84.5, normalMm: 65.0, tempAvg: 29.2, anomaly: '+30%' },
    { label: 'Week 2 (Aug 22–28)', rainMm: 52.0, normalMm: 58.0, tempAvg: 30.5, anomaly: '-10%' },
    { label: 'Week 3 (Aug 29–Sep 04)', rainMm: 96.2, normalMm: 62.0, tempAvg: 28.8, anomaly: '+55%' },
    { label: 'Week 4 (Sep 05–11)', rainMm: 68.0, normalMm: 55.0, tempAvg: 29.6, anomaly: '+24%' },
    { label: 'Current Week Forecast', rainMm: 78.0, normalMm: 50.0, tempAvg: 29.5, anomaly: '+56%' }
  ];

  // 3. Mini Interactive Map on Home Page
  useEffect(() => {
    if (!mapContainerRef.current) return;

    const tileUrls = {
      street: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
      satellite: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      topo: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
    };

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: {
        version: 8,
        glyphs: 'https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf',
        sources: {
          'base-tiles': {
            type: 'raster',
            tiles: [tileUrls[miniMapMode] || tileUrls.street],
            tileSize: 256
          },
          'soi-national-boundary': {
            type: 'geojson',
            data: INDIA_BOUNDARY_GEOJSON
          },
          'soi-states': {
            type: 'geojson',
            data: INDIA_STATES_GEOJSON
          }
        },
        layers: [
          { id: 'bg', type: 'background', paint: { 'background-color': '#f8fafc' } },
          { id: 'base-layer', type: 'raster', source: 'base-tiles', minzoom: 0, maxzoom: 19 },
          {
            id: 'soi-states-outline',
            type: 'line',
            source: 'soi-states',
            paint: { 'line-color': '#94a3b8', 'line-width': 1.0, 'line-dasharray': [3, 2], 'line-opacity': 0.4 }
          }
        ]
      },
      center: [activeLocation.lng || activeHub.lng, activeLocation.lat || activeHub.lat],
      zoom: 6.2,
      attributionControl: false
    });

    // Add active position marker
    const el = document.createElement('div');
    el.innerHTML = `
      <div style="background: #0284c7; color: #fff; border: 2px solid #fff; border-radius: 999px; padding: 4px 8px; font-size: 11px; font-weight: 800; display: flex; align-items: center; gap: 4px; box-shadow: 0 4px 12px rgba(0,0,0,0.4);">
        <span>📍</span><span>${activeLocation.district}</span>
      </div>
    `;
    const marker = new maplibregl.Marker({ element: el })
      .setLngLat([activeLocation.lng || activeHub.lng, activeLocation.lat || activeHub.lat])
      .addTo(map);

    markerRef.current = marker;
    mapInstanceRef.current = map;

    return () => {
      marker.remove();
      map.remove();
    };
  }, [miniMapMode]);

  // Update map center when location changes
  useEffect(() => {
    if (mapInstanceRef.current && activeLocation.lat && activeLocation.lng) {
      mapInstanceRef.current.flyTo({
        center: [activeLocation.lng, activeLocation.lat],
        zoom: 6.8,
        essential: true,
        speed: 1.2
      });
      if (markerRef.current) {
        markerRef.current.setLngLat([activeLocation.lng, activeLocation.lat]);
      }
    }
  }, [activeLocation.lat, activeLocation.lng, activeLocation.district]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setTelemetry(prev => ({
        ...prev,
        dataFreshness: `Updated live just now (${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })})`
      }));
    }, 600);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
      
      {/* 0. AUDIO VOICE BROADCAST RADIO BULLETIN */}
      <VoiceBroadcastPlayer />
      
      {/* 1. HERO WEATHER BANNER WITH LIVE TELEMETRY & REFRESH */}
      <div className="glass-card" style={{
        padding: '1.4rem 1.6rem',
        background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.16) 0%, rgba(13, 9, 28, 0.92) 55%, rgba(16, 185, 129, 0.12) 100%)',
        border: '1px solid rgba(56, 189, 248, 0.3)',
        borderRadius: '20px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        
        {/* Top Header inside Hero */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span className="neon-badge neon-badge-saffron">
              <span className="neon-dot neon-dot-saffron"></span>
              <span>{tr('YuvaSetu AI HUD Engine')}</span>
            </span>
            <span className="neon-badge neon-badge-cyan desktop-only">
              <span>{tr('Viksit Bharat @2047')}</span>
            </span>
            <span style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>
              📍 <strong>{activeLocation.district}</strong>, {activeLocation.state} • {tr('AWS Station Sync:')} <strong style={{ color: '#34d399' }}>{tr('Active')}</strong>
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={handleRefresh}
              className="btn btn-secondary"
              style={{ padding: '0.35rem 0.75rem', fontSize: '0.74rem', gap: '0.35rem' }}
              title="Refresh Live Weather Observation"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-sky-400 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>{isRefreshing ? tr('Syncing...') : tr('Refresh Telemetry')}</span>
            </button>

            <button
              onClick={() => setActiveTab('hydromap')}
              className="btn btn-secondary"
              style={{ padding: '0.35rem 0.75rem', fontSize: '0.74rem', gap: '0.35rem' }}
            >
              <Compass className="w-3.5 h-3.5 text-emerald-400" />
              <span>{tr('Open Full 6-Mode Map')}</span>
            </button>
          </div>
        </div>

        {/* Big Temperature Hero, Condition & Quick Status */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '1.25rem' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span style={{
              fontSize: '4.8rem',
              fontWeight: 900,
              fontFamily: 'var(--font-heading)',
              color: '#38bdf8',
              lineHeight: 1,
              letterSpacing: '-0.03em',
              filter: 'drop-shadow(0 0 18px rgba(56, 189, 248, 0.45))'
            }}>
              {telemetry.temp}°C
            </span>
            <span style={{ fontSize: '3.8rem', filter: 'drop-shadow(0 0 14px rgba(255, 255, 255, 0.2))' }}>
              🌧️
            </span>
          </div>

          <div style={{ textAlign: 'right', flex: 1, minWidth: '220px' }}>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f8fafc', marginBottom: '0.2rem' }}>
              {tr(activeHub.status)}
            </div>
            <div style={{ fontSize: '0.88rem', color: '#94a3b8', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span>{tr('Feels like')}: <strong style={{ color: '#fff' }}>30.2°C</strong></span>
              <span>•</span>
              <span>{tr('Wind Speed')}: <strong style={{ color: '#fff' }}>{telemetry.windKmh} km/h</strong></span>
              <span>•</span>
              <span>{tr('Rain Anomaly')}: <strong style={{ color: '#34d399' }}>{telemetry.rainAnomaly}</strong></span>
            </div>
          </div>

        </div>

        {/* Weather Alert Banner */}
        <div style={{
          background: 'rgba(16, 185, 129, 0.14)',
          border: '1px solid var(--border-emerald)',
          borderRadius: '999px',
          padding: '0.5rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.84rem',
          color: '#6ee7b7',
          fontWeight: 700
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>🌿</span>
            <span>{tr('Active Soil & Vegetative Advisory')}: {activeLocation.district} — {tr('Recommended sowing window open')}.</span>
          </div>
          <span style={{ fontSize: '0.76rem', opacity: 0.9 }}>● 85% {tr('Rain Probability')}</span>
        </div>

      </div>

      {/* 2. EMBEDDED MAP ON HOME PAGE + MULTI-COLOR TELEMETRY CARDS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.25rem' }}>
        
        {/* EMBEDDED INTERACTIVE FULL-COLOR MAP CARD */}
        <div className="glass-card" style={{ 
          padding: '1.25rem', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '0.75rem',
          border: '1.5px solid rgba(56, 189, 248, 0.3)' 
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Compass className="w-4 h-4 text-sky-400" />
              <h3 style={{ fontSize: '1rem', color: '#fff', margin: 0, fontWeight: 800 }}>
                {tr('Live Geospatial Field View')}
              </h3>
            </div>

            {/* Map Mode Buttons */}
            <div style={{ display: 'flex', gap: '0.25rem' }}>
              {[
                { id: 'street', label: 'Color Street' },
                { id: 'satellite', label: 'Satellite' },
                { id: 'topo', label: 'Topo' }
              ].map(m => (
                <button
                  key={m.id}
                  onClick={() => setMiniMapMode(m.id)}
                  style={{
                    padding: '0.2rem 0.55rem',
                    borderRadius: '6px',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    background: miniMapMode === m.id ? '#0284c7' : 'rgba(255, 255, 255, 0.05)',
                    color: miniMapMode === m.id ? '#fff' : '#94a3b8',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {tr(m.label)}
                </button>
              ))}
            </div>
          </div>

          {/* Map Canvas Container */}
          <div style={{ 
            height: '270px', 
            borderRadius: '12px', 
            overflow: 'hidden', 
            position: 'relative',
            border: '1px solid rgba(255, 255, 255, 0.1)' 
          }}>
            <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }} />
            
            {/* Map Overlay Indicator */}
            <div style={{
              position: 'absolute',
              bottom: '0.5rem',
              left: '0.5rem',
              background: 'rgba(11, 15, 35, 0.88)',
              backdropFilter: 'blur(10px)',
              padding: '0.3rem 0.6rem',
              borderRadius: '6px',
              fontSize: '0.68rem',
              color: '#34d399',
              fontWeight: 700
            }}>
              {tr('Survey of India Sovereign Certified')}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.72rem', color: '#94a3b8' }}>
            <span>{tr('Coordinates:')} <strong style={{ color: '#fff' }}>{activeLocation.lat?.toFixed(2) || '26.85'}°N, {activeLocation.lng?.toFixed(2) || '80.95'}°E</strong></span>
            <button 
              onClick={() => setActiveTab('hydromap')}
              style={{ background: 'transparent', border: 'none', color: '#38bdf8', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
            >
              <span>{tr('Inspect GIS Overlays')}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* 4 COLOR-CODED TELEMETRY METRIC CARDS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.85rem' }}>
          
          {/* 1. Rainfall (Sky Blue) */}
          <div className="telemetry-card" style={{ borderLeft: '4px solid #0284c7' }}>
            <div className="telemetry-label" style={{ color: '#38bdf8' }}>
              🌧️ {t('rainfall_metric')}
            </div>
            <div className="telemetry-value" style={{ color: '#ffffff', fontSize: '1.6rem' }}>
              {telemetry.rainMmToday} / {telemetry.rainMm7d} <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>mm</span>
            </div>
            <div className="telemetry-sub" style={{ color: '#38bdf8' }}>
              <CloudRain className="w-3.5 h-3.5" />
              <span>{tr('Rain Anomaly')}: <strong>{telemetry.rainAnomaly}</strong> vs Normal</span>
            </div>
          </div>

          {/* 2. Soil Moisture (Lush Emerald) */}
          <div className="telemetry-card" style={{ borderLeft: '4px solid #059669' }}>
            <div className="telemetry-label" style={{ color: '#34d399' }}>
              🌱 {t('humidity_soil')}
            </div>
            <div className="telemetry-value" style={{ color: '#ffffff', fontSize: '1.6rem' }}>
              {telemetry.humidity}% <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>/ 32%</span>
            </div>
            <div className="telemetry-sub" style={{ color: '#34d399' }}>
              <Droplets className="w-3.5 h-3.5" />
              <span>{tr('Soil Moisture')} (0–30cm)</span>
            </div>
          </div>

          {/* 3. Surface Temp & Pressure (Golden Amber) */}
          <div className="telemetry-card" style={{ borderLeft: '4px solid #f59e0b' }}>
            <div className="telemetry-label" style={{ color: '#fbbf24' }}>
              ☀️ {t('surface_temp')}
            </div>
            <div className="telemetry-value" style={{ color: '#ffffff', fontSize: '1.6rem' }}>
              {telemetry.temp}°C <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>/ 1006 hPa</span>
            </div>
            <div className="telemetry-sub" style={{ color: '#fbbf24' }}>
              <Thermometer className="w-3.5 h-3.5" />
              <span>{tr('Temperature (°C)')} Range</span>
            </div>
          </div>

          {/* 4. Risk & Disaster Watch (Royal Purple / Crimson) */}
          <div className="telemetry-card" style={{ borderLeft: '4px solid #a855f7' }}>
            <div className="telemetry-label" style={{ color: '#c084fc' }}>
              🚨 {t('composite_risk')}
            </div>
            <div className="telemetry-value" style={{ color: '#ffffff', fontSize: '1.6rem' }}>
              {telemetry.compositeRiskScore} <span style={{ fontSize: '0.9rem', color: '#c084fc' }}>/ 100</span>
            </div>
            <div className="telemetry-sub" style={{ color: '#c084fc' }}>
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>{telemetry.riskRating} (Safe Sowing)</span>
            </div>
          </div>

        </div>

      </div>

      {/* 3. TOP 3 CURRENTLY SUITABLE CROPS AT THIS PLACE */}
      <div className="glass-card" style={{ 
        padding: '1.4rem', 
        border: '1.5px solid rgba(16, 185, 129, 0.35)',
        background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.08) 0%, rgba(11, 15, 30, 0.9) 100%)' 
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Sprout className="w-5 h-5 text-emerald-400" />
              <h3 style={{ fontSize: '1.15rem', color: '#fff', margin: 0, fontWeight: 800 }}>
                {tr('Top 3 Optimal Crops for this Region')} ({activeLocation.district})
              </h3>
            </div>
            <p style={{ fontSize: '0.8rem', color: '#cbd5e1', margin: '0.2rem 0 0' }}>
              Matched using ICAR cultivar trials, active monsoon rainfall anomaly ({telemetry.rainAnomaly}), and regional soil profile.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('agriculture')}
            className="btn btn-secondary"
            style={{ fontSize: '0.78rem', gap: '0.35rem' }}
          >
            <span>{tr('Explore All 42+ Crops')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 Crop Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '1rem' }}>
          {top3Crops.map((crop, idx) => {
            const rankLabel = idx === 0 ? '#1 Ranked Best Match' : idx === 1 ? '#2 Strong Runner-Up' : '#3 High-Resilience Alternative';
            const rankColor = idx === 0 ? '#10b981' : idx === 1 ? '#0284c7' : '#f59e0b';

            return (
              <div
                key={crop.id}
                style={{
                  background: 'rgba(15, 23, 42, 0.85)',
                  border: `1.5px solid ${rankColor}55`,
                  borderRadius: '14px',
                  padding: '1.15rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: `0 8px 24px rgba(0,0,0,0.35), 0 0 15px ${rankColor}22`,
                  position: 'relative'
                }}
              >
                <div>
                  {/* Rank Badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                    <span style={{
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      color: '#fff',
                      background: rankColor,
                      padding: '0.15rem 0.55rem',
                      borderRadius: '999px',
                      boxShadow: `0 0 8px ${rankColor}88`
                    }}>
                      {tr(rankLabel)}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 600 }}>
                      {tr(crop.season)} {tr('Season')}
                    </span>
                  </div>

                  {/* Crop Name & Cultivar */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.65rem' }}>
                    <span style={{ fontSize: '2rem' }}>{crop.icon}</span>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', color: '#fff', margin: 0, fontWeight: 800 }}>
                        {tr(crop.name)}
                      </h4>
                      <strong style={{ fontSize: '0.84rem', color: '#38bdf8' }}>
                        {tr(crop.variety)}
                      </strong>
                    </div>
                  </div>

                  {/* Score & Specs */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '0.4rem',
                    background: 'rgba(255, 255, 255, 0.04)',
                    padding: '0.6rem',
                    borderRadius: '10px',
                    fontSize: '0.75rem',
                    marginBottom: '0.65rem'
                  }}>
                    <div>
                      <span style={{ color: '#94a3b8', fontSize: '0.66rem', display: 'block' }}>{tr('Suitability Score')}</span>
                      <strong style={{ color: '#34d399', fontSize: '1.1rem' }}>{crop.suitability}%</strong>
                    </div>
                    <div>
                      <span style={{ color: '#94a3b8', fontSize: '0.66rem', display: 'block' }}>{tr('Duration')}</span>
                      <strong style={{ color: '#f8fafc' }}>{crop.durationDays} {tr('Days')}</strong>
                    </div>
                    <div>
                      <span style={{ color: '#94a3b8', fontSize: '0.66rem', display: 'block' }}>{tr('Water Need')}</span>
                      <strong style={{ color: '#38bdf8' }}>{crop.waterNeedMm}</strong>
                    </div>
                    <div>
                      <span style={{ color: '#94a3b8', fontSize: '0.66rem', display: 'block' }}>{tr('Govt. MSP Rate')}</span>
                      <strong style={{ color: '#fbbf24' }}>{crop.mspPerQuintal}</strong>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.76rem', color: '#cbd5e1', lineHeight: '1.4', margin: '0.4rem 0' }}>
                    <strong>{tr('Agronomic Fit')}:</strong> {tr(crop.stressTolerance)}
                  </p>

                  {/* Dedicated "Why Recommended" Description for Top 1, 2, and 3 */}
                  <div style={{
                    marginTop: '0.65rem',
                    padding: '0.65rem 0.8rem',
                    borderRadius: '10px',
                    background: idx === 0 ? 'rgba(16, 185, 129, 0.12)' : idx === 1 ? 'rgba(2, 132, 199, 0.12)' : 'rgba(245, 158, 11, 0.12)',
                    border: `1px solid ${rankColor}44`,
                    fontSize: '0.76rem',
                    lineHeight: '1.45',
                    color: '#e2e8f0'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 800, color: rankColor, marginBottom: '0.25rem', fontSize: '0.78rem' }}>
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{tr('Why Recommended for this Location')}:</span>
                    </div>
                    <p style={{ margin: 0 }}>
                      {idx === 0
                        ? tr(`${crop.name} is the top recommendation for ${activeLocation.district} due to ideal root-zone soil moisture match, optimal thermal window (24°C–32°C), and verified high-yield ICAR cultivar trials with guaranteed MSP.`)
                        : idx === 1
                        ? tr(`${crop.name} is strongly recommended as the #2 crop because of superior water efficiency (requires 30-35% less irrigation), faster maturity in ${crop.durationDays} days, and high resilience against unexpected monsoon dry spells.`)
                        : tr(`${crop.name} is recommended as the #3 resilient alternative for low input cost, high drought tolerance, excellent soil nitrogen enrichment, and stable market returns if monsoon rainfall fluctuates.`)
                      }
                    </p>
                  </div>
                </div>

                {/* Card CTA */}
                <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.65rem' }}>
                  <button
                    onClick={() => setActiveTab('scenario')}
                    className="btn btn-secondary"
                    style={{ flex: 1, fontSize: '0.72rem', padding: '0.3rem' }}
                  >
                    <Zap className="w-3 h-3 text-amber-400" /> {tr('Simulate Stress')}
                  </button>
                  <button
                    onClick={() => setActiveTab('agriculture')}
                    className="btn btn-primary"
                    style={{ flex: 1, fontSize: '0.72rem', padding: '0.3rem' }}
                  >
                    <CheckCircle2 className="w-3 h-3" /> {tr('View Guidelines')}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. 7-DAY VS 30-DAY PRECIPITATION & THERMAL GRAPHS */}
      <div className="glass-card" style={{ padding: '1.35rem', border: '1.5px solid rgba(56, 189, 248, 0.25)' }}>
        
        {/* Graph Header with 7d vs 30d Toggle */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <BarChart2 className="w-4 h-4 text-sky-400" />
              <h3 style={{ fontSize: '1.05rem', color: '#fff', margin: 0, fontWeight: 800 }}>
                {graphMode === '7d' ? tr('7-Day Synoptic Weather & Precipitation Trajectory') : tr('30-Day Climatological Monsoon Accumulation Curve')}
              </h3>
            </div>
            <p style={{ fontSize: '0.78rem', color: '#94a3b8', margin: '0.2rem 0 0' }}>
              {graphMode === '7d' ? tr('Daily forecast rain vs 30-year IMD climatological normal') : tr('Weekly historical progression vs IMD normal curve')}
            </p>
          </div>

          {/* Toggle Switch */}
          <div style={{ display: 'flex', gap: '0.25rem', background: 'rgba(255, 255, 255, 0.04)', padding: '0.25rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <button
              onClick={() => setGraphMode('7d')}
              style={{
                padding: '0.35rem 0.85rem',
                borderRadius: '8px',
                fontSize: '0.76rem',
                fontWeight: 800,
                background: graphMode === '7d' ? 'linear-gradient(135deg, #0284c7 0%, #059669 100%)' : 'transparent',
                color: graphMode === '7d' ? '#ffffff' : '#94a3b8',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              {tr('7-Day Forecast Graph')}
            </button>
            <button
              onClick={() => setGraphMode('30d')}
              style={{
                padding: '0.35rem 0.85rem',
                borderRadius: '8px',
                fontSize: '0.76rem',
                fontWeight: 800,
                background: graphMode === '30d' ? 'linear-gradient(135deg, #a855f7 0%, #0284c7 100%)' : 'transparent',
                color: graphMode === '30d' ? '#ffffff' : '#94a3b8',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              {tr('30-Day Seasonal Graph')}
            </button>
          </div>
        </div>

        {/* Graph Display Area */}
        {graphMode === '7d' ? (
          /* 7-DAY INTERACTIVE BAR & THERMAL CURVE */
          <div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: '0.65rem',
              alignItems: 'flex-end',
              height: '210px',
              paddingBottom: '1.2rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              {data7Day.map((d, i) => {
                const maxVal = 25;
                const rainHeight = Math.min(100, (d.rainMm / maxVal) * 100);
                const normHeight = Math.min(100, (d.normalMm / maxVal) * 100);

                return (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end', gap: '0.35rem' }}>
                    <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#38bdf8' }}>
                      {d.rainMm} mm
                    </span>

                    {/* Dual Bars: Actual Forecast vs Normal */}
                    <div style={{ display: 'flex', gap: '3px', alignItems: 'flex-end', height: '130px', width: '80%' }}>
                      <div 
                        title={`IMD Normal: ${d.normalMm} mm`}
                        style={{
                          flex: 1,
                          height: `${normHeight}%`,
                          background: 'rgba(255, 255, 255, 0.15)',
                          borderRadius: '4px 4px 0 0'
                        }}
                      />
                      <div 
                        title={`Forecast Rain: ${d.rainMm} mm`}
                        style={{
                          flex: 1,
                          height: `${rainHeight}%`,
                          background: 'linear-gradient(180deg, #38bdf8 0%, #0284c7 100%)',
                          borderRadius: '4px 4px 0 0',
                          boxShadow: '0 0 10px rgba(56, 189, 248, 0.4)'
                        }}
                      />
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '0.2rem' }}>
                      <span style={{ fontSize: '0.74rem', fontWeight: 700, color: '#fff', display: 'block' }}>{d.label}</span>
                      <span style={{ fontSize: '0.68rem', color: '#fbbf24', fontWeight: 600 }}>{d.maxT}° / {d.minT}°</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '0.85rem', fontSize: '0.76rem', color: '#cbd5e1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#0284c7' }} />
                <span>{tr('Forecast Precipitation (mm)')}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: 'rgba(255, 255, 255, 0.2)' }} />
                <span>{tr('30-Year IMD Normal Baseline')}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fbbf24' }} />
                <span>{tr('Max/Min Temp (°C)')}</span>
              </div>
            </div>
          </div>
        ) : (
          /* 30-DAY SEASONAL CLIMATOLOGY CURVE */
          <div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '1rem',
              alignItems: 'flex-end',
              height: '210px',
              paddingBottom: '1.2rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              {data30Day.map((w, idx) => {
                const maxVal = 110;
                const actHeight = (w.rainMm / maxVal) * 100;
                const normHeight = (w.normalMm / maxVal) * 100;
                const isSurplus = w.anomaly.startsWith('+');

                return (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end', gap: '0.35rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: isSurplus ? '#34d399' : '#fb7185' }}>
                      {w.rainMm} mm ({w.anomaly})
                    </span>

                    {/* Bars */}
                    <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end', height: '130px', width: '70%' }}>
                      <div 
                        title={`Normal: ${w.normalMm} mm`}
                        style={{
                          flex: 1,
                          height: `${normHeight}%`,
                          background: 'rgba(255, 255, 255, 0.15)',
                          borderRadius: '4px 4px 0 0'
                        }}
                      />
                      <div 
                        title={`Recorded: ${w.rainMm} mm`}
                        style={{
                          flex: 1,
                          height: `${actHeight}%`,
                          background: isSurplus 
                            ? 'linear-gradient(180deg, #34d399 0%, #059669 100%)' 
                            : 'linear-gradient(180deg, #fb7185 0%, #e11d48 100%)',
                          borderRadius: '4px 4px 0 0',
                          boxShadow: isSurplus ? '0 0 10px rgba(52, 211, 153, 0.4)' : 'none'
                        }}
                      />
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '0.2rem' }}>
                      <span style={{ fontSize: '0.74rem', fontWeight: 700, color: '#fff', display: 'block' }}>{w.label}</span>
                      <span style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Avg Temp: {w.tempAvg}°C</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 30-Day Legend */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '0.85rem', fontSize: '0.76rem', color: '#cbd5e1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#059669' }} />
                <span>{tr('Recorded Surplus (mm)')}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: 'rgba(255, 255, 255, 0.2)' }} />
                <span>{tr('Climatological Normal')}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#fb7185' }} />
                <span>{tr('Deficit Window')}</span>
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
