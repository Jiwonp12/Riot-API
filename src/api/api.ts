import axios from "axios";

const key = import.meta.env.VITE_RIOT_API;

export const GetSummoner = (id: string) =>
  axios
    .get(
      `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${id}?api_key=${key}`
    )
    .then(res => res.data);

export const GetMatches = (puuid: string) =>
  axios
    .get(
      `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=2&api_key=${key}`
    )
    .then(res => res.data);

export const GetMatchesInfo = (matchId: string) =>
  axios
    .get(
      `https://asia.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${key}`
    )
    .then(res => res.data);
