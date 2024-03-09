import styled from "styled-components";
import { Tooltip } from "react-tooltip";
import { gameVersion } from "../../constant/constant";
import { ChampionType } from "../../types/types";

function ChampionImg({
  champion,
  champLevel,
}: {
  champion: ChampionType;
  champLevel: number;
}) {
  if (champLevel === 0) {
    return (
      <S_figure>
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/${gameVersion}/img/champion/${champion.id}.png`}
          alt={`${champion.name} icon`}
          data-tooltip-id={champion.id}
          data-tooltip-place="top"
          data-tooltip-variant="dark"
          data-tooltip-delay-show={100}
        />
        <S_Tooltip id={champion.id} style={{ borderRadius: "4px" }} opacity={1}>
          <div>
            <b className="champion_name">{champion.name}</b>
          </div>
        </S_Tooltip>
      </S_figure>
    );
  } else {
    return (
      <S_figure>
        <span>{champLevel}</span>
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/${gameVersion}/img/champion/${champion.id}.png`}
          alt={`${champion.name} icon`}
          data-tooltip-id={champion.id}
          data-tooltip-place="top"
          data-tooltip-variant="dark"
          data-tooltip-delay-show={100}
        />
        <S_Tooltip id={champion.id} style={{ borderRadius: "4px" }} opacity={1}>
          <div>
            <b className="champion_name">{champion.name}</b>
          </div>
        </S_Tooltip>
      </S_figure>
    );
  }
}
export default ChampionImg;

const S_figure = styled.figure`
  position: relative;
  span {
    position: absolute;
    padding: 4px;
    background: var(--color-dark);
    border-radius: 50%;
    bottom: 0;
    right: 0;
    color: var(--color-white);
  }
  img {
    width: 70px;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const S_Tooltip = styled(Tooltip)`
  div {
    padding: 4px;

    .champion_name {
      color: var(--color-white2);
    }
  }
`;
