import React from 'react';
import { LayoutDashboard, Users, Activity, Settings, X } from 'lucide-react';

const SquadModal = ({ team, players, isOpen, onClose, isLoading }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="fm-modal-content" onClick={e => e.stopPropagation()}>
        
        {/* Left Sidebar (FM aesthetic) */}
        <div className="fm-sidebar">
          <div className="fm-icon active"><Users size={20} /></div>
          <div className="fm-icon"><LayoutDashboard size={20} /></div>
          <div className="fm-icon"><Activity size={20} /></div>
          <div style={{ flex: 1 }}></div>
          <div className="fm-icon"><Settings size={20} /></div>
        </div>

        <div className="fm-main">
          {/* Header */}
          <div className="fm-header">
            <div className="fm-team-info">
              {team?.logo && <img src={team.logo} alt="Logo" className="fm-header-logo" onError={(e) => { e.target.style.display = 'none' }} />}
              <div className="fm-title-group">
                <h2>{team?.name} Kadrosu</h2>
                <p>Trendyol Süper Lig • 2024/25 Sezonu</p>
              </div>
            </div>
            <button className="fm-close" onClick={onClose}>
              <X size={18} />
            </button>
          </div>

          <div className="fm-content-area">
            {/* Tactics Area */}
            <div className="fm-tactics">
              <div className="fm-pitch">
                STRATEGY
              </div>
            </div>

            {/* Squad List */}
            <div className="fm-squad-list">
              {isLoading ? (
                <div className="loading">
                  <span className="spinner">⚽</span> Loading Squad...
                </div>
              ) : players && players.length > 0 ? (
                <table className="fm-table">
                  <thead>
                    <tr>
                      <th style={{ width: '40%' }}>Oyuncu</th>
                      <th style={{ width: '15%' }}>Pozisyon</th>
                      <th style={{ width: '10%' }}>No</th>
                      <th style={{ width: '10%' }}>Yaş</th>
                      <th style={{ width: '25%' }}>Ülke</th>
                    </tr>
                  </thead>
                  <tbody>
                    {players.map((p, index) => (
                      <tr key={p.id || index}>
                        <td style={{ fontWeight: 600 }}>{p.name}</td>
                        <td><span style={{ color: 'var(--fm-muted)', fontSize: '12px' }}>{p.position?.toUpperCase()}</span></td>
                        <td>{p.jerseyNumber}</td>
                        <td>{p.age}</td>
                        <td style={{ color: 'var(--fm-muted)' }}>{p.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="loading" style={{ color: 'var(--fm-muted)' }}>
                   Kadro verisi bulunamadı.
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SquadModal;

