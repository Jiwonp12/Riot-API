import styled from "styled-components";
import AllChampions from "@/components/features/detail/AllChampions";
import ChampionDetail from "@/components/features/detail/ChampionDetail";

function Champions() {
  return (
    <S_Main>
      <ChampionDetail />
      <AllChampions />
    </S_Main>
  );
}

export default Champions;

const S_Main = styled.main`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  background: var(--color-bg);
`;
