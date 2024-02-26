import { atom } from "recoil";
import { Rune, Spell } from "../types/types";

export const spellAtom = atom<Spell[]>({
  key: "spellAtom",
  default: [],
});

export const runeAtom = atom<Rune[]>({
  key: "runeAtom",
  default: [],
});

export const summonerAtom = atom({
  key: "summonerAtom",
  default: "",
});
