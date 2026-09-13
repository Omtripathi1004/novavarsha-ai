/**
 * NovaVarsha AI - Core TypeScript Definitions (Lenovo Hackathon 2026)
 * Hyperlocal Climate-to-Crop Decision Intelligence Platform
 */

export interface CropCultivar {
  id: string;
  name: string;
  variety: string;
  scientificName: string;
  category: string;
  season: 'Kharif' | 'Rabi' | 'Zaid' | 'Annual';
  suitability: number;
  durationDays: number;
  waterNeedMm: string;
  soilMatch: string;
  sowingWindow: string;
  stressTolerance: string;
  states: string[];
  mspPerQuintal: string;
  marketPrice: string;
  yieldPotential: string;
  source: string;
  rank: number;
  icon: string;
}

export interface TelemetryData {
  tempC: number;
  humidity: number;
  rainMmToday: number;
  rainMm7d: number;
  rainAnomaly: string;
  soilMoisture: number;
  riskRating: string;
  compositeRiskScore: number;
  dataFreshness: string;
}

export interface AgroHub {
  id: string;
  name: string;
  lat: number;
  lng: number;
  belt: string;
  status: string;
  rain: string;
  color: string;
  icon: string;
  district: string;
  state: string;
}

export interface FieldActionItem {
  id: string;
  text: string;
  done: boolean;
}

export interface ActionPlannerStage {
  stage: string;
  title: string;
  evidence: string;
  confidence: string;
  items: FieldActionItem[];
}
