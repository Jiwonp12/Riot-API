import styled from "styled-components";
import { useRecoilState } from "recoil";
import useGetSpellData from "../queries/useGetSpellData";
import { spellData } from "../atoms/atom";
import { Spell } from "../types/types";

function Main() {
  const { isSuccess, data } = useGetSpellData();
  const [recoilState, setRecoilState] = useRecoilState<Spell[]>(spellData);

  if (isSuccess && recoilState.length === 0) {
    setTimeout(() => {
      setRecoilState([...Object.values(data.data)] as Spell[]);
    }, 0);
  }

  return <S_Main>여기다가 무엇을 넣어야하지..</S_Main>;
}

export default Main;

const S_Main = styled.main`
  background: var(--color-bg);
`;
