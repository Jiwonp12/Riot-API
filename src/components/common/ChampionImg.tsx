import styled from "styled-components";
import { Tooltip } from "react-tooltip";
import { gameVersion } from "../../constant/constant";
import { ChampionType } from "../../types/types";
import { useNavigate } from "react-router";
import cursorHover from "@/assets/CursorHover.png";

function ChampionImg({
  champion,
  champLevel,
  type,
}: {
  champion: ChampionType;
  champLevel?: number;
  type?: string;
}) {
  const navigate = useNavigate();
  const cssType =
    type === "rotation"
      ? "rotation"
      : type === "all"
      ? "all"
      : type === "small"
      ? "small"
      : "any";

  const handleClick = (champion: string) => {
    navigate(`/champions/${champion}`);
  };

  return (
    <S_figure className={cssType}>
      {(cssType === "small" || cssType === "any") && <span>{champLevel}</span>}
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/${gameVersion}/img/champion/${champion.id}.png`}
        alt={`${champion.name} icon`}
        data-tooltip-id={champion.id}
        data-tooltip-place="top"
        data-tooltip-variant="dark"
        data-tooltip-delay-show={100}
        className={cssType}
        onClick={() => handleClick(champion.id)}
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
    bottom: ${({ className }) => (className === "small" ? "-3px" : "0")};
    right: ${({ className }) => (className === "small" ? "" : "0")};
    left: ${({ className }) => (className === "small" ? "-8px" : "")};
    color: var(--color-white);
  }

  img {
    width: ${({ className }) =>
      className === "rotation"
        ? "90px"
        : className === "all"
        ? "60px"
        : className === "small"
        ? "40px"
        : "70px"};
    border-radius: ${({ className }) =>
      className === "rotation" || className === "all" ? "4px" : "50%"};
    margin: ${({ className }) =>
      className === "rotation"
        ? "0 10px"
        : className === "all"
        ? "0 1.7px"
        : "0"};
    box-shadow: ${({ className }) =>
      className === "rotation" || className === "all"
        ? " 0 2px 2px 0 rgba(0, 0, 0, 0.19)"
        : ""};
  }

  img:hover {
    cursor: url(${cursorHover}) 0 0, auto;
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
