import React, { createContext, useContext, useState, useEffect } from 'react';
import { SUPPORTED_LANGUAGES, I18N_DATA, translateVernacular } from '../../i18n/languages';
import { DEMO_USERS } from '../auth/LoginModal';

export { SUPPORTED_LANGUAGES };

export const AGRO_HUBS = [
  { id: 'gangetic', name: 'Gangetic Basin (Lucknow)', lat: 26.8500, lng: 80.9500, belt: 'Paddy & Sugarcane', status: 'Optimal Sowing Window', rain: '82%', color: '#10b981', icon: '🌾', district: 'Lucknow', state: 'Uttar Pradesh' },
  { id: 'vidarbha', name: 'Vidarbha Bt Cotton Belt (Nagpur)', lat: 21.1458, lng: 79.0882, belt: 'Cotton Lead', status: 'Furrow Drainage Required', rain: '54%', color: '#0ea5e9', icon: '☁️', district: 'Nagpur', state: 'Maharashtra' },
  { id: 'malwa', name: 'Malwa Soybean Plateau (Indore)', lat: 22.7196, lng: 75.8577, belt: 'Soybean Lead', status: '6-Day Dry Break Watch', rain: '45%', color: '#f59e0b', icon: '🫘', district: 'Indore', state: 'Madhya Pradesh' },
  { id: 'saurashtra', name: 'Saurashtra Groundnut (Rajkot)', lat: 22.3039, lng: 70.8022, belt: 'Groundnut Lead', status: 'Vegetative Growth', rain: '38%', color: '#84cc16', icon: '🥜', district: 'Rajkot', state: 'Gujarat' },
  { id: 'bihar', name: 'North Bihar Maize Hub (Samastipur)', lat: 25.8600, lng: 85.7800, belt: 'Maize & Rabi Crops', status: 'Knee-High Stage', rain: '75%', color: '#ea580c', icon: '🌽', district: 'Samastipur', state: 'Bihar' },
  { id: 'ladakh', name: 'Ladakh High-Altitude Zone (Leh)', lat: 34.1526, lng: 77.5771, belt: 'Trans-Himalayan Barley', status: 'Cold Arid Window', rain: '12%', color: '#38bdf8', icon: '🏔️', district: 'Leh', state: 'Ladakh' },
  { id: 'odisha', name: 'Odisha Coastal Belt (Bhubaneswar)', lat: 20.2961, lng: 85.8245, belt: 'Wetland Delta Lead', status: 'Heavy Rain Precaution', rain: '76%', color: '#06b6d4', icon: '🌊', district: 'Bhubaneswar', state: 'Odisha' },
  { id: 'rayalaseema', name: 'Rayalaseema Zone (Kurnool)', lat: 15.8281, lng: 78.0373, belt: 'Arid Millets & Pulses', status: 'Dryland Moisture Watch', rain: '24%', color: '#eab308', icon: '🌾', district: 'Kurnool', state: 'Andhra Pradesh' }
];

export const DEMO_ROLES = [
  { id: 'farmer', label_en: 'Farmer / User', label_hi: 'किसान / उत्पादक', badge: '🌾 Farmer Mode' },
  { id: 'officer', label_en: 'Agriculture Officer', label_hi: 'कृषि अधिकारी', badge: '🏛️ Officer Mode' },
  { id: 'admin', label_en: 'Administrator / Dev', label_hi: 'प्रशासक / डेवलपर', badge: '⚙️ Admin Mode' }
];

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [role, setRole] = useState('farmer');
  const [dataMode, setDataMode] = useState('live'); // 'live' | 'cached' | 'demo'
  const [lang, setLang] = useState('hi');
  const [activeHub, setActiveHub] = useState(AGRO_HUBS[0]);
  const [activeTab, setActiveTab] = useState('overview');

  // User identity session
  const [currentUser, setCurrentUser] = useState(DEMO_USERS[0]);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const [activeLocation, setActiveLocation] = useState({
    state: 'Uttar Pradesh',
    district: 'Lucknow',
    block: 'Sarojini Nagar',
    village: 'Bhatgaon',
    lat: 26.8500,
    lng: 80.9500
  });

  const [farmProfile, setFarmProfile] = useState({
    landSizeAcres: 3.5,
    soilType: 'Alluvial Clay Loam',
    irrigationSource: 'Canal & Borewell',
    primaryCrop: 'Paddy (Rice)',
    experienceYears: 12
  });

  const [telemetry, setTelemetry] = useState({
    temp: 28.4,
    humidity: 78,
    rainMmToday: 14.2,
    rainMm7d: 64.0,
    rainAnomaly: '+14%',
    windKmh: 14.5,
    pressureHpa: 1006.2,
    soilMoisture: '32% (Optimal)',
    monsoonPhase: 'Active Southwest Monsoon',
    compositeRiskScore: 32,
    riskRating: 'Low-to-Moderate',
    dataFreshness: 'Just now (IMD Synoptic Feed)'
  });

  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [evidenceDrawerData, setEvidenceDrawerData] = useState(null);

  // Synchronize location when hub changes
  const switchHub = (hubId) => {
    const hub = AGRO_HUBS.find(h => h.id === hubId);
    if (hub) {
      setActiveHub(hub);
      setActiveLocation({
        state: hub.state,
        district: hub.district,
        block: 'Central Block',
        village: 'Model Village',
        lat: hub.lat,
        lng: hub.lng
      });
      setTelemetry(prev => ({
        ...prev,
        temp: hub.id === 'ladakh' ? 14.2 : (hub.id === 'vidarbha' ? 31.8 : 28.4),
        humidity: hub.id === 'odisha' ? 88 : (hub.id === 'rayalaseema' ? 44 : 78),
        rainAnomaly: hub.id === 'gangetic' ? '+14%' : (hub.id === 'rayalaseema' ? '-28%' : '+5%'),
        compositeRiskScore: hub.id === 'vidarbha' ? 58 : (hub.id === 'rayalaseema' ? 62 : 32)
      }));
    }
  };

  const t = (key) => {
    if (I18N_DATA[lang] && I18N_DATA[lang][key]) {
      return I18N_DATA[lang][key];
    }
    if (I18N_DATA['hi'] && I18N_DATA['hi'][key] && lang !== 'en') {
      return I18N_DATA['hi'][key];
    }
    if (I18N_DATA['en'] && I18N_DATA['en'][key]) {
      return I18N_DATA['en'][key];
    }
    return key;
  };

  const tr = (englishText) => {
    if (!englishText || lang === 'en') return englishText;
    return translateVernacular(englishText, lang);
  };

  const [isLoginPage, setIsLoginPage] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <AppContext.Provider value={{
      role, setRole,
      dataMode, setDataMode,
      lang, setLang,
      t, tr,
      currentUser, setCurrentUser,
      isLoginModalOpen, setIsLoginModalOpen,
      isLoginPage, setIsLoginPage,
      isDrawerOpen, setIsDrawerOpen,
      activeHub, setActiveHub, switchHub,
      activeLocation, setActiveLocation,
      farmProfile, setFarmProfile,
      telemetry, setTelemetry,
      activeTab, setActiveTab,
      isReportModalOpen, setIsReportModalOpen,
      isProfileModalOpen, setIsProfileModalOpen,
      isCommandPaletteOpen, setIsCommandPaletteOpen,
      isAssistantOpen, setIsAssistantOpen,
      evidenceDrawerData, setEvidenceDrawerData
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
