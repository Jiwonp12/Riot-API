import styled from "styled-components";
import useGetTier from "../../../../queries/useGetTier";
import RankGame from "./RankGame";
import useGetAllMastery from "@/queries/useGetAllMastery";
import Mastery from "@/components/features/match/matchAside/Mastery";

function Rank({ id, puuid }: { id: string; puuid: string }) {
  const { isSuccess: tierIsSuccess, data: tierData } = useGetTier(id);
  const { isSuccess: masteryIsSuccess, data: masteryData } =
    useGetAllMastery(puuid);

  if (tierIsSuccess && masteryIsSuccess) {
    const [freeRank, soloRank] = tierData;
    return (
      <S_Aside>
        <RankGame type={soloRank} />
        <RankGame type={freeRank} />
        <Mastery data={masteryData} />
      </S_Aside>
    );
  }
}

export default Rank;

const S_Aside = styled.aside`
  margin-right: 20px;
`;
