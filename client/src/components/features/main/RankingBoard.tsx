import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { useState } from "react";
import { freeRankAtom, soloRankAtom } from "@/atoms/atom";
import { Challenger } from "@/types/types";
import RankedPlayer from "@/components/features/main/RankedPlayer";
import cursorHover from "@/assets/CursorHover.png";

const RankingBoard = ({ type }: { type: string }) => {
  const [soloRank] = useRecoilValue(soloRankAtom);
  const [freeRank] = useRecoilValue(freeRankAtom);
  const [clickedList, setClickedList] = useState(true);
  const clickedRank = clickedList ? soloRank : freeRank;

  const handleClick = () => {
    setClickedList(prev => !prev);
  };

  return (
    <S_Section>
      {type === "main" ? (
        <b className="b_header">솔로랭크 랭킹 TOP 10</b>
      ) : (
        <div className="div_button">
          <b
            className={clickedList ? "b_solo active" : "b_solo"}
            onClick={handleClick}
          >
            솔로랭크
          </b>
          <b
            className={!clickedList ? "b_free active" : "b_free"}
            onClick={handleClick}
          >
            자유랭크
          </b>
        </div>
      )}
      <div className="div_header">
        <b className="b_idx w_50">#</b>
        <b className="w_380">소환사</b>
        <b className="w_50">LV</b>
        <b className="b_lv w_80">LP</b>
        <b className="w_240">전적</b>
      </div>
      <ul>
        {clickedRank &&
          clickedRank
            .slice(0, 10)
            .map((player: Challenger, idx: number) => (
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

export default RankingBoard;

const S_Section = styled.section`
  width: 800px;
  background: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  margin: 20px 0 20px 0;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);

  ul {
    width: 100%;
  }

  .b_header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 14px;
    color: var(--color-dark);
    padding: 15px 0;
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

  .div_button {
    width: 100%;
    padding: 10px 0;
    border-bottom: 1px solid var(--color-white3);
  }

  .b_solo,
  .b_free {
    color: var(--color-gray);
    font-size: 14px;
    padding: 10px;
  }

  .b_solo:hover,
  .b_free:hover {
    cursor: url(${cursorHover}) 0 0, auto;
    background: var(--color-white2);
    border-radius: 8px;
  }

  .active {
    background: var(--color-blue1);
    color: var(--color-blue2);
    border-radius: 8px;
  }

  .active:hover {
    background: var(--color-blue1);
  }
`;
