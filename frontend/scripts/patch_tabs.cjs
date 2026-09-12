const fs = require('fs');
const path = require('path');

// ── 1. PATCH ScenarioLabTab.jsx ──
const scenarioPath = path.resolve(__dirname, '../src/components/scenario/ScenarioLabTab.jsx');
let scenarioCode = fs.readFileSync(scenarioPath, 'utf8');

// Replace situational presets rendering
scenarioCode = scenarioCode.replace(
  `{preset.name}`,
  `{tr(preset.name)}`
);
scenarioCode = scenarioCode.replace(
  `{preset.desc}`,
  `{tr(preset.desc)}`
);
scenarioCode = scenarioCode.replace(
  `🚨 Quick-Load Situational Stress Presets:`,
  `🚨 {tr('Quick-Load Situational Stress Presets:')}`
);
scenarioCode = scenarioCode.replace(
  `Adjust Environmental Parameters`,
  `{tr('Adjust Environmental Parameters')}`
);
scenarioCode = scenarioCode.replace(
  `<Droplets className="w-3.5 h-3.5 text-sky-400" /> Monsoon Rainfall Deviation:`,
  `<Droplets className="w-3.5 h-3.5 text-sky-400" /> {tr('Monsoon Rainfall Deviation:')}`
);
scenarioCode = scenarioCode.replace(
  `<Thermometer className="w-3.5 h-3.5 text-amber-400" /> Ambient Temperature Offset:`,
  `<Thermometer className="w-3.5 h-3.5 text-amber-400" /> {tr('Ambient Temperature Offset:')}`
);
scenarioCode = scenarioCode.replace(
  `<Calendar className="w-3.5 h-3.5 text-emerald-400" /> Sowing Date Delay / Advance:`,
  `<Calendar className="w-3.5 h-3.5 text-emerald-400" /> {tr('Planned Sowing Window Shift:')}`
);
scenarioCode = scenarioCode.replace(
  `Farm Irrigation Buffer:`,
  `{tr('Irrigation & Water Management:')}`
);
scenarioCode = scenarioCode.replace(
  `<option value="Canal Irrigation" style={{ background: '#0b1120' }}>Canal Irrigation (Moderate Buffer)</option>`,
  `<option value="Canal Irrigation" style={{ background: '#0b1120' }}>{tr('Canal Irrigation')}</option>`
);
scenarioCode = scenarioCode.replace(
  `<option value="Drip Irrigation" style={{ background: '#0b1120' }}>Drip / Micro-Irrigation (Maximum 85% Buffer)</option>`,
  `<option value="Drip Irrigation" style={{ background: '#0b1120' }}>{tr('Drip Irrigation')}</option>`
);
scenarioCode = scenarioCode.replace(
  `<option value="Tube-well / Borewell" style={{ background: '#0b1120' }}>Tube-well / Deep Borewell (65% Buffer)</option>`,
  `<option value="Tube-well / Borewell" style={{ background: '#0b1120' }}>{tr('Tube-well / Borewell')}</option>`
);
scenarioCode = scenarioCode.replace(
  `<option value="Rainfed / Natural Only" style={{ background: '#0b1120' }}>Rainfed Only (Zero Buffer - High Vulnerability)</option>`,
  `<option value="Rainfed / Natural Only" style={{ background: '#0b1120' }}>{tr('Rainfed / Natural Only')}</option>`
);
scenarioCode = scenarioCode.replace(
  `Projected Crop Suitability Impact`,
  `{tr('Projected Crop Suitability Impact') || tr('Simulated Impact Analysis')}`
);
scenarioCode = scenarioCode.replace(
  `<span style={{ fontSize: '0.76rem', color: '#94a3b8', display: 'block' }}>Predicted Suitability</span>`,
  `<span style={{ fontSize: '0.76rem', color: '#94a3b8', display: 'block' }}>{tr('Predicted Suitability')}</span>`
);
scenarioCode = scenarioCode.replace(
  `<span style={{ fontSize: '0.76rem', color: '#94a3b8', display: 'block' }}>Delta vs Baseline</span>`,
  `<span style={{ fontSize: '0.76rem', color: '#94a3b8', display: 'block' }}>{tr('Delta vs Baseline') || 'Delta'}</span>`
);
scenarioCode = scenarioCode.replace(
  `<span style={{ fontSize: '0.7rem', color: '#94a3b8', display: 'block' }}>Harvest Yield Expectancy</span>`,
  `<span style={{ fontSize: '0.7rem', color: '#94a3b8', display: 'block' }}>{tr('Harvest Yield Expectancy') || tr('Yield Potential Projection')}</span>`
);
scenarioCode = scenarioCode.replace(
  `<span style={{ fontSize: '0.7rem', color: '#94a3b8', display: 'block' }}>Estimated Financial Risk</span>`,
  `<span style={{ fontSize: '0.7rem', color: '#94a3b8', display: 'block' }}>{tr('Estimated Financial Risk') || tr('Estimated Financial Impact (₹/Acre)')}</span>`
);
scenarioCode = scenarioCode.replace(
  `Deduction Breakdown:`,
  `{tr('Deduction Breakdown:') || tr('Multi-Factor Stress Breakdown')}`
);
scenarioCode = scenarioCode.replace(
  `<span style={{ color: '#cbd5e1' }}>🌡️ Thermal Stress Penalty</span>`,
  `<span style={{ color: '#cbd5e1' }}>🌡️ {tr('Thermal Stress')}</span>`
);
scenarioCode = scenarioCode.replace(
  `<span style={{ color: '#cbd5e1' }}>💧 Water Deficit / Excess Penalty</span>`,
  `<span style={{ color: '#cbd5e1' }}>💧 {tr('Water Stress')}</span>`
);
scenarioCode = scenarioCode.replace(
  `<span style={{ color: '#cbd5e1' }}>📅 Sowing Window Delay Penalty</span>`,
  `<span style={{ color: '#cbd5e1' }}>📅 {tr('Planned Sowing Window Shift:')}</span>`
);
scenarioCode = scenarioCode.replace(
  `<Save className="w-4 h-4" /> Save Scenario to Decision Portfolio`,
  `<Save className="w-4 h-4" /> {tr('Save Scenario to Decision Portfolio') || tr('Save Scenario')}`
);

fs.writeFileSync(scenarioPath, scenarioCode, 'utf8');
console.log('Successfully patched ScenarioLabTab.jsx!');

// ── 2. PATCH MonsoonPhaseTab.jsx ──
const monsoonPath = path.resolve(__dirname, '../src/components/monsoon/MonsoonPhaseTab.jsx');
let monsoonCode = fs.readFileSync(monsoonPath, 'utf8');

monsoonCode = monsoonCode.replace(
  `<span>IMD Synoptic Climatology</span>`,
  `<span>{tr('IMD Synoptic Climatology')}</span>`
);
monsoonCode = monsoonCode.replace(
  `Multi-scale diagnostics fusing local AWS weather telemetry with global teleconnection indices (ENSO, IOD, MJO).`,
  `{tr('Multi-scale diagnostics fusing local AWS weather telemetry with global teleconnection indices (ENSO, IOD, MJO).')}`
);
monsoonCode = monsoonCode.replace(
  `Active Phase: {tr(telemetry.monsoonPhase)}`,
  `{tr('Active')}: {tr(telemetry.monsoonPhase)}`
);
monsoonCode = monsoonCode.replace(
  `{m.title}`,
  `{tr(m.title)}`
);
monsoonCode = monsoonCode.replace(
  `{m.benchmark}`,
  `{tr(m.benchmark)}`
);
monsoonCode = monsoonCode.replace(
  `{m.desc}`,
  `{tr(m.desc)}`
);
monsoonCode = monsoonCode.replace(
  `<span>Model Architecture</span>`,
  `<span>{tr('Model Architecture')}</span>`
);
monsoonCode = monsoonCode.replace(
  `<span>Active/Break F1</span>`,
  `<span>{tr('Active/Break F1')}</span>`
);
monsoonCode = monsoonCode.replace(
  `<span>Variance R²</span>`,
  `<span>{tr('Variance R²')}</span>`
);
monsoonCode = monsoonCode.replace(
  `<span>Rainfall MAE</span>`,
  `<span>{tr('Rainfall MAE')}</span>`
);
monsoonCode = monsoonCode.replace(
  `<span>Baseline Meteorological NWP (ECMWF/GFS)</span>`,
  `<span>{tr('Baseline Meteorological NWP (ECMWF/GFS)')}</span>`
);
monsoonCode = monsoonCode.replace(
  `<span>NovaVarsha ConvLSTM + GNN Hybrid</span>`,
  `<span>{tr('NovaVarsha ConvLSTM + GNN Hybrid')}</span>`
);
monsoonCode = monsoonCode.replace(
  `{t.name}`,
  `{tr(t.name)}`
);
monsoonCode = monsoonCode.replace(
  `{t.phase}`,
  `{tr(t.phase)}`
);
monsoonCode = monsoonCode.replace(
  `{t.status}`,
  `{tr(t.status)}`
);
monsoonCode = monsoonCode.replace(
  `{item.phase}`,
  `{tr(item.phase)}`
);
monsoonCode = monsoonCode.replace(
  `{item.status}`,
  `{tr(item.status)}`
);
monsoonCode = monsoonCode.replace(
  `{item.detail}`,
  `{tr(item.detail)}`
);

fs.writeFileSync(monsoonPath, monsoonCode, 'utf8');
console.log('Successfully patched MonsoonPhaseTab.jsx!');

// ── 3. PATCH SatelliteTab.jsx ──
const satPath = path.resolve(__dirname, '../src/components/satellite/SatelliteTab.jsx');
let satCode = fs.readFileSync(satPath, 'utf8');

satCode = satCode.replace(
  `<span>Copernicus Sentinel-2 & ISRO MOSDAC</span>`,
  `<span>{tr('Copernicus Sentinel-2 & ISRO MOSDAC')}</span>`
);
satCode = satCode.replace(
  `Spatial Resolution: 10m Multi-spectral Grid`,
  `{tr('10m Multispectral Spatial Resolution')}`
);
satCode = satCode.replace(
  `Multi-spectral vegetation index monitoring for localized canopy vigor, chlorophyll absorption, and root-zone water content.`,
  `{tr('Multi-spectral vegetation index monitoring for localized canopy vigor, chlorophyll absorption, and root-zone water content.')}`
);
satCode = satCode.replace(
  `Calibration: Verified`,
  `{tr('Calibration: Verified') || 'Calibration: Verified'}`
);
satCode = satCode.replace(
  `<div className="telemetry-label" style={{ color: '#34d399' }}>Mean Canopy NDVI</div>`,
  `<div className="telemetry-label" style={{ color: '#34d399' }}>{tr('Mean Canopy NDVI') || 'Mean Canopy NDVI'}</div>`
);
satCode = satCode.replace(
  `<div className="telemetry-label" style={{ color: '#38bdf8' }}>Canopy Water Index (NDWI)</div>`,
  `<div className="telemetry-label" style={{ color: '#38bdf8' }}>{tr('Normalized Difference Water Index (NDWI)')}</div>`
);
satCode = satCode.replace(
  `<div className="telemetry-label" style={{ color: '#fbbf24' }}>Cloud Contamination</div>`,
  `<div className="telemetry-label" style={{ color: '#fbbf24' }}>{tr('Cloud Contamination') || 'Cloud Contamination'}</div>`
);
satCode = satCode.replace(
  `<div className="telemetry-label" style={{ color: '#c084fc' }}>Orbital Pass Timestamp</div>`,
  `<div className="telemetry-label" style={{ color: '#c084fc' }}>{tr('Orbital Pass Timestamp') || 'Orbital Pass'}</div>`
);
satCode = satCode.replace(
  `{idx.label}`,
  `{tr(idx.label)}`
);
satCode = satCode.replace(
  `Latest Pass (Sep 11)`,
  `{tr('Latest Pass (Sep 11)') || 'Latest Pass'}`
);
satCode = satCode.replace(
  `30-Day Prior (Aug 12)`,
  `{tr('30-Day Prior (Aug 12)') || '30-Day Prior'}`
);
satCode = satCode.replace(
  `Click any pixel to inspect`,
  `{tr('Click any pixel to inspect') || 'Click pixel to inspect'}`
);
satCode = satCode.replace(
  `{selectedPixel.health}`,
  `{tr(selectedPixel.health)}`
);

fs.writeFileSync(satPath, satCode, 'utf8');
console.log('Successfully patched SatelliteTab.jsx!');
