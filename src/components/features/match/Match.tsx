import styled from "styled-components";
import { useRecoilValue } from "recoil";
import useGetMatchesInfoQuery from "../../../queries/useGetMatchesInfo";
import {
  championAtom,
  itemAtom,
  runeAtom,
  spellAtom,
} from "../../../atoms/atom";
import { Participants } from "../../../types/types";
import ChampionImg from "../../common/ChampionImg";
import SmallIconImg from "../../common/SmallIconImg";
import { killTypes } from "../../../constant/constant";
import {
  calculateDays,
  calculateMinutes,
} from "../../../utils/calculatePlayTime";
import KillTypesTag from "../../common/KillTypesTag";
import MatchedAllPlayers from "./MatchedAllPlayers";
import { useParams } from "react-router-dom";
import { findChampion } from "../../../utils/findChampions";
import open from "@/assets/Open.png";
import close from "@/assets/Close.png";
import cursorHover from "@/assets/CursorHover.png";
import { useState } from "react";
import MatchDetail from "@/components/features/match/MatchDetail";
import { findSubRune, findMainRune } from "@/utils/findRune";

function Match({ matchId }: { matchId: string }) {
  const { isSuccess, data } = useGetMatchesInfoQuery(matchId);
  const { summoner = "" } = useParams<{ summoner?: string }>();
  const spells = useRecoilValue(spellAtom);
  const runes = useRecoilValue(runeAtom);
  const items = useRecoilValue(itemAtom);
  const champions = useRecoilValue(championAtom);
  const [buttonState, setButtonState] = useState(false);

  if (isSuccess) {
    const days = calculateDays(data.info.gameEndTimestamp);
    const minutes = calculateMinutes(data.info.gameDuration);

    const [player] = data.info.participants.filter(
      (key: Participants) =>
        key.summonerName.toLowerCase() === summoner.toLowerCase()
    );
    const champion = findChampion(champions[0], player.championId);
    const kda = `${player.kills} / ${player.deaths} / ${player.assists}`;
    const cs = `CS ${player.neutralMinionsKilled + player.totalMinionsKilled}`;
    const playerKillType = killTypes.find(type => player[type] > 0);
    const [spell1, spell2] = [player.summoner1Id, player.summoner2Id].map(
      spellId => spells.find(spell => Number(spell.key) === spellId)
    );

    const playerMainRune = player.perks.styles[0].selections[0].perk;
    const playerSubRune = player.perks.styles[1].selections[0].perk;
    const mainRune = findMainRune(playerMainRune, runes);
    const subRune = findSubRune(playerSubRune, runes);

    return (
      <>
        <S_Article className={player.win ? "win" : "lose"}>
          <S_DivLeft>
            <div>
              <p className="left_text">
                {data.info.gameMode === "CLASSIC"
                  ? "랭크"
                  : data.info.gameMode === "ARAM"
                  ? "칼바람"
                  : "일반"}
              </p>
              <p>{days}</p>
            </div>
            <span></span>
            <div>
              <p className="left_text">{player.win ? "승리" : "패배"}</p>
              <p>{minutes}</p>
            </div>
          </S_DivLeft>
          <S_DivMid>
            <div className="mid_flex_col">
              <div className="mid_flex">
                <ChampionImg
                  champion={champion[0]}
                  champLevel={player.champLevel}
                />
                <div className="flex spell">
                  <div>
                    <SmallIconImg spell={spell1} />
                    <SmallIconImg spell={spell2} />
                  </div>
                  <div>
                    <SmallIconImg mainRune={mainRune} />
                    <SmallIconImg subRune={subRune?.icon} />
                  </div>
                </div>
                <div className="mid_text_box">
                  <p className="mid_text">{kda}</p>
                  <p>
                    {player.challenges &&
                      `평점 ${player.challenges.kda.toFixed(2)}`}
                  </p>
                  <p>{cs}</p>
                </div>
              </div>
              <div className="flex item">
                {Array.from({ length: 6 }, (_, idx) => idx).map(itemIndex => {
                  return (
                    <SmallIconImg
                      key={`item${itemIndex}`}
                      item={items[0][player[`item${itemIndex}`]]}
                    />
                  );
                })}
                <KillTypesTag playerKillType={playerKillType} />
              </div>
            </div>
          </S_DivMid>
          <MatchedAllPlayers allPlayers={data.info.participants} />
          <S_Button className="button">
            <figure>
              <img
                src={buttonState ? close : open}
                alt={` icon`}
                onClick={() => setButtonState(prev => !prev)}
              />
            </figure>
          </S_Button>
        </S_Article>
        {buttonState && <MatchDetail data={data.info.participants} />}
      </>
    );
  }
}

export default Match;

const S_Article = styled.article`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  border-radius: 8px;
  padding: 10px;
  color: var(--color-gray);

  .flex {
    display: flex;
  }

  &.win {
    background: var(--color-blue1);
    .left_text {
      color: var(--color-blue2);
    }
  }
  &.lose {
    background: var(--color-red1);
    .left_text {
      color: var(--color-red2);
    }
  }
`;

const S_DivLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p:first-child,
  p:nth-child(3) {
    font-weight: 600;
  }

  span {
    width: 50px;
    border-bottom: 1px solid var(--color-gray);
  }
`;

const S_DivMid = styled.div`
  display: flex;
  padding-left: 55px;

  .mid_flex_col {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .item {
      width: 250px;
      padding-top: 10px;
    }
  }

  .mid_flex {
    display: flex;
    align-items: center;

    .spell {
      padding: 0 10px;
    }
  }

  .mid_text_box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .mid_text {
      color: var(--color-dark);
      font-size: 14px;
      font-weight: 600;
      margin-left: 10px;
    }
  }
`;

const S_Button = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 10px;

  figure {
    position: relative;

    img {
      width: 30px;
    }

    img:hover {
      cursor: url(${cursorHover}) 0 0, auto;
    }
  }
`;
