import styled from "styled-components";
import { ChampionDetailType } from "@/types/types";

function SkinImg({ champion }: { champion: ChampionDetailType }) {
  return (
    <S_figure>
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
        alt={`${champion.name} img`}
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
  }
`;
