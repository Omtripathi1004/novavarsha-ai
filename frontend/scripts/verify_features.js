import { translateVernacular } from '../src/i18n/languages.js';
import { INDIAN_CROPS_CATALOG } from '../src/data/cropsCatalog.js';

console.log('--- TESTING TRANSLATIONS ---');
const testKeys = [
  'Top 3 Optimal Crops for this Region',
  '#1 Ranked Best Match',
  '#2 Strong Runner-Up',
  '#3 High-Resilience Alternative',
  'Why Recommended for this Location',
  '10-Year Agro-Climatic Data & Phenology',
  '10-Year Government MSP Price Trend (₹/Quintal)',
  'Graph 4: 10-Year Historical MSP vs Yield Trend',
  'Graph 1: Yield vs. Rainfall Sensitivity Response',
  'Graph 2: Thermal Heat Units (GDD) Accumulation',
  'Graph 3: Crop Evapotranspiration (ETc & Soil Drawdown)',
  'Paddy (Rice)',
  'Cotton',
  'Wheat',
  'Water Need',
  'Duration',
  'Days',
  'Suitability Score'
];

for (const k of testKeys) {
  const hi = translateVernacular(k, 'hi');
  const mr = translateVernacular(k, 'mr');
  const pa = translateVernacular(k, 'pa');
  console.log(`[${k}] -> HI: "${hi}" | MR: "${mr}" | PA: "${pa}"`);
}

console.log('\n--- TESTING ANALYTICS CROP VARIATION ---');
const crop1 = INDIAN_CROPS_CATALOG[0]; // Paddy
const crop2 = INDIAN_CROPS_CATALOG.find(c => c.name.toLowerCase().includes('cotton')) || INDIAN_CROPS_CATALOG[1];
const crop3 = INDIAN_CROPS_CATALOG.find(c => c.name.toLowerCase().includes('wheat')) || INDIAN_CROPS_CATALOG[2];

console.log(`Crop 1: ${crop1.name} | Water: ${crop1.waterNeedMm} | Duration: ${crop1.durationDays}d | MSP: ${crop1.mspPerQuintal}`);
console.log(`Crop 2: ${crop2.name} | Water: ${crop2.waterNeedMm} | Duration: ${crop2.durationDays}d | MSP: ${crop2.mspPerQuintal}`);
console.log(`Crop 3: ${crop3.name} | Water: ${crop3.waterNeedMm} | Duration: ${crop3.durationDays}d | MSP: ${crop3.mspPerQuintal}`);

if (crop1.waterNeedMm !== crop2.waterNeedMm && crop1.durationDays !== crop2.durationDays) {
  console.log('✓ SUCCESS: Crops have distinct agronomic requirements enabling dynamic realistic graphs!');
} else {
  console.log('⚠ Warning: Crops have identical specs');
}
