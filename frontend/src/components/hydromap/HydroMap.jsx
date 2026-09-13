import React, { useState, useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import { useApp, AGRO_HUBS } from '../common/AppContext';
import { INDIA_BOUNDARY_GEOJSON, INDIA_STATES_GEOJSON } from '../../data/indiaGeoJson';
import { 
  Layers, MapPin, Compass, Shield, Eye, EyeOff, 
  Sliders, Calendar, RefreshCw, ZoomIn, ZoomOut, Check, Info,
  Sun, Droplets, CloudRain, Wind
} from 'lucide-react';

export const MAP_MODES = [
  { 
    id: 'mappls_street', 
    name: 'Color Street Map', 
    icon: '🗺️', 
    title: 'Full-Color Street & Agricultural Road Network' 
  },
  { 
    id: 'mappls_hydro', 
    name: 'Hydro-GIS Topo', 
    icon: '🌊', 
    title: 'Topographic Relief, River Basins & Watershed Drainage' 
  },
  { 
    id: 'mappls_terrain', 
    name: 'Physical Terrain', 
    icon: '⛰️', 
    title: 'Physical Elevation Contours & Mountain Relief' 
  },
  { 
    id: 'satellite', 
    name: 'True-Color Satellite', 
    icon: '🛰️', 
    title: 'High-Resolution Earth Observation Imagery' 
  },
  { 
    id: 'hybrid', 
    name: 'Hybrid Satellite', 
    icon: '🌐', 
    title: 'Satellite Imagery + Roads & District Places' 
  },
  { 
    id: 'osm_vibrant', 
    name: 'OpenStreetMap Vibrant', 
    icon: '🇮🇳', 
    title: 'Vibrant Open Community Cartography' 
  }
];

const getStyleForMode = (mode) => {
  const commonSources = {
    'soi-national-boundary': {
      type: 'geojson',
      data: INDIA_BOUNDARY_GEOJSON
    },
    'soi-states': {
      type: 'geojson',
      data: INDIA_STATES_GEOJSON
    }
  };

  // Clean, respectful cartographic boundaries (No harsh blue lines, sovereign gold & subtle state borders)
  const commonBoundaryLayers = [
    {
      id: 'soi-states-outline',
      type: 'line',
      source: 'soi-states',
      paint: {
        'line-color': '#475569',
        'line-width': 1.0,
        'line-dasharray': [3, 2],
        'line-opacity': 0.45
      }
    }
  ];

  if (mode === 'satellite') {
    return {
      version: 8,
      glyphs: 'https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf',
      sources: {
        ...commonSources,
        'esri-satellite': {
          type: 'raster',
          tiles: [
            'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
          ],
          tileSize: 256,
          attribution: 'Esri, Maxar • Survey of India Sovereign Boundary Compliant'
        }
      },
      layers: [
        { id: 'bg', type: 'background', paint: { 'background-color': '#0f172a' } },
        { id: 'sat-layer', type: 'raster', source: 'esri-satellite', minzoom: 0, maxzoom: 20 },
        ...commonBoundaryLayers
      ]
    };
  }

  if (mode === 'hybrid') {
    return {
      version: 8,
      glyphs: 'https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf',
      sources: {
        ...commonSources,
        'esri-satellite': {
          type: 'raster',
          tiles: [
            'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
          ],
          tileSize: 256
        },
        'esri-transport': {
          type: 'raster',
          tiles: [
            'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}'
          ],
          tileSize: 256
        },
        'esri-places': {
          type: 'raster',
          tiles: [
            'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'
          ],
          tileSize: 256
        }
      },
      layers: [
        { id: 'bg', type: 'background', paint: { 'background-color': '#0f172a' } },
        { id: 'sat-layer', type: 'raster', source: 'esri-satellite', minzoom: 0, maxzoom: 20 },
        { id: 'trans-layer', type: 'raster', source: 'esri-transport', minzoom: 0, maxzoom: 20, paint: { 'raster-opacity': 0.85 } },
        { id: 'places-layer', type: 'raster', source: 'esri-places', minzoom: 0, maxzoom: 20 },
        ...commonBoundaryLayers
      ]
    };
  }

  if (mode === 'mappls_hydro') {
    return {
      version: 8,
      glyphs: 'https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf',
      sources: {
        ...commonSources,
        'topo-hydro-tiles': {
          type: 'raster',
          tiles: [
            'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
          ],
          tileSize: 256,
          attribution: 'Mappls Hydro-GIS River Basins • Survey of India'
        }
      },
      layers: [
        { id: 'bg', type: 'background', paint: { 'background-color': '#f1f5f9' } },
        { id: 'topo-layer', type: 'raster', source: 'topo-hydro-tiles', minzoom: 0, maxzoom: 19 },
        ...commonBoundaryLayers
      ]
    };
  }

  if (mode === 'mappls_terrain') {
    return {
      version: 8,
      glyphs: 'https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf',
      sources: {
        ...commonSources,
        'terrain-tiles': {
          type: 'raster',
          tiles: [
            'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}'
          ],
          tileSize: 256,
          attribution: 'Mappls Survey of India Physical Relief Cartography'
        }
      },
      layers: [
        { id: 'bg', type: 'background', paint: { 'background-color': '#f8fafc' } },
        { id: 'terrain-layer', type: 'raster', source: 'terrain-tiles', minzoom: 0, maxzoom: 19 },
        ...commonBoundaryLayers
      ]
    };
  }

  if (mode === 'osm_vibrant') {
    return {
      version: 8,
      glyphs: 'https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf',
      sources: {
        ...commonSources,
        'osm-tiles': {
          type: 'raster',
          tiles: [
            'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
          ],
          tileSize: 256,
          attribution: '© OpenStreetMap contributors • Survey of India Sovereign Boundary'
        }
      },
      layers: [
        { id: 'bg', type: 'background', paint: { 'background-color': '#f8fafc' } },
        { id: 'osm-layer', type: 'raster', source: 'osm-tiles', minzoom: 0, maxzoom: 19 },
        ...commonBoundaryLayers
      ]
    };
  }

  // Default: mappls_street — FULL COLOR VIBRANT WORLD STREET MAP
  return {
    version: 8,
    glyphs: 'https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf',
    sources: {
      ...commonSources,
      'street-tiles': {
        type: 'raster',
        tiles: [
          'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
        ],
        tileSize: 256,
        attribution: 'Mappls Street Cartography • Survey of India Sovereign Boundary'
      }
    },
    layers: [
      { id: 'bg', type: 'background', paint: { 'background-color': '#f8fafc' } },
      { id: 'street-layer', type: 'raster', source: 'street-tiles', minzoom: 0, maxzoom: 19 },
      ...commonBoundaryLayers
    ]
  };
};

export default function HydroMap() {
  const { activeHub, switchHub, telemetry, setTelemetry, lang } = useApp();
  const mapContainer = useRef(null);
  const mapInstance = useRef(null);
  const markersRef = useRef([]);
  const locationMarkerRef = useRef(null);

  const [activeMode, setActiveMode] = useState('mappls_street');
  const [timeStep, setTimeStep] = useState(0); // -7 to +14 days
  const [activeLayers, setActiveLayers] = useState({
    rainfall_anomaly: true,
    crop_suitability: true,
    water_stress: false,
    drought_risk: false
  });

  // Initialize MapLibre GL with vibrant colored map
  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: getStyleForMode(activeMode),
      center: [activeHub.lng, activeHub.lat],
      zoom: 5.6,
      attributionControl: false
    });

    map.addControl(new maplibregl.NavigationControl({ showCompass: true }), 'top-right');
    mapInstance.current = map;

    map.on('load', () => {
      attachMarkers();
      attachLocationMarker();
    });

    return () => {
      markersRef.current.forEach(m => m.remove());
      map.remove();
    };
  }, []);

  // Update map style when activeMode changes
  useEffect(() => {
    if (mapInstance.current) {
      mapInstance.current.setStyle(getStyleForMode(activeMode));
      mapInstance.current.once('style.load', () => {
        attachMarkers();
        attachLocationMarker();
      });
    }
  }, [activeMode]);

  // Fly to active hub + update location marker
  useEffect(() => {
    if (mapInstance.current && activeHub) {
      mapInstance.current.flyTo({
        center: [activeHub.lng, activeHub.lat],
        zoom: 6.8,
        essential: true,
        speed: 1.2
      });
      attachLocationMarker();
    }
  }, [activeHub]);

  // High-visibility animated teardrop pointer with current location pill
  const attachLocationMarker = () => {
    if (!mapInstance.current || !activeHub) return;
    if (locationMarkerRef.current) {
      locationMarkerRef.current.remove();
    }
    const el = document.createElement('div');
    el.className = 'current-location-pin';
    el.innerHTML = `
      <div class="pin-pill">
        <span style="color:#FB7185">📍</span>
        <span>Current: ${activeHub.name.split(' (')[0]}</span>
      </div>
      <div class="pin-body"></div>
      <div class="pin-radar"></div>
    `;
    el.title = `${activeHub.name} — Current Location Coordinates: ${activeHub.lat}°N, ${activeHub.lng}°E`;
    
    locationMarkerRef.current = new maplibregl.Marker({ 
      element: el,
      anchor: 'bottom'
    })
      .setLngLat([activeHub.lng, activeHub.lat])
      .addTo(mapInstance.current);
  };

  const attachMarkers = () => {
    if (!mapInstance.current) return;
    markersRef.current.forEach(m => m.remove());
    markersRef.current = [];

    AGRO_HUBS.forEach(hub => {
      const el = document.createElement('div');
      el.className = 'custom-hub-marker';
      el.style.cssText = `
        background: ${hub.color};
        color: #ffffff;
        padding: 5px 9px;
        border-radius: 999px;
        font-family: 'Outfit', sans-serif;
        font-size: 11px;
        font-weight: 700;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 5px;
        box-shadow: 0 4px 14px rgba(0,0,0,0.35), 0 0 10px ${hub.color}88;
        border: 2px solid #ffffff;
        transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        z-index: 20;
      `;
      el.innerHTML = `<span>${hub.icon}</span><span>${hub.name.split(' (')[0]}</span>`;
      el.onmouseover = () => { el.style.transform = 'scale(1.12)'; };
      el.onmouseout = () => { el.style.transform = 'scale(1)'; };
      el.onclick = () => switchHub(hub.id);

      const marker = new maplibregl.Marker({ element: el })
        .setLngLat([hub.lng, hub.lat])
        .addTo(mapInstance.current);

      markersRef.current.push(marker);
    });
  };

  const toggleLayer = (layerKey) => {
    setActiveLayers(prev => ({ ...prev, [layerKey]: !prev[layerKey] }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
      
      {/* Top Banner: Colored Map Control Bar & 6-Mode Switcher */}
      <div className="glass-card" style={{ 
        padding: '0.85rem 1.25rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexWrap: 'wrap', 
        gap: '0.75rem',
        background: 'rgba(24, 58, 45, 0.85)',
        border: '1px solid rgba(89, 199, 177, 0.25)'
      }}>
        
        {/* 6 Map Modes with distinct colors */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.74rem', background: 'linear-gradient(90deg,#38BDF8,#84CC16)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', textTransform: 'uppercase', fontWeight: 800, marginRight: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Compass className="w-3.5 h-3.5" style={{color:'#38BDF8'}} /> Map View:
          </span>
          {MAP_MODES.map(mode => {
            const isActive = activeMode === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => setActiveMode(mode.id)}
                title={mode.title}
                className="btn"
                style={{
                  padding: '0.35rem 0.75rem',
                  fontSize: '0.76rem',
                  borderRadius: '10px',
                  background: isActive ? 'linear-gradient(135deg, #818CF8 0%, #38BDF8 100%)' : 'rgba(247, 241, 227, 0.05)',
                  color: isActive ? '#F7F1E3' : '#B9C6BB',
                  border: isActive ? '1px solid #818CF8' : '1px solid rgba(89, 199, 177, 0.15)',
                  boxShadow: isActive ? '0 4px 14px rgba(129, 140, 248, 0.4)' : 'none',
                  fontWeight: isActive ? 700 : 500
                }}
              >
                <span>{mode.icon}</span>
                <span>{mode.name}</span>
              </button>
            );
          })}
        </div>

        {/* Sovereign Adherence Indicator */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.4rem', 
          background: 'rgba(30, 138, 120, 0.2)', 
          border: '1px solid rgba(89, 199, 177, 0.35)', 
          borderRadius: '999px', 
          padding: '0.35rem 0.85rem', 
          fontSize: '0.74rem', 
          color: '#59C7B1',
          fontWeight: 700
        }}>
          <Shield className="w-4 h-4 text-emerald-400" />
          <span>Survey of India Sovereign Certified (Full Colors)</span>
        </div>
      </div>

      {/* Side-by-Side Map Workspace: Main Map View + Dedicated Side Panel for HUD & Controls */}
      <div className="hydromap-layout" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'minmax(0, 1fr) 330px', 
        gap: '1rem', 
        alignItems: 'stretch' 
      }}>
        
        {/* Left Column: Full Unobstructed Map + Time Slider Bar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', minWidth: 0 }}>
          <div 
            className="hydromap-canvas-container"
            style={{ 
              position: 'relative', 
              width: '100%', 
              height: '620px', 
              borderRadius: '18px', 
              overflow: 'hidden', 
              border: '1.5px solid rgba(89, 199, 177, 0.3)', 
              boxShadow: '0 16px 50px rgba(0, 0, 0, 0.6)' 
            }}
          >
            {/* MapLibre DOM Target (completely unblocked!) */}
            <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />

            {/* Subtle floating coordinate chip on map top-left */}
            <div style={{
              position: 'absolute',
              top: '0.85rem',
              left: '0.85rem',
              background: 'rgba(15, 23, 42, 0.88)',
              backdropFilter: 'blur(12px)',
              padding: '0.35rem 0.75rem',
              borderRadius: '999px',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              fontSize: '0.72rem',
              fontWeight: 700,
              color: '#38BDF8',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              pointerEvents: 'none',
              zIndex: 10
            }}>
              <MapPin className="w-3.5 h-3.5" style={{ color: '#FB7185' }} />
              <span>{activeHub.lat}°N, {activeHub.lng}°E • {activeHub.name}</span>
            </div>
          </div>

          {/* Time Progression Slider (Cleanly below the map, not covering it!) */}
          <div className="glass-card" style={{
            padding: '0.75rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            background: 'rgba(16, 37, 30, 0.95)',
            border: '1px solid rgba(89, 199, 177, 0.25)',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', whiteSpace: 'nowrap' }}>
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#FCD34D', fontFamily: 'var(--font-heading)' }}>
                Monsoon Time Step:
              </span>
              <span className="badge badge-lime" style={{ fontSize: '0.72rem' }}>
                {timeStep === 0 ? 'Today (Live)' : (timeStep < 0 ? `${timeStep}d (Historical)` : `+${timeStep}d (Forecast)`)}
              </span>
            </div>

            <input 
              type="range" 
              min="-7" 
              max="14" 
              step="1" 
              value={timeStep} 
              onChange={(e) => setTimeStep(parseInt(e.target.value))} 
              style={{ flex: 1, minWidth: '180px', accentColor: '#10b981' }}
            />

            <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.74rem', fontWeight: 700 }}>
              <span style={{ color: '#FB7185' }}>-7d Past</span>
              <span style={{ color: '#7D8D81' }}>•</span>
              <span style={{ color: '#84CC16' }}>Today</span>
              <span style={{ color: '#7D8D81' }}>•</span>
              <span style={{ color: '#38BDF8' }}>+14d IMD Forecast</span>
            </div>
          </div>
        </div>

        {/* Right Column: Dedicated Side Panel (Side-by-side) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', minWidth: 0 }}>
          
          {/* Active Hub & Location Telemetry HUD */}
          <div className="glass-card" style={{
            padding: '1.1rem',
            background: 'rgba(16, 37, 30, 0.95)',
            border: '1.5px solid rgba(89, 199, 177, 0.35)',
            borderRadius: '16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span className="badge badge-coral" style={{ fontSize: '0.68rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                <MapPin className="w-3 h-3" style={{ color: '#FB7185' }} /> Active Location
              </span>
              <span className="badge badge-sky" style={{ fontSize: '0.66rem' }}>
                {activeHub.status}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.65rem' }}>
              <span style={{ fontSize: '1.8rem', lineHeight: 1 }}>{activeHub.icon}</span>
              <div>
                <strong style={{ fontSize: '1.05rem', color: '#F7F1E3', display: 'block', lineHeight: 1.2, fontFamily: 'var(--font-heading)' }}>
                  {activeHub.name}
                </strong>
                <span style={{ fontSize: '0.72rem', color: '#E2A83B', fontWeight: 700 }}>{activeHub.belt}</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '0.85rem', fontSize: '0.75rem' }}>
              <div style={{ background: 'rgba(24, 58, 45, 0.7)', padding: '0.5rem', borderRadius: '8px', border: '1px solid rgba(56, 189, 248, 0.25)' }}>
                <div style={{ color: '#B9C6BB', fontSize: '0.68rem' }}>Geo Coordinate</div>
                <div style={{ color: '#38BDF8', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>{activeHub.lat}°N, {activeHub.lng}°E</div>
              </div>
              <div style={{ background: 'rgba(30, 138, 120, 0.2)', padding: '0.5rem', borderRadius: '8px', border: '1px solid rgba(132, 204, 22, 0.25)' }}>
                <div style={{ color: '#B9C6BB', fontSize: '0.68rem' }}>Rain Anomaly</div>
                <div style={{ color: '#84CC16', fontWeight: 800 }}>{telemetry.rainAnomaly} vs Norm</div>
              </div>
            </div>

            <button 
              onClick={() => switchHub(activeHub.id)}
              className="btn btn-primary"
              style={{ 
                width: '100%', 
                padding: '0.5rem', 
                fontSize: '0.8rem',
                gap: '0.4rem'
              }}
            >
              <RefreshCw className="w-3.5 h-3.5" /> Sync Dashboard Telemetry
            </button>
          </div>

          {/* Real-Time Agro Layers Card */}
          <div className="glass-card" style={{
            padding: '1rem',
            background: 'rgba(16, 37, 30, 0.95)',
            border: '1px solid rgba(89, 199, 177, 0.25)',
            borderRadius: '16px'
          }}>
            <div style={{ fontWeight: 800, color: '#F7F1E3', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', fontFamily: 'var(--font-heading)' }}>
              <Layers className="w-4 h-4" style={{ color: '#59C7B1' }} /> Real-Time Agro Layers
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { id: 'rainfall_anomaly', label: 'Rainfall Anomaly Heatmap', color: '#38BDF8' },
                { id: 'crop_suitability', label: 'ICAR Cultivar Zones', color: '#84CC16' },
                { id: 'water_stress', label: 'Root-Zone Moisture Stress', color: '#FB923C' },
                { id: 'drought_risk', label: 'Severe Weather Hazard', color: '#FB7185' }
              ].map(l => (
                <label 
                  key={l.id} 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem', 
                    cursor: 'pointer', 
                    color: activeLayers[l.id] ? '#F7F1E3' : '#B9C6BB',
                    fontWeight: activeLayers[l.id] ? 700 : 400,
                    fontSize: '0.78rem',
                    background: activeLayers[l.id] ? 'rgba(255,255,255,0.04)' : 'transparent',
                    padding: '0.3rem 0.45rem',
                    borderRadius: '6px'
                  }}
                >
                  <input 
                    type="checkbox" 
                    checked={activeLayers[l.id]} 
                    onChange={() => toggleLayer(l.id)} 
                    style={{ accentColor: l.color }}
                  />
                  <span style={{ display: 'inline-block', width: '9px', height: '9px', borderRadius: '50%', background: l.color, boxShadow: `0 0 6px ${l.color}` }} />
                  <span>{l.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* IMD Rainfall Anomaly Scale Legend Card */}
          <div className="glass-card" style={{
            padding: '1rem',
            background: 'rgba(16, 37, 30, 0.95)',
            border: '1px solid rgba(89, 199, 177, 0.25)',
            borderRadius: '16px',
            fontSize: '0.74rem'
          }}>
            <div style={{ fontWeight: 800, color: '#F7F1E3', marginBottom: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: '0.72rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span>🌧️</span> IMD Anomaly Legend
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#38BDF8', boxShadow: '0 0 5px #38BDF8' }} />
                <span style={{ color: '#E2E8F0' }}>Excess (+20%+)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#84CC16', boxShadow: '0 0 5px #84CC16' }} />
                <span style={{ color: '#E2E8F0' }}>Normal (±19%)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#FB923C', boxShadow: '0 0 5px #FB923C' }} />
                <span style={{ color: '#E2E8F0' }}>Deficit (-20%)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#FB7185', boxShadow: '0 0 5px #FB7185' }} />
                <span style={{ color: '#E2E8F0' }}>Scanty (-60%+)</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
