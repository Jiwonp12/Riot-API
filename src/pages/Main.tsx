import styled from "styled-components";
import { useRecoilState } from "recoil";
import useGetSpellData from "../queries/data/useGetSpellData";
import useGetRuneData from "../queries/data/useGetRuneData";
import useGetItemData from "../queries/data/useGetItemData";
// import useGetChampionData from "../queries/data/useGetChampionData";
import { itemAtom, runeAtom, spellAtom } from "../atoms/atom";
import { Spell } from "../types/types";
import Rotation from "../components/features/main/Rotation";

function Main() {
  const { isSuccess: spellIsSuccess, data: spellData } = useGetSpellData();
  const { isSuccess: runeIsSuccess, data: runeData } = useGetRuneData();
  const { isSuccess: itemIsSuccess, data: itemData } = useGetItemData();
  // const { isSuccess: championIsSuccess, data: championData } =
  //   useGetChampionData();
  const [spellState, setSpellState] = useRecoilState<Spell[]>(spellAtom);
  const [runeState, setRuneState] = useRecoilState(runeAtom);
  const [itemState, setItemState] = useRecoilState(itemAtom);
  // const [championState, setChampionState] = useRecoilState(championAtom);

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

  // if (championIsSuccess && championState.length === 0) {
  //   setTimeout(() => {
  //     setChampionState([championData.data]);
  //   }, 0);
  // }

  return (
    <S_Main>
      <Rotation />
    </S_Main>
  );
}

export default Main;

const S_Main = styled.main`
  display: flex;
  background: var(--color-white2);
`;
