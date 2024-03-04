import styled from "styled-components";
import { gameVersion } from "../../constant/constant";

function ChampionImg({
  champion,
  champLevel,
}: {
  champion: string;
  champLevel: number;
}) {
  return (
    <S_figure>
      <span>{champLevel}</span>
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/${gameVersion}/img/champion/${champion}.png`}
        alt={`${champion} icon`}
      />
    </S_figure>
  );
}

export default ChampionImg;

const S_figure = styled.figure`
  position: relative;
  span {
    position: absolute;
    padding: 4px;
    background: var(--color-dark);
    border-radius: 4px;
    bottom: 10px;
    right: 8px;
    color: var(--color-white);
  }
  img {
    width: 70px;
    border-radius: 50%;
  }
`;
