import styled from "styled-components";
import useGetTier from "../../../../queries/useGetTier";
import RankGame from "./RankGame";

function Rank({ id }: { id: string }) {
  const { isSuccess, data } = useGetTier(id);

  if (isSuccess) {
    const [freeRank, soloRank] = data;

    return (
      <S_Aside>
        <RankGame type={soloRank} />
        <RankGame type={freeRank} />
      </S_Aside>
    );
  }
}

export default Rank;

const S_Aside = styled.aside`
  margin-right: 10px;
`;
