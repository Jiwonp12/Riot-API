import styled from "styled-components";
import { ChampionDetailType } from "@/types/types";
import { useState } from "react";

function SkinImg({ champion }: { champion: ChampionDetailType }) {
  const [skinState, setSkinState] = useState(champion.skins[0]);

  const handleClick = () => {
    const curIdx = champion.skins.indexOf(skinState);
    const nextIdx = (curIdx + 1) % champion.skins.length;
    setSkinState(champion.skins[nextIdx]);
  };

  return (
    <S_figure>
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_${skinState.num}.jpg`}
        alt={`${
          skinState.name === "default" ? champion.name : skinState.name
        } img`}
        onClick={handleClick}
      />
    </S_figure>
  );
}

export default SkinImg;

const S_figure = styled.figure`
  position: relative;

  img {
    width: 308px;
    height: 560px;
    border-radius: 8px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);
    cursor: url(/src/assets/cursorHover.png) 0 0, auto;
  }
`;
