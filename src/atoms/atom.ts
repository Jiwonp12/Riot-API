import { atom } from "recoil";
import { Spell } from "../types/types";

export const spellData = atom<Spell[]>({
  key: "spellData",
  default: [],
});

export const summonerAtom = atom({
  key: "summonerAtom",
  default: "",
});
