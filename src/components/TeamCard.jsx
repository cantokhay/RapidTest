import React from 'react';
import { default as IconUsers } from 'lucide-react/dist/esm/icons/users';

const TeamCard = ({ team, onClick }) => {
  return (
    <div className="team-card" onClick={() => onClick(team)}>
      <img 
        src={team.logo || `https://ui-avatars.com/api/?name=${encodeURIComponent(team.name)}&background=00b894&color=fff`} 
        alt={`${team.name} Logo`} 
        className="team-logo"
        onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(team.name)}&background=00b894&color=fff` }}
      />
      <h3 className="team-name">{team.name}</h3>
    </div>
  );
};

export default TeamCard;
