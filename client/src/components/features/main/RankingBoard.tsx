import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { useState } from "react";
import { freeRankAtom, soloRankAtom } from "@/atoms/atom";
import { Challenger } from "@/types/types";
import RankedPlayer from "@/components/features/main/RankedPlayer";
import cursorHover from "@/assets/CursorHover.png";
import next from "@/assets/Next.svg";
import prev from "@/assets/Prev.svg";

const RankingBoard = ({ type }: { type: string }) => {
  const [soloRank] = useRecoilValue(soloRankAtom);
  const [freeRank] = useRecoilValue(freeRankAtom);
  const [clickedList, setClickedList] = useState(true);
  const clickedRank = clickedList ? soloRank : freeRank;

  const [pageState, setPageState] = useState(1);
  const startIdx = (pageState - 1) * 10;
  const endIdx = startIdx + 10;
  const players = clickedRank.slice(startIdx, endIdx);

  const handleRankType = () => {
    setClickedList(prev => !prev);
  };

  const maxPage = Math.ceil(clickedRank.length / 10);

  const handlePageChange = (page: number) => {
    setPageState(page);
  };

  const handleNextButton = () => {
    setPageState(prev => Math.min(prev + 10, maxPage));
  };

  const handlePrevButton = () => {
    setPageState(prev => Math.max(prev - 10, 1));
  };

  const buttons = Array.from(
    { length: Math.min(maxPage, 10) },
    (_, idx) => idx + 1
  );

  return (
    <>
      <S_Section>
        {type === "main" ? (
          <b className="b_header">솔로랭크 랭킹 TOP 10</b>
        ) : (
          <div className="div_button">
            <b
              className={clickedList ? "b_solo active" : "b_solo"}
              onClick={handleRankType}
            >
              솔로랭크
            </b>
            <b
              className={!clickedList ? "b_free active" : "b_free"}
              onClick={handleRankType}
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
            players
              .slice(0, 10)
              .map((player: Challenger, idx: number) => (
                <RankedPlayer
                  key={player.summonerId}
                  summonerId={player.summonerId}
                  player={player}
                  idx={idx + startIdx}
                />
              ))}
        </ul>
      </S_Section>
      <S_Buttons page={pageState} max={maxPage}>
        <figure className="figure_prev" onClick={handlePrevButton}>
          <img src={prev} alt="prev button" />
        </figure>
        <div className="div_buttons">
          {buttons.map(page => (
            <button
              className={
                page === pageState ? "button_page active" : "button_page"
              }
              key={page}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
        </div>
        <figure className="figure_next" onClick={handleNextButton}>
          <img src={next} alt="next button" />
        </figure>
      </S_Buttons>
    </>
  );
};

export default RankingBoard;

const S_Section = styled.section`
  width: 800px;
  height: 570.8px;
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
    padding: 15px 0;
    border-bottom: 1px solid var(--color-white3);
  }

  .b_solo,
  .b_free {
    color: var(--color-gray);
    font-size: 14px;
    padding: 15px;
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

const S_Buttons = styled.div<{ page: number; max: number }>`
  width: 800px;
  display: flex;
  justify-content: space-between;

  .div_buttons {
    display: flex;

    .button_page {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border-radius: 4px;
      background: var(--color-white);
      color: var(--color-gray);
      border: 1px solid var(--color-gray);
      margin: 0 4px;
      cursor: url(${cursorHover}) 0 0, auto;
    }

    .button_page:hover {
      background: var(--color-white3);
    }

    .active {
      background-color: var(--color-blue2);
      color: var(--color-white);
    }
    .active:hover {
      background-color: var(--color-blue2);
    }
  }

  .figure_prev,
  .figure_next {
    width: 28px;
    height: 28px;
    border-radius: 4px;
    background: var(--color-white);
    border: 1px solid var(--color-gray);
    cursor: url(${cursorHover}) 0 0, auto;

    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }
  }

  .figure_prev {
    visibility: ${props => (props.page < 11 ? "hidden" : "visible")};
  }

  .figure_next {
    visibility: ${props =>
      Math.floor(props.page / 10) < Math.floor(props.max / 10)
        ? "visible"
        : "hidden"};
  }

  .figure_prev:hover,
  .figure_next:hover {
    background: var(--color-white3);
  }
`;
