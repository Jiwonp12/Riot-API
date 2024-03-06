import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { Rune, Spell } from "../types/types";

const { persistAtom } = recoilPersist();

export const spellAtom = atom<Spell[]>({
  key: "spellAtom",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const runeAtom = atom<Rune[]>({
  key: "runeAtom",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const summonerAtom = atom({
  key: "summonerAtom",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const itemAtom = atom({
  key: "itemAtom",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
