import styled from "styled-components";
// import { useRecoilValue } from "recoil";
import { MasteryType } from "@/types/types";
// import ChampionImg from "@/components/common/ChampionImg";
// import { championAtom } from "@/atoms/atom";
// import { findRotation } from "@/utils/findChampions";

function Mastery({ data }: { data: MasteryType }) {
  //   const champions = useRecoilValue(championAtom);
  console.log(data);

  return <S_Content>{/* <ChampionImg type="all" /> */}</S_Content>;
}

export default Mastery;

const S_Content = styled.div`
  width: 400px;
  margin: 20px 0;
  background: var(--color-white);
  border-radius: 8px;
  color: var(--color-dark);
`;
