import React, { useState, useMemo } from 'react';
import { useApp } from '../common/AppContext';
import { INDIAN_CROPS_CATALOG, CROP_CATEGORIES } from '../../data/cropsCatalog';
import { 
  Sprout, Award, CheckCircle2, AlertCircle, HelpCircle, 
  Droplets, Thermometer, Calendar, ShieldCheck, ArrowRightLeft, 
  ExternalLink, ChevronDown, ChevronUp, Sparkles, Filter, Search,
  TrendingUp, Layers, Check, X 
} from 'lucide-react';

export const EXCLUDED_CROPS_DIAGNOSTICS = [
  {
    crop: 'Bt Cotton (Commercial Fibre)',
    status: 'Excluded (High Waterlogging Hazard)',
    primary_reason: 'Soil Clay Moisture > 38%',
    explanation: 'Gangetic alluvial deep soils retain high standing moisture under current monsoon anomaly (+14%). Cotton taproots suffer fatal hypoxia if submergence exceeds 36 hours.',
    action: 'Cultivate in well-drained Vertisols or Vidarbha black soils with broad bed furrow drainage.'
  },
  {
    crop: 'Groundnut (Arachis hypogaea)',
    status: 'Excluded (Edaphic Clay Restriction)',
    primary_reason: 'Soil Clay Fraction > 35%',
    explanation: 'Heavy alluvial clay soil hardens upon drying, severely restricting peg penetration and pod development, reducing harvestable yield by over 45%.',
    action: 'Select friable sandy loam or Saurashtra calcic soils for commercial groundnut cultivation.'
  },
  {
    crop: 'Wheat (Triticum aestivum)',
    status: 'Excluded (Thermal Window Mismatch)',
    primary_reason: 'Thermal Window Exceeded (>28°C)',
    explanation: 'Wheat requires vegetative temperatures of 12°C–20°C. High ambient September temperature triggers floral abortion. Sowing window commences late October.',
    action: 'Schedule wheat sowing for November 1–25 during the Rabi cycle.'
  },
  {
    crop: 'Cumin / Jeera (Cuminum cyminum)',
    status: 'Excluded (High Humidity Rot Risk)',
    primary_reason: 'Ambient Relative Humidity > 65%',
    explanation: 'Atmospheric humidity above 65% triggers catastrophic Alternaria blight and Fusarium wilt in cumin. Requires dry, cool desert air of Rajasthan/Gujarat.',
    action: 'Restricted strictly to arid, low-humidity winter zones with light sandy soils.'
  }
];

export default function SmartCropRecommendations() {
  const { activeLocation, telemetry, setActiveTab, t, tr, lang } = useApp();
  
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('All');
  const [isWhyNotOpen, setIsWhyNotOpen] = useState(false);
  const [comparedCrops, setComparedCrops] = useState([INDIAN_CROPS_CATALOG[0], INDIAN_CROPS_CATALOG[1]]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  // Filter crops by category, search text, and season
  const filteredCrops = useMemo(() => {
    return INDIAN_CROPS_CATALOG.filter(c => {
      const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory;
      const matchesSeason = selectedSeason === 'All' || c.season.includes(selectedSeason);
      const matchesSearch = !searchQuery.trim() || 
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.variety.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSeason && matchesSearch;
    });
  }, [selectedCategory, selectedSeason, searchQuery]);

  const toggleCompare = (crop) => {
    if (comparedCrops.some(c => c.id === crop.id)) {
      setComparedCrops(comparedCrops.filter(c => c.id !== crop.id));
    } else {
      if (comparedCrops.length >= 3) {
        setComparedCrops([comparedCrops[1], comparedCrops[2], crop]);
      } else {
        setComparedCrops([...comparedCrops, crop]);
      }
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Header Bar */}
      <div className="glass-card" style={{ 
        padding: '1.4rem 1.6rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexWrap: 'wrap', 
        gap: '1rem',
        background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1) 0%, rgba(14, 22, 38, 0.95) 100%)',
        border: '1px solid var(--border-cyan)'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.35rem' }}>
            <span className="neon-badge neon-badge-emerald">
              <span className="neon-dot neon-dot-emerald"></span>
              <span>ICAR Registry • 42+ Crops</span>
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--neon-cyan)', fontWeight: 700 }}>
              Region: <strong style={{ color: '#fff' }}>{activeLocation.district}, {activeLocation.state}</strong>
            </span>
          </div>
          <h2 style={{ fontSize: '1.45rem', margin: 0, fontFamily: 'var(--font-heading)' }} className="gradient-text-saffron-emerald">
            {tr('Smart Crops & Precision Cultivar Matcher') || 'Smart Crops & Precision Cultivar Matcher'}
          </h2>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', margin: '0.25rem 0 0' }}>
            Multi-factor scoring: Thermal threshold, water requirements, soil texture, duration & MSP profitability.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
          {comparedCrops.length >= 2 && (
            <button 
              onClick={() => setIsCompareModalOpen(true)}
              className="btn btn-primary"
              style={{ fontSize: '0.82rem', gap: '0.4rem' }}
            >
              <ArrowRightLeft className="w-4 h-4" /> 
              {tr('Compare Cultivars')} ({comparedCrops.length})
            </button>
          )}

          <button 
            onClick={() => setIsWhyNotOpen(!isWhyNotOpen)}
            className="btn btn-secondary"
            style={{ 
              fontSize: '0.82rem', 
              borderColor: isWhyNotOpen ? 'var(--neon-rose)' : 'var(--border-cyan)',
              color: isWhyNotOpen ? '#fda4af' : 'var(--text-main)' 
            }}
          >
            <AlertCircle className="w-4 h-4 text-rose-400" /> 
            {tr('"Why Not?" Disqualified Crops')} {isWhyNotOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        </div>
      </div>

      {/* "Why Not?" Excluded Crops Diagnostic Drawer (Collapsible) */}
      {isWhyNotOpen && (
        <div className="glass-card" style={{
          padding: '1.35rem',
          background: 'rgba(244, 63, 94, 0.06)',
          border: '1.5px solid rgba(244, 63, 94, 0.35)',
          borderRadius: '16px',
          animation: 'fadeIn 0.2s ease'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.5rem' }}>
            <AlertCircle className="w-5 h-5 text-rose-400" />
            <h3 style={{ fontSize: '1.05rem', color: '#fda4af', margin: 0 }}>
              {tr('"Why Not?" Excluded Crops & Disqualification Diagnostics')}
            </h3>
          </div>
          <p style={{ fontSize: '0.82rem', color: '#cbd5e1', marginBottom: '1rem', lineHeight: 1.5 }}>
            To safeguard farmer livelihoods, NovaVarsha identifies environmental barriers and explicitly flags mismatched crops before sowing:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '0.85rem' }}>
            {EXCLUDED_CROPS_DIAGNOSTICS.map((c, i) => (
              <div 
                key={i} 
                style={{
                  background: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid rgba(244, 63, 94, 0.25)',
                  borderRadius: '12px',
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.45rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong style={{ fontSize: '0.94rem', color: '#f8fafc' }}>{tr(c.crop)}</strong>
                  <span className="badge badge-rose" style={{ fontSize: '0.66rem' }}>{tr(c.primary_reason)}</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: '1.45', margin: 0 }}>
                  {tr(c.explanation)}
                </p>
                <div style={{ fontSize: '0.74rem', color: '#94a3b8', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.4rem' }}>
                  💡 <strong style={{ color: '#38bdf8' }}>{tr('Scientific Mitigation')}:</strong> {tr(c.action)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SEARCH & CATEGORY FILTER BAR */}
      <div className="glass-card" style={{ padding: '1rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
        
        {/* Top Controls: Search Input + Season Selector */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div style={{ position: 'relative', flex: 1, minWidth: '260px' }}>
            <Search className="w-4 h-4" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
            <input
              type="text"
              placeholder="Search by crop name, ICAR variety, or scientific name (e.g., Swarna, JS-20-34, Wheat)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                padding: '0.55rem 0.85rem 0.55rem 2.4rem',
                color: '#fff',
                fontSize: '0.84rem',
                outline: 'none'
              }}
              onFocus={(e) => e.target.style.borderColor = '#10b981'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
            />
          </div>

          {/* Season Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', background: 'rgba(255, 255, 255, 0.04)', padding: '0.25rem', borderRadius: '10px' }}>
            {['All', 'Kharif', 'Rabi', 'Zaid', 'Perennial'].map(season => (
              <button
                key={season}
                onClick={() => setSelectedSeason(season)}
                style={{
                  padding: '0.3rem 0.65rem',
                  borderRadius: '8px',
                  fontSize: '0.74rem',
                  fontWeight: selectedSeason === season ? 800 : 500,
                  background: selectedSeason === season ? 'rgba(16, 185, 129, 0.25)' : 'transparent',
                  color: selectedSeason === season ? '#34d399' : '#94a3b8',
                  border: selectedSeason === season ? '1px solid rgba(16, 185, 129, 0.4)' : 'none',
                  cursor: 'pointer'
                }}
              >
                {season}
              </button>
            ))}
          </div>

          <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontWeight: 600 }}>
            Showing <strong style={{ color: '#38bdf8' }}>{filteredCrops.length}</strong> of {INDIAN_CROPS_CATALOG.length} crops
          </span>
        </div>

        {/* Categories Chips */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', overflowX: 'auto', paddingBottom: '0.2rem', scrollbarWidth: 'none' }}>
          {CROP_CATEGORIES.map(cat => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.3rem 0.75rem',
                  borderRadius: '999px',
                  fontSize: '0.74rem',
                  fontWeight: isSelected ? 800 : 500,
                  background: isSelected ? 'linear-gradient(135deg, #059669 0%, #0284c7 100%)' : 'rgba(255, 255, 255, 0.05)',
                  color: isSelected ? '#ffffff' : '#cbd5e1',
                  border: isSelected ? '1px solid #34d399' : '1px solid rgba(255, 255, 255, 0.08)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.15s'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

      </div>

      {/* 42+ REAL CROPS CARDS GRID */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '1.25rem' }}>
        {filteredCrops.map(crop => {
          const isCompared = comparedCrops.some(c => c.id === crop.id);
          const scoreColor = crop.suitability >= 92 ? '#34d399' : crop.suitability >= 88 ? '#38bdf8' : '#fbbf24';

          return (
            <div 
              key={crop.id} 
              className="glass-card" 
              style={{ 
                padding: '1.4rem', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                border: isCompared ? '2px solid #38bdf8' : '1px solid var(--border-subtle)',
                position: 'relative'
              }}
            >
              <div>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <span style={{ fontSize: '1.8rem', lineHeight: 1 }}>{crop.icon}</span>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.15rem' }}>
                        <span className="badge badge-emerald" style={{ fontSize: '0.65rem' }}>{tr(crop.category)}</span>
                        <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>{tr(crop.season)}</span>
                      </div>
                      <h3 style={{ fontSize: '1.15rem', color: '#fff', margin: 0, fontWeight: 800 }}>
                        {tr(crop.name)}
                      </h3>
                      <div style={{ fontSize: '0.82rem', color: '#38bdf8', fontWeight: 700 }}>
                        {tr(crop.variety)}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#94a3b8', fontStyle: 'italic' }}>
                        {crop.scientificName}
                      </div>
                    </div>
                  </div>

                  {/* Suitability Score */}
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 900, color: scoreColor, lineHeight: 1 }}>
                      {crop.suitability}%
                    </div>
                    <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {tr('Suitability Score')}
                    </div>
                  </div>
                </div>

                {/* Agronomic specs grid */}
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(2, 1fr)', 
                  gap: '0.45rem', 
                  background: 'rgba(255, 255, 255, 0.03)', 
                  padding: '0.65rem', 
                  borderRadius: '10px', 
                  fontSize: '0.75rem',
                  margin: '0.75rem 0'
                }}>
                  <div>
                    <span style={{ color: '#94a3b8', fontSize: '0.68rem', display: 'block' }}>{tr('Duration')}</span>
                    <strong style={{ color: '#f8fafc' }}>{crop.durationDays} {tr('Days')}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#94a3b8', fontSize: '0.68rem', display: 'block' }}>{tr('Water Requirement')}</span>
                    <strong style={{ color: '#38bdf8' }}>{crop.waterNeedMm}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#94a3b8', fontSize: '0.68rem', display: 'block' }}>{tr('Sowing Window')}</span>
                    <strong style={{ color: '#34d399' }}>{tr(crop.sowingWindow)}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#94a3b8', fontSize: '0.68rem', display: 'block' }}>{tr('Govt. MSP Rate')}</span>
                    <strong style={{ color: '#fbbf24' }}>{crop.mspPerQuintal}</strong>
                  </div>
                </div>

                {/* Soil & Stress tolerance note */}
                <p style={{ fontSize: '0.78rem', color: '#cbd5e1', lineHeight: '1.45', margin: '0.5rem 0' }}>
                  <strong>{tr('Soil')}:</strong> {tr(crop.soilMatch)} • {tr(crop.stressTolerance)}
                </p>

                {/* Source citation */}
                <div style={{ fontSize: '0.7rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.85rem' }}>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{crop.source}</span>
                </div>
              </div>

              {/* Bottom Actions */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.75rem' }}>
                <button
                  onClick={() => toggleCompare(crop)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    background: isCompared ? 'rgba(56, 189, 248, 0.2)' : 'transparent',
                    border: isCompared ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '0.35rem 0.65rem',
                    fontSize: '0.74rem',
                    color: isCompared ? '#38bdf8' : '#94a3b8',
                    cursor: 'pointer'
                  }}
                >
                  {isCompared ? <Check className="w-3 h-3" /> : <ArrowRightLeft className="w-3 h-3" />}
                  <span>{isCompared ? 'Compared' : 'Add to Compare'}</span>
                </button>

                <button
                  onClick={() => setActiveTab('scenario')}
                  className="btn btn-primary"
                  style={{ fontSize: '0.74rem', padding: '0.35rem 0.75rem' }}
                >
                  <Sparkles className="w-3 h-3" /> Simulate Crop
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* MULTI-CULTIVAR COMPARISON MODAL */}
      {isCompareModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsCompareModalOpen(false)}>
          <div className="modal-content" style={{ maxWidth: '880px' }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: '#fff', margin: 0, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ArrowRightLeft className="w-5 h-5 text-sky-400" />
                  Side-by-Side Cultivar Comparison
                </h3>
                <p style={{ fontSize: '0.78rem', color: '#94a3b8', margin: '0.2rem 0 0' }}>
                  Comparing {comparedCrops.length} selected ICAR varieties on regional climate compatibility
                </p>
              </div>
              <button onClick={() => setIsCompareModalOpen(false)} style={{ background: 'transparent', border: 'none', color: '#94a3b8', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${comparedCrops.length}, 1fr)`, gap: '1rem' }}>
              {comparedCrops.map(crop => (
                <div key={crop.id} style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.09)' }}>
                  <div style={{ fontSize: '1.6rem', marginBottom: '0.25rem' }}>{crop.icon}</div>
                  <strong style={{ color: '#fff', fontSize: '1rem', display: 'block' }}>{crop.name}</strong>
                  <span style={{ fontSize: '0.8rem', color: '#38bdf8', fontWeight: 700 }}>{crop.variety}</span>

                  <div style={{ margin: '0.75rem 0', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.78rem' }}>
                    <div><strong>Suitability:</strong> <span style={{ color: '#34d399' }}>{crop.suitability}%</span></div>
                    <div><strong>Duration:</strong> {crop.durationDays} Days</div>
                    <div><strong>Water Need:</strong> {crop.waterNeedMm}</div>
                    <div><strong>Sowing:</strong> {crop.sowingWindow}</div>
                    <div><strong>Yield:</strong> {crop.yieldPotential}</div>
                    <div><strong>Price / MSP:</strong> {crop.mspPerQuintal}</div>
                    <div><strong>Soil:</strong> {crop.soilMatch}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
