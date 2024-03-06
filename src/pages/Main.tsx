import styled from "styled-components";
import { useRecoilState } from "recoil";
import useGetSpellData from "../queries/useGetSpellData";
import useGetRuneData from "../queries/useGetRuneData";
import useGetItemData from "../queries/useGetItemData";
import { itemAtom, runeAtom, spellAtom } from "../atoms/atom";
import { Spell } from "../types/types";

function Main() {
  const { isSuccess: spellIsSuccess, data: spellData } = useGetSpellData();
  const { isSuccess: runeIsSuccess, data: runeData } = useGetRuneData();
  const { isSuccess: itemIsSuccess, data: itemData } = useGetItemData();
  const [spellState, setSpellState] = useRecoilState<Spell[]>(spellAtom);
  const [runeState, setRuneState] = useRecoilState(runeAtom);
  const [itemState, setItemState] = useRecoilState(itemAtom);

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

  return <S_Main>여기다가 무엇을 넣어야하지..</S_Main>;
}

export default Main;

const S_Main = styled.main`
  background: var(--color-bg);
`;
