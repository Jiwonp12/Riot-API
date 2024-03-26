import styled from "styled-components";
import { ChampionDetailType } from "@/types/types";
import { useState } from "react";
import cursorHover from "@/assets/CursorHover.png";

function SkinImg({ champion }: { champion: ChampionDetailType }) {
  const [skinState, setSkinState] = useState(champion.skins[0]);

  const handleClick = () => {
    const curIdx = champion.skins.indexOf(skinState);
    const nextIdx = (curIdx + 1) % champion.skins.length;
    setSkinState(champion.skins[nextIdx]);
  };

  return (
    <S_figure onClick={handleClick}>
      <span className="span_count">
        <span className="span_active">
          {champion.skins.indexOf(skinState) + 1}
        </span>
        <span>{` / ${champion.skins.length}`}</span>
      </span>
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_${skinState.num}.jpg`}
        alt={`${
          skinState.name === "default" ? champion.name : skinState.name
        } img`}
      />
      <span className="span_name">
        {skinState.name === "default" ? champion.name : skinState.name}
      </span>
    </S_figure>
  );
}

export default SkinImg;

const S_figure = styled.figure`
  position: relative;
  width: 150px;
  height: 272.73px;
  cursor: url(${cursorHover}) 0 0, auto;

  &:hover {
    .span_name {
      color: var(--color-bg);
      border: 1px solid var(--color-bg2);
    }
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);
  }

  .span_count {
    display: flex;
    justify-content: center;
    width: 44px;
    position: absolute;
    top: 6px;
    left: 6px;
    padding: 2px;
    color: var(--color-white);
    background: var(--color-dark);
    border: 1px solid var(--color-gray);
    border-radius: 4px;
    font-size: 10px;
    z-index: 1;
    white-space: pre-wrap;

    .span_active {
      color: var(--color-bg);
    }
  }

  .span_name {
    display: flex;
    justify-content: center;
    width: 140px;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    padding: 2px;
    color: var(--color-white);
    background: var(--color-dark);
    border: 1px solid var(--color-gray);
    border-radius: 4px;
    font-size: 10px;
  }
`;
