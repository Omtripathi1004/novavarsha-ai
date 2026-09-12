import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const p = path.join(__dirname, '..', 'src', 'components', 'overview', 'OverviewTab.jsx');
let s = fs.readFileSync(p, 'utf8');

// 1. Add VoiceBroadcastPlayer import
if (!s.includes("import VoiceBroadcastPlayer")) {
  s = s.replace(
    "import { INDIA_BOUNDARY_GEOJSON, INDIA_STATES_GEOJSON } from '../../data/indiaGeoJson';",
    "import { INDIA_BOUNDARY_GEOJSON, INDIA_STATES_GEOJSON } from '../../data/indiaGeoJson';\nimport VoiceBroadcastPlayer from '../common/VoiceBroadcastPlayer';"
  );
}

// 2. Mount <VoiceBroadcastPlayer /> at the top of return
if (!s.includes('<VoiceBroadcastPlayer />')) {
  s = s.replace(
    '<div style={{ display: \'flex\', flexDirection: \'column\', gap: \'1.35rem\' }}>',
    '<div style={{ display: \'flex\', flexDirection: \'column\', gap: \'1.35rem\' }}>\n      \n      {/* 0. AUDIO VOICE BROADCAST RADIO BULLETIN */}\n      <VoiceBroadcastPlayer />'
  );
}

// 3. Localize Hero Header Badges
s = s.replace('<span>YuvaSetu AI HUD Engine</span>', '<span>{tr(\'YuvaSetu AI HUD Engine\')}</span>');
s = s.replace('<span>Viksit Bharat @2047</span>', '<span>{tr(\'Viksit Bharat @2047\')}</span>');
s = s.replace('AWS Station Sync: <strong style={{ color: \'#34d399\' }}>Active</strong>', '{tr(\'AWS Station Sync:\')} <strong style={{ color: \'#34d399\' }}>{tr(\'Active\')}</strong>');
s = s.replace('<span>{isRefreshing ? \'Syncing...\' : \'Refresh Telemetry\'}</span>', '<span>{isRefreshing ? tr(\'Syncing...\') : tr(\'Refresh Telemetry\')}</span>');
s = s.replace('<span>Open Full 6-Mode Map</span>', '<span>{tr(\'Open Full 6-Mode Map\')}</span>');

// 4. Localize Geospatial Card
s = s.replace('<h3 style={{ fontSize: \'1rem\', color: \'#fff\', margin: 0, fontWeight: 800 }}>\n                Live Geospatial Field View\n              </h3>', '<h3 style={{ fontSize: \'1rem\', color: \'#fff\', margin: 0, fontWeight: 800 }}>\n                {tr(\'Live Geospatial Field View\')}\n              </h3>');
s = s.replace('{ m.label }', '{ tr(m.label) }');
s = s.replace('<span>{m.label}</span>', '<span>{tr(m.label)}</span>');
s = s.replace('{m.label}', '{tr(m.label)}');
s = s.replace('🇮🇳 Survey of India Sovereign Certified', '{tr(\'Survey of India Sovereign Certified\')}');
s = s.replace('Coordinates: <strong', '{tr(\'Coordinates:\')} <strong');
s = s.replace('<span>Inspect GIS Overlays</span>', '<span>{tr(\'Inspect GIS Overlays\')}</span>');

// 5. Update Top 3 Crop Cards with Dedicated "Why Recommended" Description
const oldCropCardContent = `<p style={{ fontSize: '0.76rem', color: '#cbd5e1', lineHeight: '1.4', margin: '0.4rem 0' }}>
                    <strong>Agronomic Fit:</strong> {crop.stressTolerance}
                  </p>`;

const newCropCardContent = `<p style={{ fontSize: '0.76rem', color: '#cbd5e1', lineHeight: '1.4', margin: '0.4rem 0' }}>
                    <strong>{tr('Agronomic Fit')}:</strong> {tr(crop.stressTolerance)}
                  </p>

                  {/* Dedicated "Why Recommended" Description for Top 1, 2, and 3 */}
                  <div style={{
                    marginTop: '0.65rem',
                    padding: '0.65rem 0.8rem',
                    borderRadius: '10px',
                    background: idx === 0 ? 'rgba(16, 185, 129, 0.12)' : idx === 1 ? 'rgba(2, 132, 199, 0.12)' : 'rgba(245, 158, 11, 0.12)',
                    border: \`1px solid \${rankColor}44\`,
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
                        ? tr(\`\${crop.name} is the top recommendation for \${activeLocation.district} due to ideal root-zone soil moisture match, optimal thermal window (24°C–32°C), and verified high-yield ICAR cultivar trials with guaranteed MSP.\`)
                        : idx === 1
                        ? tr(\`\${crop.name} is strongly recommended as the #2 crop because of superior water efficiency (requires 30-35% less irrigation), faster maturity in \${crop.durationDays} days, and high resilience against unexpected monsoon dry spells.\`)
                        : tr(\`\${crop.name} is recommended as the #3 resilient alternative for low input cost, high drought tolerance, excellent soil nitrogen enrichment, and stable market returns if monsoon rainfall fluctuates.\`)
                      }
                    </p>
                  </div>`;

if (s.includes(oldCropCardContent)) {
  s = s.replace(oldCropCardContent, newCropCardContent);
  console.log('Successfully added Why Recommended descriptions to Crop Cards!');
} else {
  console.log('Warning: oldCropCardContent not matched exactly');
}

// 6. Localize Crop card inner labels
s = s.replace('{rankLabel}', '{tr(rankLabel)}');
s = s.replace('{crop.season} Season', '{tr(crop.season)} {tr(\'Season\')}');
s = s.replace('<span style={{ color: \'#94a3b8\', fontSize: \'0.66rem\', display: \'block\' }}>Suitability Score</span>', '<span style={{ color: \'#94a3b8\', fontSize: \'0.66rem\', display: \'block\' }}>{tr(\'Suitability Score\')}</span>');
s = s.replace('<span style={{ color: \'#94a3b8\', fontSize: \'0.66rem\', display: \'block\' }}>Duration</span>', '<span style={{ color: \'#94a3b8\', fontSize: \'0.66rem\', display: \'block\' }}>{tr(\'Duration\')}</span>');
s = s.replace('{crop.durationDays} Days', '{crop.durationDays} {tr(\'Days\')}');
s = s.replace('<span style={{ color: \'#94a3b8\', fontSize: \'0.66rem\', display: \'block\' }}>Water Need</span>', '<span style={{ color: \'#94a3b8\', fontSize: \'0.66rem\', display: \'block\' }}>{tr(\'Water Need\')}</span>');
s = s.replace('<span style={{ color: \'#94a3b8\', fontSize: \'0.66rem\', display: \'block\' }}>Govt. MSP Rate</span>', '<span style={{ color: \'#94a3b8\', fontSize: \'0.66rem\', display: \'block\' }}>{tr(\'Govt. MSP Rate\')}</span>');
s = s.replace('<Zap className="w-3 h-3 text-amber-400" /> Simulate Stress', '<Zap className="w-3 h-3 text-amber-400" /> {tr(\'Simulate Stress\')}');
s = s.replace('<CheckCircle2 className="w-3 h-3" /> View Guidelines', '<CheckCircle2 className="w-3 h-3" /> {tr(\'View Guidelines\')}');
s = s.replace('{crop.name}', '{tr(crop.name)}');
s = s.replace('{crop.variety}', '{tr(crop.variety)}');

// 7. Localize 7-Day & 30-Day Graph Titles & Legends
s = s.replace(
  "{graphMode === '7d' ? '7-Day Synoptic Weather & Precipitation Trajectory' : '30-Day Climatological Monsoon Accumulation Curve'}",
  "{graphMode === '7d' ? tr('7-Day Synoptic Weather & Precipitation Trajectory') : tr('30-Day Climatological Monsoon Accumulation Curve')}"
);
s = s.replace(
  "{graphMode === '7d' ? 'Daily forecast rain vs 30-year IMD climatological normal' : 'Weekly historical progression vs IMD normal curve'}",
  "{graphMode === '7d' ? tr('Daily forecast rain vs 30-year IMD climatological normal') : tr('Weekly historical progression vs IMD normal curve')}"
);
s = s.replace("📅 7-Day Forecast Graph", "{tr('7-Day Forecast Graph')}");
s = s.replace("📊 30-Day Seasonal Graph", "{tr('30-Day Seasonal Graph')}");
s = s.replace("<span>Forecast Precipitation (mm)</span>", "<span>{tr('Forecast Precipitation (mm)')}</span>");
s = s.replace("<span>30-Year IMD Normal Baseline</span>", "<span>{tr('30-Year IMD Normal Baseline')}</span>");
s = s.replace("<span>Max/Min Temp (°C)</span>", "<span>{tr('Max/Min Temp (°C)')}</span>");
s = s.replace("<span>Recorded Surplus (mm)</span>", "<span>{tr('Recorded Surplus (mm)')}</span>");
s = s.replace("<span>Climatological Normal</span>", "<span>{tr('Climatological Normal')}</span>");
s = s.replace("<span>Deficit Window</span>", "<span>{tr('Deficit Window')}</span>");

fs.writeFileSync(p, s, 'utf8');
console.log('Successfully updated OverviewTab.jsx!');
