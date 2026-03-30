import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '56eeaae0a2msh1f5a78362b65e64p1c49efjsn933601bf2799';
const API_HOST = 'footapi7.p.rapidapi.com';

const apiClient = axios.create({
  baseURL: `https://${API_HOST}`,
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': API_HOST
  }
});

const CACHE_VERSION = 'v2';

const getDailyLimit = () => {
  const cached = localStorage.getItem('apiTracker');
  const today = new Date().toDateString();
  if (cached) {
    const parsed = JSON.parse(cached);
    if (parsed.date === today) return parsed.count;
  }
  return 0;
};

const incrementLimit = () => {
  const count = getDailyLimit() + 1;
  const today = new Date().toDateString();
  localStorage.setItem('apiTracker', JSON.stringify({ count, date: today }));
  return count;
};

const calculateAge = (timestamp) => {
  if (!timestamp) return '-';
  const birthDate = new Date(timestamp * 1000);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export const useApi = () => {
  const [apiUsageCount, setApiUsageCount] = useState(getDailyLimit());

  const fetchWithCache = async (cacheKey, endpoint, mapData = data => data) => {
    const fullKey = `${cacheKey}_${CACHE_VERSION}`;
    const cachedData = localStorage.getItem(fullKey);
    if (cachedData) {
      return JSON.parse(cachedData);
    }

    try {
      const response = await apiClient.get(endpoint);
      const mapped = mapData(response.data);
      localStorage.setItem(fullKey, JSON.stringify(mapped));
      setApiUsageCount(incrementLimit());
      return mapped;
    } catch (err) {
      console.error(`Error fetching ${endpoint}:`, err);
      throw err;
    }
  };

  const getSuperLigTeams = async () => {
    try {
      return await fetchWithCache('teams_superlig', '/api/tournament/52/season/63814/standings/total', (data) => {
        const rowData = data.standings?.[0]?.rows || [];
        return rowData.map(r => ({
          id: r.team.id,
          name: r.team.name,
          logo: `https://api.sofascore.app/api/v1/team/${r.team.id}/image`,
          primaryColor: r.team.teamColors?.primary || '#00b894'
        })).sort((a,b) => a.name.localeCompare(b.name));
      });
    } catch (error) {
      console.log('Failed to fetch teams, using fallback logic if needed.');
      return [];
    }
  };

  const getTeamSquad = async (teamId) => {
    try {
      return await fetchWithCache(`players_team_${teamId}`, `/api/team/${teamId}/players`, (data) => {
         const players = data.players || [];
         return players.map(p => ({
           id: p.player?.id || Math.random(),
           name: p.player?.name || 'Unknown',
           position: p.player?.position || 'Unknown',
           jerseyNumber: p.player?.jerseyNumber || '-',
           age: p.player?.age || calculateAge(p.player?.dateOfBirthTimestamp),
           country: p.player?.country?.name || p.player?.nationality || '-'
         }));
      });
    } catch (error) {
      console.log('Failed to fetch players.');
      return [];
    }
  };

  return { getSuperLigTeams, getTeamSquad, apiUsageCount };
};

