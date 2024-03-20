import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { soloRankAtom } from "@/atoms/atom";
import { Challenger } from "@/types/types";
import RankedPlayer from "@/components/features/main/RankedPlayer";

const Ranking = () => {
  const [soloRank] = useRecoilValue(soloRankAtom);

  return (
    <S_Section>
      <b className="b_header">솔로랭크 랭킹 TOP 10</b>
      <div className="div_header">
        <b className="b_idx w_50">#</b>
        <b className="w_380">소환사</b>
        <b className="w_50">LV</b>
        <b className="b_lv w_80">LP</b>
        <b className="w_240">전적</b>
      </div>
      <ul>
        {soloRank.slice(0, 10).map((player: Challenger, idx: number) => (
          <RankedPlayer
            key={player.summonerId}
            summonerId={player.summonerId}
            player={player}
            idx={idx}
          />
        ))}
      </ul>
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
  margin: 60px 0 20px 0;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);

  ul {
    width: 100%;
  }

  .b_header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 20px;
    color: var(--color-dark);
    padding: 20px 0;
    border-bottom: 1px solid var(--color-white3);
  }

  .div_header {
    display: flex;
    width: 100%;
    padding: 10px 0;
  }

  .b_idx {
    justify-content: center;
  }

  .b_lv {
    justify-content: flex-start;
  }

  .w_50 {
    display: flex;
    width: 50px;
  }
  .w_80 {
    display: flex;
    justify-content: flex-end;
    width: 80px;
  }
  .w_240 {
    display: flex;
    justify-content: center;
    width: 240px;
  }
  .w_380 {
    display: flex;
    justify-content: flex-start;
    width: 380px;
  }
`;
