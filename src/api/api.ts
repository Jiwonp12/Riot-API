import axios from "axios";
import { gameVersion } from "../constant/constant";

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
      `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=10&api_key=${key}`
    )
    .then(res => res.data);

export const GetMatchesInfo = (matchId: string) =>
  axios
    .get(
      `https://asia.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${key}`
    )
    .then(res => res.data);

export const GetTier = (id: string) =>
  axios
    .get(
      `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${key}`
    )
    .then(res => res.data);

export const GetSpellData = () =>
  axios
    .get(
      `https://ddragon.leagueoflegends.com/cdn/${gameVersion}/data/ko_KR/summoner.json`
    )
    .then(res => res.data);

export const GetRuneData = () =>
  axios
    .get(
      `https://ddragon.leagueoflegends.com/cdn/${gameVersion}/data/ko_KR/runesReforged.json`
    )
    .then(res => res.data);

export const GetItemData = () =>
  axios
    .get(
      `https://ddragon.leagueoflegends.com/cdn/${gameVersion}/data/ko_KR/item.json`
    )
    .then(res => res.data);
