import React, { Component } from 'react';
import { AppProvider, useApp } from './components/common/AppContext';
import Navbar from './components/common/Navbar';
import LocationBar from './components/common/LocationBar';
import NavDrawer from './components/common/NavDrawer';
import LoginPage from './components/auth/LoginPage';
import OverviewTab from './components/overview/OverviewTab';
import HydroMap from './components/hydromap/HydroMap';
import SmartCropRecommendations from './components/agriculture/SmartCropRecommendations';
import ScenarioLabTab from './components/scenario/ScenarioLabTab';
import MonsoonPhaseTab from './components/monsoon/MonsoonPhaseTab';
import XAITab from './components/xai/XAITab';
import SatelliteTab from './components/satellite/SatelliteTab';
import KnowledgeGraphTab from './components/graph/KnowledgeGraphTab';
import AnalyticsTab from './components/analytics/AnalyticsTab';
import AlertsTab from './components/alerts/AlertsTab';
import ActionPlannerTab from './components/planner/ActionPlannerTab';
import SystemHealthTab from './components/system/SystemHealthTab';
import AssistantDrawer from './components/chat/AssistantDrawer';
import DecisionReportModal from './components/reports/DecisionReportModal';
import FarmProfileModal from './components/profile/FarmProfileModal';
import CommandPalette from './components/common/CommandPalette';
import LoginModal from './components/auth/LoginModal';
import './index.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error('NovaVarsha AI UI Intercepted Error:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '3.5rem 1.5rem', textAlign: 'center', color: '#f1f5f9', background: '#070512', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '1.4rem', color: '#38bdf8', marginBottom: '0.5rem' }}>🌧️ NovaVarsha AI UI Resilience Recovery</h2>
          <p style={{ color: '#94a3b8', margin: '0.5rem 0 1.25rem', maxWidth: '520px', fontSize: '0.9rem' }}>
            A rendering boundary exception was safely intercepted. Click below to re-render with verified agricultural telemetry.
          </p>
          <button 
            className="btn btn-primary"
            onClick={() => this.setState({ hasError: false, error: null })}
            style={{ background: 'linear-gradient(135deg, #0284c7 0%, #059669 100%)', padding: '0.6rem 1.4rem', borderRadius: '10px', fontWeight: 700 }}
          >
            🔄 Re-render Dashboard
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const TABS = [
  { id: 'overview', comp: OverviewTab },
  { id: 'hydromap', comp: HydroMap },
  { id: 'agriculture', comp: SmartCropRecommendations },
  { id: 'scenario', comp: ScenarioLabTab },
  { id: 'monsoon', comp: MonsoonPhaseTab },
  { id: 'xai', comp: XAITab },
  { id: 'satellite', comp: SatelliteTab },
  { id: 'knowledge_graph', comp: KnowledgeGraphTab },
  { id: 'analytics', comp: AnalyticsTab },
  { id: 'alerts', comp: AlertsTab },
  { id: 'planner', comp: ActionPlannerTab },
  { id: 'system', comp: SystemHealthTab },
];

function MainLayout() {
  const { activeTab, isLoginPage } = useApp();

  // If user is on the dedicated Login Page, show full-screen login view
  if (isLoginPage) {
    return <LoginPage />;
  }

  const ActiveComponent = TABS.find(t => t.id === activeTab)?.comp || OverviewTab;

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#070512', color: '#f8fafc' }}>
      {/* Top Header Navbar with 3-Dot Navigation Trigger */}
      <Navbar />

      {/* LGD Geo Hierarchy Location Bar with Agro-Climatic Hub Chips */}
      <LocationBar />

      {/* Main Content Area */}
      <main className="app-main" style={{ flex: 1, padding: '1.25rem 1.75rem', maxWidth: '1600px', margin: '0 auto', width: '100%' }}>
        <ErrorBoundary>
          <ActiveComponent />
        </ErrorBoundary>
      </main>

      {/* Slide-out 3-Dot Navigation Drawer */}
      <NavDrawer />

      {/* Floating Elements & Modals */}
      <AssistantDrawer />
      <DecisionReportModal />
      <FarmProfileModal />
      <CommandPalette />
      <LoginModal />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
