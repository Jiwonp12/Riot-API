import styled from "styled-components";
import { Tooltip } from "react-tooltip";
import HtmlReactParser from "html-react-parser";
import { gameVersion, runeTypes } from "../../constant/constant";
import { SmallIconImgType } from "../../types/types";

function SmallIconImg({
  item,
  spell,
  mainRune,
  subRune,
  champion,
  skill,
  passive,
}: SmallIconImgType) {
  if (item) {
    return (
      <>
        <S_figure>
          {item !== null && (
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/${gameVersion}/img/item/${item.image.full}`}
              alt={`${item.name} icon`}
              data-tooltip-id={item.name}
              data-tooltip-place="top"
              data-tooltip-variant="dark"
              data-tooltip-delay-show={100}
            />
          )}
        </S_figure>
        <S_Tooltip
          id={item.name}
          style={{ width: "350px", borderRadius: "4px" }}
          opacity={1}
        >
          <div>
            <b className="item_name">{item.name}</b>
            <p className="plain">{item.plaintext}</p>
            <p className="description">{HtmlReactParser(item.description)}</p>
            <p className="gold">{`${item.gold.total}(${item.gold.base})`}</p>
          </div>
        </S_Tooltip>
      </>
    );
  } else if (spell) {
    return (
      <>
        <S_figure>
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/${gameVersion}/img/spell/${spell.id}.png`}
            alt={`${spell.id} icon`}
            data-tooltip-id={spell.name}
            data-tooltip-place="top"
            data-tooltip-variant="dark"
            data-tooltip-delay-show={100}
          />
        </S_figure>
        <S_Tooltip
          id={spell.name}
          style={{ width: "350px", borderRadius: "4px" }}
          opacity={1}
        >
          <div>
            <b className="spell_name">{spell.name}</b>
            <p className="description">{HtmlReactParser(spell.description)}</p>
            <p className="cool_down">{`${spell.cooldownBurn}`}</p>
          </div>
        </S_Tooltip>
      </>
    );
  } else if (mainRune) {
    return (
      <>
        <S_figure>
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/${
              mainRune.icon.split("Styles/")[1]
            }`}
            alt={`${mainRune.name} icon`}
            data-tooltip-id={mainRune.name}
            data-tooltip-place="top"
            data-tooltip-variant="dark"
            data-tooltip-delay-show={100}
          />
        </S_figure>
        <S_Tooltip
          id={mainRune.name}
          style={{ width: "350px", borderRadius: "4px" }}
          opacity={1}
        >
          <div>
            <b className="mainRune_name">{mainRune.name}</b>
            <p className="description">{HtmlReactParser(mainRune.longDesc)}</p>
          </div>
        </S_Tooltip>
      </>
    );
  } else if (subRune) {
    const subRuneValue = runeTypes.find(
      rune => rune.key === subRune.split("/")[2]
    )?.value;
    return (
      <S_figure>
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/${subRuneValue}.png`}
          alt={`${subRuneValue} icon`}
        />
      </S_figure>
    );
  } else if (champion) {
    return (
      <S_figure>
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/${gameVersion}/img/champion/${champion[0].id}.png`}
          alt={`${champion[0].name} icon`}
        />
      </S_figure>
    );
  } else if (skill) {
    return (
      <>
        <S_figure className="large">
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/${gameVersion}/img/spell/${skill.image.full}`}
            alt={`${skill.image.full} icon`}
            data-tooltip-id={skill.id}
            data-tooltip-place="right"
            data-tooltip-variant="dark"
            data-tooltip-delay-show={100}
          />
        </S_figure>
        <S_Tooltip
          id={skill.id}
          style={{ width: "350px", borderRadius: "4px" }}
          opacity={1}
        >
          <div>
            <b className="skill_name">{skill.name}</b>
            <p>{skill.description}</p>
            <p>{skill.cooldown.join("/")}</p>
            <p>
              {skill.costType === "소모값 없음"
                ? "소모값 없음"
                : skill.cost.join("/")}
            </p>
          </div>
        </S_Tooltip>
      </>
    );
  } else if (passive) {
    return (
      <>
        <S_figure className="large">
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/${gameVersion}/img/passive/${passive.image.full}`}
            alt={`${passive.image.full} icon`}
            data-tooltip-id={passive.image.full}
            data-tooltip-place="right"
            data-tooltip-variant="dark"
            data-tooltip-delay-show={100}
          />
        </S_figure>
        <S_Tooltip
          id={passive.image.full}
          style={{ width: "350px", borderRadius: "4px" }}
          opacity={1}
        >
          <div>
            <b className="skill_name">{passive.name}</b>
            <p>{passive.description}</p>
          </div>
        </S_Tooltip>
      </>
    );
  } else {
    return <S_Empty className={skill || passive ? "large" : ""}></S_Empty>;
  }
}
export default SmallIconImg;

const S_figure = styled.figure`
  width: ${({ className }) => (className === "large" ? "80px" : "32px")};
  height: ${({ className }) => (className === "large" ? "80px" : "32px")};
  border: 1px solid var(--color-white);
  margin: 0 1px 0;
  border-radius: 4px;
  box-shadow: ${({ className }) =>
    className === "large" ? " 0 2px 2px 0 rgba(0, 0, 0, 0.19)" : ""};

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
`;

const S_Empty = styled.figure`
  width: ${({ className }) => (className === "large" ? "80px" : "32px")};
  height: ${({ className }) => (className === "large" ? "80px" : "32px")};
  border: 1px solid var(--color-white);
  margin: 0 1px 0;
  border-radius: 4px;
  background: var(--color-gray);
`;

const S_Tooltip = styled(Tooltip)`
  div {
    display: flex;
    flex-direction: column;
    padding: 4px;

    .item_name,
    .cool_down,
    .skill_name {
      color: var(--color-item);
    }

    .spell_name,
    .mainRune_name {
      color: var(--color-bg);
    }

    .gold {
      color: var(--color-bg);
    }
  }
`;
