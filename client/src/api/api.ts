import axios from "axios";
import { gameVersion } from "../constant/constant";

const key = import.meta.env.VITE_RIOT_API;
const url = import.meta.env.VITE_NODE_API;

export const GetSummoner = (id: string) =>
  axios
    .get(
      `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${id}?api_key=${key}`
    )
    .then(res => res.data);

export const GetMatches = (puuid: string, start: string, count: string) =>
  axios
    .get(
      `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=${start}&count=${count}&api_key=${key}`
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

export const GetChampionData = () =>
  axios
    .get(
      `https://ddragon.leagueoflegends.com/cdn/${gameVersion}/data/ko_KR/champion.json`
    )
    .then(res => res.data);

export const GetChampionDetailData = (champion?: string) =>
  axios
    .get(
      `https://ddragon.leagueoflegends.com/cdn/${gameVersion}/data/ko_KR/champion/${champion}.json`
    )
    .then(res => res.data);

export const GetChampionRotation = () =>
  axios
    .get(
      `    https://kr.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${key}`
    )
    .then(res => res.data);

export const GetChallengerSoloData = () =>
  axios
    .get(
      `    https://kr.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key=${key}`
    )
    .then(res => res.data);

export const GetChallengerFreeData = () =>
  axios
    .get(
      `    https://kr.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_FLEX_SR?api_key=${key}`
    )
    .then(res => res.data);

export const GetSummonerBySummonerId = (summonerId: string) =>
  axios
    .get(
      `https://kr.api.riotgames.com/lol/summoner/v4/summoners/${summonerId}?api_key=${key}`
    )
    .then(res => res.data);

export const GetSummonerByTagName = (summonerName: string, tag: string) =>
  axios
    .get(`${url}/riot-tag?summonerName=${summonerName}&tag=${tag}`)
    .then(res => res.data);

export const GetSummonerByAccountId = (puuid: string) =>
  axios.get(`${url}/riot-puuid?puuid=${puuid}`).then(res => res.data);
