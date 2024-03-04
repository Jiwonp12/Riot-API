import styled from "styled-components";
import useGetTier from "../../../queries/useGetTier";
import RankGame from "./RankGame";

function Rank({ id }: { id: string }) {
  const { isLoading, isSuccess, data, error } = useGetTier(id);

  // if (isLoading) console.log("loading");

  // if (error) console.log("error");

  if (isSuccess) {
    const [soloRank, freeRank] = data;
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
  margin-right: 20px;
`;
