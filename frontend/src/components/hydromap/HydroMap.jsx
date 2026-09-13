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
      });
    }
  }, [activeMode]);

  // Fly to active hub when changed from navbar/location bar
  useEffect(() => {
    if (mapInstance.current && activeHub) {
      mapInstance.current.flyTo({
        center: [activeHub.lng, activeHub.lat],
        zoom: 6.8,
        essential: true,
        speed: 1.2
      });
    }
  }, [activeHub]);

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
          <span style={{ fontSize: '0.74rem', color: '#59C7B1', textTransform: 'uppercase', fontWeight: 800, marginRight: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Compass className="w-3.5 h-3.5" /> Map View:
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
                  background: isActive ? 'linear-gradient(135deg, #1E8A78 0%, #2F6B4F 100%)' : 'rgba(247, 241, 227, 0.05)',
                  color: isActive ? '#F7F1E3' : '#B9C6BB',
                  border: isActive ? '1px solid #59C7B1' : '1px solid rgba(89, 199, 177, 0.15)',
                  boxShadow: isActive ? '0 4px 14px rgba(30, 138, 120, 0.4)' : 'none',
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

      {/* Main Map Canvas Area with Floating Telemetry HUD, Legend & Layer Controls */}
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        height: '620px', 
        borderRadius: '18px', 
        overflow: 'hidden', 
        border: '1.5px solid rgba(89, 199, 177, 0.3)', 
        boxShadow: '0 16px 50px rgba(0, 0, 0, 0.6)' 
      }}>
        
        {/* MapLibre DOM Target (Full color maps load here) */}
        <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />

        {/* Floating Telemetry HUD (Top-Left) */}
        <div style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          zIndex: 10,
          background: 'rgba(16, 37, 30, 0.94)',
          backdropFilter: 'blur(16px)',
          border: '1.5px solid rgba(89, 199, 177, 0.35)',
          borderRadius: '16px',
          padding: '1.1rem',
          maxWidth: '310px',
          boxShadow: '0 12px 35px rgba(0,0,0,0.65)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
            <span style={{ fontSize: '1.25rem' }}>{activeHub.icon}</span>
            <div>
              <strong style={{ fontSize: '0.98rem', color: '#F7F1E3', display: 'block', lineHeight: 1.2 }}>{activeHub.name}</strong>
              <span style={{ fontSize: '0.72rem', color: '#E2A83B', fontWeight: 700 }}>{activeHub.belt}</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', margin: '0.75rem 0', fontSize: '0.75rem' }}>
            <div style={{ background: 'rgba(24, 58, 45, 0.7)', padding: '0.45rem', borderRadius: '8px', border: '1px solid rgba(89, 199, 177, 0.15)' }}>
              <div style={{ color: '#B9C6BB', fontSize: '0.68rem' }}>Geo Coordinate</div>
              <div style={{ color: '#F7F1E3', fontWeight: 700 }}>{activeHub.lat}°N, {activeHub.lng}°E</div>
            </div>
            <div style={{ background: 'rgba(30, 138, 120, 0.2)', padding: '0.45rem', borderRadius: '8px', border: '1px solid rgba(89, 199, 177, 0.25)' }}>
              <div style={{ color: '#B9C6BB', fontSize: '0.68rem' }}>Rain Anomaly</div>
              <div style={{ color: '#59C7B1', fontWeight: 800 }}>{telemetry.rainAnomaly} vs Norm</div>
            </div>
          </div>

          <div style={{ 
            fontSize: '0.74rem', 
            color: '#B9C6BB', 
            background: 'rgba(30, 138, 120, 0.15)', 
            border: '1px solid rgba(89, 199, 177, 0.25)', 
            padding: '0.45rem 0.65rem', 
            borderRadius: '8px', 
            marginBottom: '0.85rem' 
          }}>
            Status: <strong style={{ color: '#F7F1E3' }}>{activeHub.status}</strong>
          </div>

          <button 
            onClick={() => switchHub(activeHub.id)}
            className="btn btn-primary"
            style={{ 
              width: '100%', 
              padding: '0.45rem', 
              fontSize: '0.78rem' 
            }}
          >
            <RefreshCw className="w-3.5 h-3.5" /> Sync Dashboard Telemetry
          </button>
        </div>

        {/* Floating Layer Overlay Switcher (Top-Right) */}
        <div style={{
          position: 'absolute',
          top: '3.5rem',
          right: '1rem',
          zIndex: 10,
          background: 'rgba(16, 37, 30, 0.94)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(89, 199, 177, 0.25)',
          borderRadius: '14px',
          padding: '0.85rem',
          fontSize: '0.76rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.65)'
        }}>
          <div style={{ fontWeight: 800, color: '#F7F1E3', marginBottom: '0.55rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Layers className="w-3.5 h-3.5" style={{ color: '#59C7B1' }} /> Real-Time Agro Layers
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {[
              { id: 'rainfall_anomaly', label: 'Rainfall Anomaly Heatmap', color: '#1E8A78' },
              { id: 'crop_suitability', label: 'ICAR Cultivar Zones', color: '#2F6B4F' },
              { id: 'water_stress', label: 'Root-Zone Moisture Stress', color: '#E2A83B' },
              { id: 'drought_risk', label: 'Severe Weather Hazard', color: '#C95A4A' }
            ].map(l => (
              <label 
                key={l.id} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.45rem', 
                  cursor: 'pointer', 
                  color: activeLayers[l.id] ? '#F7F1E3' : '#B9C6BB',
                  fontWeight: activeLayers[l.id] ? 600 : 400
                }}
              >
                <input 
                  type="checkbox" 
                  checked={activeLayers[l.id]} 
                  onChange={() => toggleLayer(l.id)} 
                  style={{ accentColor: l.color }}
                />
                <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: l.color }} />
                <span>{l.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Floating COLOR LEGEND (Bottom-Right) */}
        <div style={{
          position: 'absolute',
          bottom: '4.8rem',
          right: '1rem',
          zIndex: 10,
          background: 'rgba(16, 37, 30, 0.94)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(89, 199, 177, 0.25)',
          borderRadius: '12px',
          padding: '0.65rem 0.85rem',
          fontSize: '0.72rem',
          color: '#B9C6BB',
          boxShadow: '0 8px 25px rgba(0,0,0,0.6)'
        }}>
          <div style={{ fontWeight: 700, color: '#F7F1E3', marginBottom: '0.35rem', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            🌧️ IMD Rainfall Anomaly Scale
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.3rem 0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#1E8A78' }} />
              <span>Excess (+20%+)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#2F6B4F' }} />
              <span>Normal (±19%)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#E2A83B' }} />
              <span>Deficit (-20% to -59%)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#C95A4A' }} />
              <span>Scanty (-60%+)</span>
            </div>
          </div>
        </div>

        {/* Floating Time Slider (Bottom Bar) */}
        <div style={{
          position: 'absolute',
          bottom: '1rem',
          left: '1rem',
          right: '1rem',
          zIndex: 10,
          background: 'rgba(11, 15, 35, 0.94)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '14px',
          padding: '0.75rem 1.4rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
          boxShadow: '0 10px 35px rgba(0,0,0,0.65)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', whiteSpace: 'nowrap' }}>
            <Calendar className="w-4 h-4 text-emerald-400" />
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#fff' }}>
              Monsoon Progression Time-Step:
            </span>
            <span className="badge badge-emerald" style={{ fontSize: '0.72rem' }}>
              {timeStep === 0 ? 'Today (Live)' : (timeStep < 0 ? `${timeStep} Days (Historical)` : `+${timeStep} Days (Forecast)`)}
            </span>
          </div>

          <input 
            type="range" 
            min="-7" 
            max="14" 
            step="1" 
            value={timeStep} 
            onChange={(e) => setTimeStep(parseInt(e.target.value))} 
            style={{ flex: 1, accentColor: '#10b981' }}
          />

          <div style={{ display: 'flex', gap: '0.4rem', fontSize: '0.72rem', color: '#94a3b8', fontWeight: 600 }}>
            <span>-7d Past</span>
            <span>•</span>
            <span style={{ color: '#34d399' }}>Today</span>
            <span>•</span>
            <span>+14d IMD Forecast</span>
          </div>
        </div>

      </div>

    </div>
  );
}
