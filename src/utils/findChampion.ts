import { ChampionType } from "../types/types";

export const findRotation = (
  allChampion: Record<string, ChampionType>,
  list: number[]
) => {
  const filteredChampions = Object.values<ChampionType>(allChampion).filter(
    champion => list.includes(Number(champion.key))
  );

  return filteredChampions;
};

export const findChampion = (
  allChampion: Record<string, ChampionType>,
  id: number
) => {
  const filteredChampion = Object.values<ChampionType>(allChampion).filter(
    champion => Number(champion.key) === id
  );

  return filteredChampion;
};
