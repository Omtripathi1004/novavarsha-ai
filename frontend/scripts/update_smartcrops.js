import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const p = path.join(__dirname, '..', 'src', 'components', 'agriculture', 'SmartCropRecommendations.jsx');
let s = fs.readFileSync(p, 'utf8');

s = s.replace('{crop.category}', '{tr(crop.category)}');
s = s.replace('{crop.season}', '{tr(crop.season)}');
s = s.replace('<h3 style={{ fontSize: \'1.15rem\', color: \'#fff\', margin: 0, fontWeight: 800 }}>\n                        {crop.name}\n                      </h3>', '<h3 style={{ fontSize: \'1.15rem\', color: \'#fff\', margin: 0, fontWeight: 800 }}>\n                        {tr(crop.name)}\n                      </h3>');
s = s.replace('{crop.variety}', '{tr(crop.variety)}');
s = s.replace('<div style={{ fontSize: \'0.65rem\', color: \'#94a3b8\', textTransform: \'uppercase\', letterSpacing: \'0.04em\' }}>\n                      Suitability\n                    </div>', '<div style={{ fontSize: \'0.65rem\', color: \'#94a3b8\', textTransform: \'uppercase\', letterSpacing: \'0.04em\' }}>\n                      {tr(\'Suitability Score\')}\n                    </div>');

s = s.replace('<span style={{ color: \'#94a3b8\', fontSize: \'0.68rem\', display: \'block\' }}>Duration</span>', '<span style={{ color: \'#94a3b8\', fontSize: \'0.68rem\', display: \'block\' }}>{tr(\'Duration\')}</span>');
s = s.replace('{crop.durationDays} Days', '{crop.durationDays} {tr(\'Days\')}');
s = s.replace('<span style={{ color: \'#94a3b8\', fontSize: \'0.68rem\', display: \'block\' }}>Water Requirement</span>', '<span style={{ color: \'#94a3b8\', fontSize: \'0.68rem\', display: \'block\' }}>{tr(\'Water Requirement\')}</span>');
s = s.replace('<span style={{ color: \'#94a3b8\', fontSize: \'0.68rem\', display: \'block\' }}>Sowing Window</span>', '<span style={{ color: \'#94a3b8\', fontSize: \'0.68rem\', display: \'block\' }}>{tr(\'Sowing Window\')}</span>');
s = s.replace('{crop.sowingWindow}', '{tr(crop.sowingWindow)}');
s = s.replace('<span style={{ color: \'#94a3b8\', fontSize: \'0.68rem\', display: \'block\' }}>MSP / Economic Price</span>', '<span style={{ color: \'#94a3b8\', fontSize: \'0.68rem\', display: \'block\' }}>{tr(\'Govt. MSP Rate\')}</span>');
s = s.replace('<strong>Soil:</strong> {crop.soilMatch} • {crop.stressTolerance}', '<strong>{tr(\'Soil\')}:</strong> {tr(crop.soilMatch)} • {tr(crop.stressTolerance)}');

s = s.replace('Compare ({comparedCrops.length}) Cultivars', '{tr(\'Compare Cultivars\')} ({comparedCrops.length})');
s = s.replace('"Why Not?" Excluded Crops & Disqualification Diagnostics', '{tr(\'"Why Not?" Excluded Crops & Disqualification Diagnostics\')}');
s = s.replace('{c.crop}', '{tr(c.crop)}');
s = s.replace('{c.primary_reason}', '{tr(c.primary_reason)}');
s = s.replace('{c.explanation}', '{tr(c.explanation)}');
s = s.replace('💡 <strong style={{ color: \'#38bdf8\' }}>Scientific Mitigation:</strong> {c.action}', '💡 <strong style={{ color: \'#38bdf8\' }}>{tr(\'Scientific Mitigation\')}:</strong> {tr(c.action)}');

fs.writeFileSync(p, s, 'utf8');
console.log('Successfully updated SmartCropRecommendations.jsx!');
