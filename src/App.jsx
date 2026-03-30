import React, { useState, useEffect } from 'react';
import { useApi } from './hooks/useApi';
import TeamCard from './components/TeamCard';
import SquadModal from './components/SquadModal';

function App() {
  const { getSuperLigTeams, getTeamSquad, apiUsageCount } = useApi();
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [teamPlayers, setTeamPlayers] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoadingSquad, setIsLoadingSquad] = useState(false);
  const [isLoadingTeams, setIsLoadingTeams] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      setIsLoadingTeams(true);
      const data = await getSuperLigTeams();
      setTeams(data);
      setIsLoadingTeams(false);
    };
    fetchTeams();
  }, []);

  const handleTeamClick = async (team) => {
    setSelectedTeam(team);
    setTeamPlayers([]);
    setIsLoadingSquad(true);
    setModalOpen(true);

    const players = await getTeamSquad(team.id);
    setTeamPlayers(players);
    setIsLoadingSquad(false);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedTeam(null);
  };

  return (
    <div className="app-container">
      <header>
        <h1>
          <div style={{ background: 'var(--primary)', width: 32, height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
             FT
          </div>
          FutbolTakip
        </h1>
        <div className="api-counter">
          {50 - apiUsageCount}/50 istekleri kaldı
        </div>
      </header>

      <main>
        {isLoadingTeams ? (
          <div className="loading">
             <span className="spinner">⚽</span> Süper Lig Takımları Yükleniyor...
          </div>
        ) : (
          <div className="team-grid">
            {teams.map(team => (
              <div key={team.id} className="team-card" onClick={() => handleTeamClick(team)}>
                <div className="logo-container">
                  <img 
                    src={team.logo} 
                    alt={`${team.name} Logo`} 
                    className="team-logo"
                    onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(team.name)}&background=00b894&color=fff` }}
                  />
                </div>
                <h3 className="team-name">{team.name}</h3>
              </div>
            ))}
          </div>
        )}
      </main>

      <SquadModal 
        team={selectedTeam} 
        players={teamPlayers} 
        isOpen={modalOpen} 
        onClose={closeModal} 
        isLoading={isLoadingSquad}
      />
    </div>
  );
}

export default App;
