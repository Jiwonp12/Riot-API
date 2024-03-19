import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { freeRankAtom, soloRankAtom } from "@/atoms/atom";
import { Challenger } from "@/types/types";
import RankedPlayer from "@/components/features/main/RankedPlayer";

const Ranking = () => {
  const [soloRank] = useRecoilValue(soloRankAtom);
  const [freeRank] = useRecoilValue(freeRankAtom);
  console.log(freeRank);

  return (
    <S_Section>
      <b className="b_header">솔로랭크 랭킹 TOP 10</b>
      {soloRank.slice(0, 10).map((player: Challenger, idx: number) => (
        <RankedPlayer
          key={player.summonerId}
          summonerId={player.summonerId}
          player={player}
          idx={idx}
        />
      ))}
    </S_Section>
  );
};

export default Ranking;

const S_Section = styled.section`
  width: 800px;
  background: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  padding: 20px;
  margin: 60px 0 20px 0;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);

  .b_header {
    font-size: 20px;
    color: var(--color-dark);
    margin-bottom: 20px;
  }
`;
