import styled from "styled-components";
import { useRecoilState } from "recoil";
import useGetSpellData from "../queries/data/useGetSpellData";
import useGetRuneData from "../queries/data/useGetRuneData";
import useGetItemData from "../queries/data/useGetItemData";
import useGetChampionData from "../queries/data/useGetChampionData";
import {
  championAtom,
  freeRankAtom,
  itemAtom,
  runeAtom,
  soloRankAtom,
  spellAtom,
} from "../atoms/atom";
import { Challenger, Spell } from "../types/types";
import Rotation from "../components/features/main/Rotation";
import RankingBoard from "@/components/features/main/RankingBoard";
import useGetChallengerSoloData from "@/queries/data/useGetChallenger";
import useGetChallengerFreeData from "@/queries/data/useGetChallengerFreeData";

function Main() {
  const { isSuccess: spellIsSuccess, data: spellData } = useGetSpellData();
  const { isSuccess: runeIsSuccess, data: runeData } = useGetRuneData();
  const { isSuccess: itemIsSuccess, data: itemData } = useGetItemData();
  const { isSuccess: championIsSuccess, data: championData } =
    useGetChampionData();
  const { isSuccess: soloRankIsSuccess, data: soloRankData } =
    useGetChallengerSoloData();
  const { isSuccess: freeRankIsSuccess, data: freeRankData } =
    useGetChallengerFreeData();

  const [spellState, setSpellState] = useRecoilState(spellAtom);
  const [runeState, setRuneState] = useRecoilState(runeAtom);
  const [itemState, setItemState] = useRecoilState(itemAtom);
  const [championState, setChampionState] = useRecoilState(championAtom);
  const [soloRankState, setSoloRankState] = useRecoilState(soloRankAtom);
  const [freeRankState, setFreeRankState] = useRecoilState(freeRankAtom);

  if (spellIsSuccess && spellState.length === 0) {
    setTimeout(() => {
      setSpellState([...Object.values(spellData.data)] as Spell[]);
    }, 0);
  }

  if (runeIsSuccess && runeState.length === 0) {
    setTimeout(() => {
      setRuneState([...runeData]);
    }, 0);
  }

  if (itemIsSuccess && itemState.length === 0) {
    setTimeout(() => {
      setItemState([itemData.data]);
    }, 0);
  }

  if (championIsSuccess && championState.length === 0) {
    setTimeout(() => {
      setChampionState([championData.data]);
    }, 0);
  }

  if (soloRankIsSuccess && soloRankState.length === 0) {
    setTimeout(() => {
      setSoloRankState([
        soloRankData.entries.sort(
          (a: Challenger, b: Challenger) => b.leaguePoints - a.leaguePoints
        ),
      ]);
    }, 0);
  }

  if (freeRankIsSuccess && freeRankState.length === 0) {
    setTimeout(() => {
      setFreeRankState([
        freeRankData.entries.sort(
          (a: Challenger, b: Challenger) => b.leaguePoints - a.leaguePoints
        ),
      ]);
    }, 0);
  }

  return (
    <S_Main>
      <Rotation />
      <RankingBoard />
    </S_Main>
  );
}

export default Main;

const S_Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-bg);
  padding: 20px 100px;
`;
