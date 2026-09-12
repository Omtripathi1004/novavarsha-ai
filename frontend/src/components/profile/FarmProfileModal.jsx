import React, { useState } from 'react';
import { useApp } from '../common/AppContext';
import { UserCircle, Save, X, CheckCircle2, Sprout, Droplets, MapPin } from 'lucide-react';

export default function FarmProfileModal() {
  const { isProfileModalOpen, setIsProfileModalOpen, farmProfile, setFarmProfile, activeLocation } = useApp();

  const [formData, setFormData] = useState({ ...farmProfile });

  if (!isProfileModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFarmProfile(formData);
    setIsProfileModalOpen(false);
  };

  return (
    <div className="modal-backdrop" onClick={() => setIsProfileModalOpen(false)}>
      <div className="modal-content" style={{ maxWidth: '520px' }} onClick={e => e.stopPropagation()}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <UserCircle className="w-5 h-5 text-emerald-400" />
            <h3 style={{ fontSize: '1.15rem', color: '#fff', margin: 0 }}>
              Personalize Farm Profile
            </h3>
          </div>
          <button onClick={() => setIsProfileModalOpen(false)} className="btn btn-secondary" style={{ padding: '0.3rem 0.6rem' }}>
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          
          <div>
            <label style={{ fontSize: '0.78rem', color: '#cbd5e1', fontWeight: 600, display: 'block', marginBottom: '0.35rem' }}>
              Operational Land Holding (Acres):
            </label>
            <input 
              type="number" 
              step="0.5" 
              min="0.5" 
              max="50" 
              value={formData.landSizeAcres}
              onChange={(e) => setFormData({ ...formData, landSizeAcres: parseFloat(e.target.value) })}
              style={{
                width: '100%',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '8px',
                padding: '0.55rem',
                color: '#fff',
                fontSize: '0.85rem'
              }}
            />
          </div>

          <div>
            <label style={{ fontSize: '0.78rem', color: '#cbd5e1', fontWeight: 600, display: 'block', marginBottom: '0.35rem' }}>
              Soil Type Classification:
            </label>
            <select
              value={formData.soilType}
              onChange={(e) => setFormData({ ...formData, soilType: e.target.value })}
              style={{
                width: '100%',
                background: '#0e1726',
                border: '1px solid var(--border-subtle)',
                borderRadius: '8px',
                padding: '0.55rem',
                color: '#fff',
                fontSize: '0.85rem'
              }}
            >
              <option value="Alluvial Clay Loam">Alluvial Clay Loam (Gangetic Basin)</option>
              <option value="Black Vertisol">Deep Black Cotton Soil (Vertisol)</option>
              <option value="Sandy Loam">Calcareous Sandy Loam</option>
              <option value="Red Laterite">Red Laterite Loam</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: '0.78rem', color: '#cbd5e1', fontWeight: 600, display: 'block', marginBottom: '0.35rem' }}>
              Primary Irrigation Source:
            </label>
            <select
              value={formData.irrigationSource}
              onChange={(e) => setFormData({ ...formData, irrigationSource: e.target.value })}
              style={{
                width: '100%',
                background: '#0e1726',
                border: '1px solid var(--border-subtle)',
                borderRadius: '8px',
                padding: '0.55rem',
                color: '#fff',
                fontSize: '0.85rem'
              }}
            >
              <option value="Canal & Borewell">Canal & Deep Borewell (Assured)</option>
              <option value="Tube-well Only">Electric / Diesel Tube-well</option>
              <option value="Drip / Micro-Irrigation">Micro-Sprinkler & Drip Network</option>
              <option value="Rainfed / Natural Only">Rainfed / Completely Monsoon Dependent</option>
            </select>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '0.5rem' }}>
            <button type="button" onClick={() => setIsProfileModalOpen(false)} className="btn btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              <Save className="w-4 h-4" /> Save Profile
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
