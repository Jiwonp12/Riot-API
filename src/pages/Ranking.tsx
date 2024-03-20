import styled from "styled-components";
import RankingBoard from "@/components/features/main/RankingBoard";

function Ranking() {
  return (
    <S_Main>
      <RankingBoard type="ranking" />
    </S_Main>
  );
}

export default Ranking;

const S_Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-bg);
  padding: 20px 100px;
`;
