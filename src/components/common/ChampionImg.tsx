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
  return (
    <S_figure className={champLevel === 0 ? "rotation" : "small_icon"}>
      {champLevel === 0 || <span>{champLevel}</span>}
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/${gameVersion}/img/champion/${champion.id}.png`}
        alt={`${champion.name} icon`}
        data-tooltip-id={champion.id}
        data-tooltip-place="top"
        data-tooltip-variant="dark"
        data-tooltip-delay-show={100}
        className={champLevel === 0 ? "rotation" : "small_icon"}
      />
      <S_Tooltip id={champion.id} style={{ borderRadius: "4px" }} opacity={1}>
        <div>
          <b className="champion_name">{champion.name}</b>
        </div>
      </S_Tooltip>
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
    border-radius: 50%;
    bottom: 0;
    right: 0;
    color: var(--color-white);
  }

  img {
    width: ${({ className }) => (className === "rotation" ? "90px" : "70px")};
    border-radius: ${({ className }) =>
      className === "rotation" ? "4px" : "50%"};
    margin: ${({ className }) => (className === "rotation" ? "0 10px" : "0")};
    box-shadow: ${({ className }) =>
      className === "rotation" ? " 0 2px 2px 0 rgba(0, 0, 0, 0.19)" : ""};
    cursor: pointer;
  }
`;

const S_Tooltip = styled(Tooltip)`
  z-index: 10;
  div {
    padding: 2px;

    .champion_name {
      color: var(--color-white2);
    }
  }
`;
