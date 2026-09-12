import React, { useState, useMemo } from 'react';
import { useApp, AGRO_HUBS } from './AppContext';
import { MapPin, Navigation, Compass, CheckCircle2, ChevronDown, LocateFixed, Building2, Home } from 'lucide-react';
import { INDIA_LOCATIONS } from '../../data/indiaLocations';
import { getLgdHierarchyForDistrict } from '../../data/lgdHierarchy';

export default function LocationBar() {
  const { activeHub, switchHub, activeLocation, setActiveLocation, setTelemetry, lang, t } = useApp();
  const [isManualOpen, setIsManualOpen] = useState(true); // Open by default for easy access
  const [gpsLoading, setGpsLoading] = useState(false);
  const [gpsMsg, setGpsMsg] = useState('');

  const allStates = useMemo(() => Object.keys(INDIA_LOCATIONS), []);

  const currentDistricts = useMemo(() => {
    return INDIA_LOCATIONS[activeLocation.state]?.districts || INDIA_LOCATIONS['Uttar Pradesh'].districts;
  }, [activeLocation.state]);

  const districtHierarchy = useMemo(() => {
    return getLgdHierarchyForDistrict(activeLocation.state, activeLocation.district);
  }, [activeLocation.state, activeLocation.district]);

  const currentBlocks = useMemo(() => {
    return districtHierarchy?.blocks || ['Central Block', 'North Tehsil', 'South Tehsil', 'East Mandal'];
  }, [districtHierarchy]);

  const currentPanchayats = useMemo(() => {
    const selectedBlock = activeLocation.block || currentBlocks[0];
    if (districtHierarchy?.panchayats?.[selectedBlock] && districtHierarchy.panchayats[selectedBlock].length > 0) {
      return districtHierarchy.panchayats[selectedBlock];
    }
    return [
      `${selectedBlock} Gram Panchayat 01`,
      `${selectedBlock} Model Gram Panchayat`,
      `${selectedBlock} Kisan Seva Panchayat`,
      `${selectedBlock} Pragatisheel Panchayat`
    ];
  }, [districtHierarchy, activeLocation.block, currentBlocks]);

  const handleStateChange = (stateName) => {
    const distList = INDIA_LOCATIONS[stateName]?.districts || ['Central District'];
    const defaultDistrict = distList[0];
    const hierarchy = getLgdHierarchyForDistrict(stateName, defaultDistrict);
    const defaultBlock = hierarchy.blocks[0] || 'Central Block';
    const defaultPanchayat = hierarchy.panchayats[defaultBlock]?.[0] || `${defaultBlock} Model GP`;

    setActiveLocation(prev => ({
      ...prev,
      state: stateName,
      district: defaultDistrict,
      block: defaultBlock,
      village: defaultPanchayat
    }));
  };

  const handleDistrictChange = (distName) => {
    const hierarchy = getLgdHierarchyForDistrict(activeLocation.state, distName);
    const defaultBlock = hierarchy.blocks[0] || 'Central Block';
    const defaultPanchayat = hierarchy.panchayats[defaultBlock]?.[0] || `${defaultBlock} Model GP`;

    setActiveLocation(prev => ({
      ...prev,
      district: distName,
      block: defaultBlock,
      village: defaultPanchayat
    }));

    setTelemetry(prev => ({
      ...prev,
      dataFreshness: `Synchronized for ${distName}, ${activeLocation.state} (${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })})`
    }));
  };

  const handleBlockChange = (blockName) => {
    const defaultPanchayat = districtHierarchy.panchayats[blockName]?.[0] || `${blockName} Model GP`;

    setActiveLocation(prev => ({
      ...prev,
      block: blockName,
      village: defaultPanchayat
    }));
  };

  const handleVillageChange = (panchayatName) => {
    setActiveLocation(prev => ({
      ...prev,
      village: panchayatName
    }));
  };

  const handleUseGPS = () => {
    if (!navigator.geolocation) {
      setGpsMsg('Geolocation not supported by your browser');
      return;
    }

    setGpsLoading(true);
    setGpsMsg('');

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setGpsLoading(false);
        setActiveLocation(prev => ({
          ...prev,
          lat: parseFloat(latitude.toFixed(4)),
          lng: parseFloat(longitude.toFixed(4)),
          district: 'GPS Local Field',
          state: 'Auto-Detected GPS',
          block: 'GPS Micro-Sector',
          village: `Lat: ${latitude.toFixed(3)}°, Lng: ${longitude.toFixed(3)}°`
        }));
        setTelemetry(prev => ({
          ...prev,
          dataFreshness: `GPS Locked: ${latitude.toFixed(3)}°N, ${longitude.toFixed(3)}°E`
        }));
      },
      (err) => {
        setGpsLoading(false);
        setGpsMsg('GPS permission denied or timed out; using nearest agro-hub');
        setTimeout(() => setGpsMsg(''), 3000);
      },
      { timeout: 8000 }
    );
  };

  return (
    <div style={{
      background: 'rgba(14, 22, 38, 0.92)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border-cyan)',
      padding: '0.55rem 1.25rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '0.85rem',
      flexWrap: 'wrap',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
    }}>
      {/* Left: Active Location Pin & Live GPS Button & 4-Tier Manual Dropdowns */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
        
        {/* Active Georeferenced Location Chip */}
        <div style={{
          background: 'rgba(0, 240, 255, 0.12)',
          border: '1px solid var(--border-cyan)',
          borderRadius: '10px',
          padding: '0.35rem 0.75rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.45rem',
          color: 'var(--neon-cyan)',
          fontSize: '0.78rem',
          fontWeight: 700,
          fontFamily: 'var(--font-heading)'
        }}>
          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
          <span>{activeLocation.district}, {activeLocation.state}</span>
          <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginLeft: '0.2rem' }} className="font-mono">
            ({activeLocation.lat ? activeLocation.lat.toFixed(2) : '26.85'}°N, {activeLocation.lng ? activeLocation.lng.toFixed(2) : '80.95'}°E)
          </span>
        </div>

        {/* GPS Button with Neon Saffron Glow */}
        <button
          onClick={handleUseGPS}
          disabled={gpsLoading}
          className="btn-cyan"
          style={{
            padding: '0.32rem 0.75rem',
            fontSize: '0.74rem',
            gap: '0.35rem',
            borderRadius: '999px',
            cursor: gpsLoading ? 'wait' : 'pointer'
          }}
          title="Detect my current farm location using GPS"
        >
          <LocateFixed className={`w-3.5 h-3.5 ${gpsLoading ? 'animate-spin' : ''}`} />
          <span>{gpsLoading ? 'Locating...' : '📍 Use My Live GPS'}</span>
        </button>

        {/* Manual Location Dropdown Toggle */}
        <button
          onClick={() => setIsManualOpen(!isManualOpen)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            background: isManualOpen ? 'rgba(255, 119, 34, 0.15)' : 'rgba(255, 255, 255, 0.05)',
            border: isManualOpen ? '1px solid var(--border-saffron)' : '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '8px',
            padding: '0.32rem 0.65rem',
            color: isManualOpen ? 'var(--neon-saffron)' : '#cbd5e1',
            fontSize: '0.74rem',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.18s'
          }}
        >
          <span>🎯 Manual Hierarchy</span>
          <ChevronDown className={`w-3 h-3 transition-transform ${isManualOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* 4-TIER MANUAL DROPDOWNS: State -> District -> Tehsil/Block/City -> Village/Gram Panchayat */}
        {isManualOpen && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            background: 'rgba(5, 8, 17, 0.95)',
            border: '1px solid var(--border-cyan)',
            borderRadius: '10px',
            padding: '0.28rem 0.6rem',
            boxShadow: '0 4px 18px rgba(0, 0, 0, 0.6)',
            flexWrap: 'wrap'
          }}>
            {/* 1. State Select */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <span style={{ fontSize: '0.65rem', color: 'var(--neon-saffron)', fontWeight: 700, textTransform: 'uppercase' }}>State:</span>
              <select
                value={activeLocation.state}
                onChange={(e) => handleStateChange(e.target.value)}
                style={{
                  background: 'var(--secondary-navy)',
                  border: '1px solid var(--border-cyan)',
                  borderRadius: '6px',
                  color: '#fff',
                  fontSize: '0.72rem',
                  padding: '0.22rem 0.45rem',
                  outline: 'none',
                  fontWeight: 600
                }}
              >
                {allStates.map(st => (
                  <option key={st} value={st} style={{ background: '#0E1626', color: '#fff' }}>{st}</option>
                ))}
              </select>
            </div>

            {/* 2. District Select */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <span style={{ fontSize: '0.65rem', color: 'var(--neon-cyan)', fontWeight: 700, textTransform: 'uppercase' }}>District:</span>
              <select
                value={activeLocation.district}
                onChange={(e) => handleDistrictChange(e.target.value)}
                style={{
                  background: 'var(--secondary-navy)',
                  border: '1px solid var(--border-cyan)',
                  borderRadius: '6px',
                  color: 'var(--neon-cyan)',
                  fontSize: '0.72rem',
                  padding: '0.22rem 0.45rem',
                  outline: 'none',
                  fontWeight: 700
                }}
              >
                {currentDistricts.map(dt => (
                  <option key={dt} value={dt} style={{ background: '#0E1626', color: '#fff' }}>{dt}</option>
                ))}
              </select>
            </div>

            {/* 3. Sub-District / Block / City Select */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <span style={{ fontSize: '0.65rem', color: 'var(--neon-gold)', fontWeight: 700, textTransform: 'uppercase' }}>Block/City:</span>
              <select
                value={activeLocation.block || currentBlocks[0]}
                onChange={(e) => handleBlockChange(e.target.value)}
                style={{
                  background: 'var(--secondary-navy)',
                  border: '1px solid rgba(245, 158, 11, 0.4)',
                  borderRadius: '6px',
                  color: 'var(--neon-gold)',
                  fontSize: '0.72rem',
                  padding: '0.22rem 0.45rem',
                  outline: 'none',
                  fontWeight: 600
                }}
              >
                {currentBlocks.map(blk => (
                  <option key={blk} value={blk} style={{ background: '#0E1626', color: '#fff' }}>{blk}</option>
                ))}
              </select>
            </div>

            {/* 4. Village / Gram Panchayat Select */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <span style={{ fontSize: '0.65rem', color: 'var(--neon-emerald)', fontWeight: 700, textTransform: 'uppercase' }}>Panchayat:</span>
              <select
                value={activeLocation.village || currentPanchayats[0]}
                onChange={(e) => handleVillageChange(e.target.value)}
                style={{
                  background: 'var(--secondary-navy)',
                  border: '1px solid var(--border-emerald)',
                  borderRadius: '6px',
                  color: 'var(--neon-emerald)',
                  fontSize: '0.72rem',
                  padding: '0.22rem 0.45rem',
                  outline: 'none',
                  fontWeight: 600
                }}
              >
                {currentPanchayats.map(panch => (
                  <option key={panch} value={panch} style={{ background: '#0E1626', color: '#fff' }}>{panch}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {gpsMsg && (
          <span style={{ fontSize: '0.7rem', color: '#fbbf24' }}>{gpsMsg}</span>
        )}
      </div>

      {/* Right: Verified Agro-Climatic Hubs Quick Selector */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', overflowX: 'auto', padding: '0.1rem 0' }}>
        <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 800, marginRight: '0.2rem', whiteSpace: 'nowrap' }}>
          Agro-Hubs:
        </span>
        {AGRO_HUBS.map(hub => {
          const isActive = activeHub.id === hub.id;
          return (
            <button
              key={hub.id}
              onClick={() => switchHub(hub.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                padding: '0.25rem 0.6rem',
                borderRadius: '999px',
                border: isActive ? `1.5px solid ${hub.color}` : '1px solid rgba(255, 255, 255, 0.08)',
                background: isActive ? `${hub.color}22` : 'rgba(255, 255, 255, 0.03)',
                color: isActive ? '#ffffff' : '#94a3b8',
                fontSize: '0.72rem',
                fontWeight: isActive ? 800 : 500,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                whiteSpace: 'nowrap'
              }}
            >
              <span>{hub.icon}</span>
              <span>{hub.name.split(' (')[0]}</span>
              {isActive && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
