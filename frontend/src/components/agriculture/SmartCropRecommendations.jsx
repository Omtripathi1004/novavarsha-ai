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
      {/* Header Bar with Chromatic Contrast and Multi-Font Typography */}
      <div className="glass-card" style={{ 
        padding: '1.4rem 1.6rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexWrap: 'wrap', 
        gap: '1rem',
        background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.08) 0%, rgba(24, 58, 45, 0.95) 50%, rgba(251, 113, 133, 0.06) 100%)',
        border: '1.5px solid rgba(56, 189, 248, 0.25)',
        boxShadow: '0 12px 35px rgba(0,0,0,0.5)'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.45rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', fontWeight: 800, color: '#38BDF8', background: 'rgba(56, 189, 248, 0.12)', border: '1px solid rgba(56, 189, 248, 0.35)', borderRadius: '999px', padding: '0.2rem 0.65rem', fontFamily: 'var(--font-display)' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#38BDF8', display: 'inline-block', boxShadow: '0 0 8px #38BDF8' }}></span>
              ICAR Registry • 42+ Crops
            </span>
            <span style={{ fontSize: '0.75rem', color: '#B9C6BB', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              <span style={{ color: '#FB7185' }}>📍</span> Region: <strong style={{ color: '#F7F1E3', fontFamily: 'var(--font-sora)' }}>{activeLocation.district}, {activeLocation.state}</strong>
            </span>
          </div>

          {/* Multi-font & Multi-color Heading to show maximum contrast */}
          <h2 style={{ fontSize: '1.6rem', margin: 0, letterSpacing: '-0.02em', display: 'flex', alignItems: 'baseline', gap: '0.45rem', flexWrap: 'wrap' }}>
            <span style={{ color: '#38BDF8', fontFamily: 'var(--font-display)', fontWeight: 900 }}>
              Smart Crops
            </span>
            <span style={{ color: '#7D8D81', fontWeight: 300, fontSize: '1.2rem' }}>&</span>
            <span style={{ background: 'linear-gradient(135deg, #FB7185 0%, #FB923C 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontFamily: 'var(--font-sora)', fontWeight: 800 }}>
              Precision Cultivar Matcher
            </span>
          </h2>

          <p style={{ fontSize: '0.84rem', color: '#B9C6BB', margin: '0.35rem 0 0', lineHeight: 1.4 }}>
            Multi-factor scoring: <strong style={{ color: '#FB7185' }}>Thermal threshold</strong>, <strong style={{ color: '#38BDF8' }}>Water requirement</strong>, <strong style={{ color: '#FB923C' }}>Soil texture</strong>, <strong style={{ color: '#84CC16' }}>Duration</strong> & <strong style={{ color: '#FBBF24' }}>MSP profitability</strong>.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
          {comparedCrops.length >= 2 && (
            <button 
              onClick={() => setIsCompareModalOpen(true)}
              className="btn"
              style={{ fontSize: '0.82rem', gap: '0.4rem', background: 'linear-gradient(135deg, #FB923C 0%, #E11D48 100%)', border: 'none', color: '#FFFFFF', fontWeight: 800, boxShadow: '0 4px 15px rgba(251, 146, 60, 0.4)' }}
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
              borderColor: isWhyNotOpen ? '#FB7185' : 'rgba(251, 113, 133, 0.35)',
              color: isWhyNotOpen ? '#FB7185' : '#FB7185',
              background: 'rgba(251, 113, 133, 0.12)'
            }}
          >
            <AlertCircle className="w-4 h-4" style={{ color: '#FB7185' }} /> 
            {tr('"Why Not?" Disqualified Crops')} {isWhyNotOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        </div>
      </div>

      {/* "Why Not?" Excluded Crops Diagnostic Drawer (Collapsible) */}
      {isWhyNotOpen && (
        <div className="glass-card" style={{
          padding: '1.35rem',
          background: 'rgba(201, 90, 74, 0.07)',
          border: '1.5px solid rgba(201, 90, 74, 0.35)',
          borderRadius: '16px',
          animation: 'fadeIn 0.2s ease'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.5rem' }}>
            <AlertCircle className="w-5 h-5" style={{ color: '#C95A4A' }} />
            <h3 style={{ fontSize: '1.05rem', color: '#C95A4A', margin: 0 }}>
              {tr('"Why Not?" Excluded Crops & Disqualification Diagnostics')}
            </h3>
          </div>
          <p style={{ fontSize: '0.82rem', color: '#B9C6BB', marginBottom: '1rem', lineHeight: 1.5 }}>
            To safeguard farmer livelihoods, NovaVarsha identifies environmental barriers and explicitly flags mismatched crops before sowing:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.85rem' }}>
            {EXCLUDED_CROPS_DIAGNOSTICS.map((c, i) => (
              <div 
                key={i} 
                style={{
                  background: 'rgba(16, 37, 30, 0.92)',
                  border: '1px solid rgba(201, 90, 74, 0.28)',
                  borderRadius: '12px',
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.45rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong style={{ fontSize: '0.94rem', color: '#F7F1E3' }}>{tr(c.crop)}</strong>
                  <span style={{ fontSize: '0.66rem', fontWeight: 700, color: '#C95A4A', background: 'rgba(201, 90, 74, 0.15)', border: '1px solid rgba(201, 90, 74, 0.35)', borderRadius: '999px', padding: '0.15rem 0.5rem' }}>{tr(c.primary_reason)}</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: '#B9C6BB', lineHeight: '1.45', margin: 0 }}>
                  {tr(c.explanation)}
                </p>
                <div style={{ fontSize: '0.74rem', color: '#7D8D81', borderTop: '1px solid rgba(89, 199, 177, 0.08)', paddingTop: '0.4rem' }}>
                  💡 <strong style={{ color: '#59C7B1' }}>{tr('Scientific Mitigation')}:</strong> {tr(c.action)}
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
              onFocus={(e) => e.target.style.borderColor = '#1E8A78'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(89, 199, 177, 0.15)'}
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
                  background: selectedSeason === season ? 'rgba(30, 138, 120, 0.25)' : 'transparent',
                  color: selectedSeason === season ? '#59C7B1' : '#7D8D81',
                  border: selectedSeason === season ? '1px solid rgba(89, 199, 177, 0.4)' : 'none',
                  cursor: 'pointer'
                }}
              >
                {season}
              </button>
            ))}
          </div>

          <span style={{ fontSize: '0.78rem', color: '#7D8D81', fontWeight: 600 }}>
            Showing <strong style={{ color: '#E2A83B' }}>{filteredCrops.length}</strong> of {INDIAN_CROPS_CATALOG.length} crops
          </span>
        </div>

        {/* Categories Chips with Diverse Chromatic Accents */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', overflowX: 'auto', paddingBottom: '0.2rem', scrollbarWidth: 'none' }}>
          {CROP_CATEGORIES.map((cat, idx) => {
            const isSelected = selectedCategory === cat;
            const categoryColors = ['#38BDF8', '#FB923C', '#FBBF24', '#FB7185', '#84CC16', '#818CF8'];
            const chipColor = categoryColors[idx % categoryColors.length];
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.35rem 0.85rem',
                  borderRadius: '999px',
                  fontSize: '0.74rem',
                  fontWeight: isSelected ? 800 : 600,
                  fontFamily: 'var(--font-display)',
                  background: isSelected ? `linear-gradient(135deg, ${chipColor} 0%, rgba(24, 58, 45, 0.9) 100%)` : 'rgba(24, 58, 45, 0.6)',
                  color: isSelected ? '#FFFFFF' : '#B9C6BB',
                  border: isSelected ? `1.5px solid ${chipColor}` : '1px solid rgba(89, 199, 177, 0.15)',
                  boxShadow: isSelected ? `0 4px 14px ${chipColor}55` : 'none',
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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
        {filteredCrops.map((crop, index) => {
          const isCompared = comparedCrops.some(c => c.id === crop.id);
          const scoreColor = crop.suitability >= 92 ? '#84CC16' : crop.suitability >= 88 ? '#FBBF24' : '#FB923C';
          const cardAccents = ['#38BDF8', '#FB7185', '#FB923C', '#84CC16', '#818CF8', '#FBBF24'];
          const accentColor = cardAccents[index % cardAccents.length];

          return (
            <div 
              key={crop.id} 
              className="glass-card" 
              style={{ 
                padding: '1.4rem', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                border: isCompared ? '2px solid #FB923C' : `1.5px solid ${accentColor}33`,
                boxShadow: isCompared ? '0 8px 30px rgba(251, 146, 60, 0.25)' : '0 8px 24px rgba(0,0,0,0.3)',
                position: 'relative'
              }}
            >
              <div>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <span style={{ fontSize: '2rem', lineHeight: 1 }}>{crop.icon}</span>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.15rem' }}>
                        <span style={{ 
                          fontSize: '0.66rem', 
                          fontWeight: 800, 
                          color: accentColor, 
                          background: `${accentColor}18`, 
                          border: `1px solid ${accentColor}44`, 
                          borderRadius: '999px', 
                          padding: '0.15rem 0.55rem',
                          fontFamily: 'var(--font-display)' 
                        }}>
                          {tr(crop.category)}
                        </span>
                        <span style={{ fontSize: '0.72rem', color: '#B9C6BB', fontWeight: 600 }}>
                          {tr(crop.season)}
                        </span>
                      </div>
                      <h3 style={{ fontSize: '1.2rem', color: '#F7F1E3', margin: 0, fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                        {tr(crop.name)}
                      </h3>
                      <div style={{ fontSize: '0.84rem', color: '#84CC16', fontWeight: 700, fontFamily: 'var(--font-sora)' }}>
                        {tr(crop.variety)}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#7D8D81', fontStyle: 'italic' }}>
                        {crop.scientificName}
                      </div>
                    </div>
                  </div>

                  {/* Suitability Score */}
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ 
                      fontSize: '2.1rem', 
                      fontWeight: 900, 
                      color: scoreColor, 
                      lineHeight: 1, 
                      fontFamily: 'var(--font-heading)',
                      textShadow: `0 0 16px ${scoreColor}55` 
                    }}>
                      {crop.suitability}%
                    </div>
                    <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 700 }}>
                      {tr('Suitability Score')}
                    </div>
                  </div>
                </div>

                {/* Agronomic specs grid with high contrast multi-color tokens */}
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(2, 1fr)', 
                  gap: '0.5rem', 
                  background: 'rgba(16, 37, 30, 0.75)', 
                  padding: '0.75rem', 
                  borderRadius: '12px', 
                  fontSize: '0.76rem',
                  margin: '0.85rem 0',
                  border: '1px solid rgba(255, 255, 255, 0.06)'
                }}>
                  <div style={{ background: 'rgba(56, 189, 248, 0.08)', padding: '0.45rem', borderRadius: '8px', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                    <span style={{ color: '#94A3B8', fontSize: '0.68rem', display: 'block', fontWeight: 600 }}>{tr('Duration')}</span>
                    <strong style={{ color: '#38BDF8', fontFamily: 'var(--font-display)', fontWeight: 800 }}>{crop.durationDays} {tr('Days')}</strong>
                  </div>
                  <div style={{ background: 'rgba(6, 182, 212, 0.08)', padding: '0.45rem', borderRadius: '8px', border: '1px solid rgba(6, 182, 212, 0.2)' }}>
                    <span style={{ color: '#94A3B8', fontSize: '0.68rem', display: 'block', fontWeight: 600 }}>{tr('Water Need')}</span>
                    <strong style={{ color: '#06B6D4', fontFamily: 'var(--font-display)', fontWeight: 800 }}>{crop.waterNeedMm}</strong>
                  </div>
                  <div style={{ background: 'rgba(251, 113, 133, 0.08)', padding: '0.45rem', borderRadius: '8px', border: '1px solid rgba(251, 113, 133, 0.2)' }}>
                    <span style={{ color: '#94A3B8', fontSize: '0.68rem', display: 'block', fontWeight: 600 }}>{tr('Sowing Window')}</span>
                    <strong style={{ color: '#FB7185', fontFamily: 'var(--font-display)', fontWeight: 800 }}>{tr(crop.sowingWindow)}</strong>
                  </div>
                  <div style={{ background: 'rgba(251, 191, 36, 0.08)', padding: '0.45rem', borderRadius: '8px', border: '1px solid rgba(251, 191, 36, 0.2)' }}>
                    <span style={{ color: '#94A3B8', fontSize: '0.68rem', display: 'block', fontWeight: 600 }}>{tr('Govt. MSP Rate')}</span>
                    <strong style={{ color: '#FBBF24', fontFamily: 'var(--font-display)', fontWeight: 800 }}>{crop.mspPerQuintal}</strong>
                  </div>
                </div>

                {/* Soil & Stress tolerance note with contrasting badges */}
                <p style={{ fontSize: '0.78rem', color: '#B9C6BB', lineHeight: '1.45', margin: '0.55rem 0' }}>
                  <strong style={{ color: '#FB923C' }}>{tr('Soil')}:</strong> {tr(crop.soilMatch)} • <span style={{ color: '#818CF8', fontWeight: 600 }}>{tr(crop.stressTolerance)}</span>
                </p>

                {/* Source citation */}
                <div style={{ fontSize: '0.7rem', color: '#7D8D81', display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.85rem' }}>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{crop.source}</span>
                </div>
              </div>

              {/* Bottom Actions with vibrant buttons */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '0.75rem', gap: '0.5rem' }}>
                <button
                  onClick={() => toggleCompare(crop)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    background: isCompared ? 'rgba(251, 146, 60, 0.2)' : 'rgba(24, 58, 45, 0.6)',
                    border: isCompared ? '1.5px solid #FB923C' : '1px solid rgba(89, 199, 177, 0.25)',
                    borderRadius: '8px',
                    padding: '0.4rem 0.75rem',
                    fontSize: '0.74rem',
                    color: isCompared ? '#FB923C' : '#B9C6BB',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  {isCompared ? <Check className="w-3.5 h-3.5 text-orange-400" /> : <ArrowRightLeft className="w-3.5 h-3.5" />}
                  <span>{isCompared ? 'Compared' : 'Add to Compare'}</span>
                </button>

                <button
                  onClick={() => setActiveTab('scenario')}
                  className="btn"
                  style={{ 
                    fontSize: '0.76rem', 
                    padding: '0.4rem 0.85rem', 
                    background: 'linear-gradient(135deg, #818CF8 0%, #38BDF8 100%)', 
                    border: 'none', 
                    color: '#FFFFFF', 
                    fontWeight: 800,
                    boxShadow: '0 4px 14px rgba(129, 140, 248, 0.4)'
                  }}
                >
                  <Sparkles className="w-3.5 h-3.5" /> Simulate Crop
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
                <h3 style={{ fontSize: '1.25rem', color: '#F7F1E3', margin: 0, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ArrowRightLeft className="w-5 h-5" style={{ color: '#59C7B1' }} />
                  Side-by-Side Cultivar Comparison
                </h3>
                <p style={{ fontSize: '0.78rem', color: '#B9C6BB', margin: '0.2rem 0 0' }}>
                  Comparing {comparedCrops.length} selected ICAR varieties on regional climate compatibility
                </p>
              </div>
              <button onClick={() => setIsCompareModalOpen(false)} style={{ background: 'transparent', border: 'none', color: '#94a3b8', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${comparedCrops.length}, 1fr)`, gap: '1rem' }}>
              {comparedCrops.map(crop => (
                <div key={crop.id} style={{ background: 'rgba(24, 58, 45, 0.7)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(89, 199, 177, 0.18)' }}>
                  <div style={{ fontSize: '1.6rem', marginBottom: '0.25rem' }}>{crop.icon}</div>
                  <strong style={{ color: '#F7F1E3', fontSize: '1rem', display: 'block' }}>{crop.name}</strong>
                  <span style={{ fontSize: '0.8rem', color: '#59C7B1', fontWeight: 700 }}>{crop.variety}</span>

                  <div style={{ margin: '0.75rem 0', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.78rem', color: '#B9C6BB' }}>
                    <div><strong style={{ color: '#F7F1E3' }}>Suitability:</strong> <span style={{ color: '#E2A83B' }}>{crop.suitability}%</span></div>
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
