import { Rune, MainRune } from "../types/types";

const findRunePage = (playerRune: number, runes: Rune[]) =>
  runes.find(page =>
    page.slots.some(slot => slot.runes.some(picked => picked.id === playerRune))
  );

const findRunes = (playerMainRune: number, runes: Rune[]) => {
  const runePage = findRunePage(playerMainRune, runes);
  return runePage?.slots.find(slot =>
    slot.runes.some(picked => picked.id === playerMainRune)
  );
};

export const findMainRune = (
  playerMainRune: number,
  runes: Rune[]
): MainRune => {
  const mainRunes = findRunes(playerMainRune, runes);
  return mainRunes?.runes.find(
    picked => picked.id === playerMainRune
  ) as MainRune;
};

export const findSubRune = (playerMainRune: number, runes: Rune[]) => {
  const mainRunes = findRunes(playerMainRune, runes);
  return mainRunes?.runes.find(picked => picked.id === playerMainRune);
};
