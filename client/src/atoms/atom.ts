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

export const itemAtom = atom({
  key: "itemAtom",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const championAtom = atom({
  key: "championAtom",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const soloRankAtom = atom({
  key: "soloRankAtom",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const freeRankAtom = atom({
  key: "freeRankAtom",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
