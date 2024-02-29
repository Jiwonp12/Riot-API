import styled from "styled-components";
import { useRecoilValue } from "recoil";
import useGetMatchesInfoQuery from "../../../queries/useGetMatchesInfo";
import { runeAtom, spellAtom, summonerAtom } from "../../../atoms/atom";
import { Participants } from "../../../types/types";
import ChampionImg from "../../common/ChampionImg";
import SmallIconImg from "../../common/SmallIconImg SmallIconImg";
import { killTypes } from "../../../constant/constant";
import { findRune } from "../../../utils/findRune";

function Match({ matchId }: { matchId: string }) {
  const { isLoading, isSuccess, data, error } = useGetMatchesInfoQuery(matchId);
  const summoner = useRecoilValue(summonerAtom);
  const spells = useRecoilValue(spellAtom);
  const runes = useRecoilValue(runeAtom);

  if (isSuccess) {
    const hours = Math.floor(
      (new Date().getTime() - data.info.gameEndTimestamp) / (1000 * 60 * 60)
    );
    const days = Math.floor(hours / 24);
    const minutes = Math.floor(data.info.gameDuration / 60);
    const seconds = data.info.gameDuration % 60;
    const [player] = data.info.participants.filter(
      (key: Participants) =>
        key.summonerName.toLowerCase() === summoner.toLowerCase()
    );
    const kda = `${player.kills}/${player.deaths}/${player.assists}`;
    const playerKillType = killTypes.find(type => player[type] > 0);
    const [spell1, spell2] = [player.summoner1Id, player.summoner2Id].map(
      spellId => spells.find(spell => Number(spell.key) === spellId)
    );

    const playerMainRune = player.perks.styles[0].selections[0].perk;
    const playerSubRune = player.perks.styles[1].selections[0].perk;
    const mainRune = findRune(playerMainRune, runes);
    const subRune = findRune(playerSubRune, runes);

    return (
      <S_Article className={player.win ? "win" : "lose"}>
        <div>
          <p>
            {data.info.gameMode === "CLASSIC"
              ? "랭크"
              : data.info.gameMode === "ARAM"
              ? "칼바람"
              : "일반"}
          </p>
          <p>{hours < 24 ? `${hours}시간 전` : `${days}일 전`}</p>
          <p>{player.win ? "승리" : "패배"}</p>
          <p>{`${minutes}분 ${seconds}초`}</p>
        </div>
        <div>
          <S_Div>
            <ChampionImg
              champion={player.championName}
              champLevel={player.champLevel}
            />
            <SmallIconImg spell={spell1} />
            <SmallIconImg spell={spell2} />
            <SmallIconImg mainRune={mainRune?.icon} />
            <SmallIconImg subRune={subRune?.icon} />
          </S_Div>
          <S_Div>
            {Array.from({ length: 6 }, (_, idx) => idx).map(itemIndex => {
              return (
                <SmallIconImg
                  key={`item${itemIndex}`}
                  item={player[`item${itemIndex}`]}
                />
              );
            })}
          </S_Div>
        </div>
        <div>
          <p>{kda}</p>
          <p>{player.challenges.kda.toFixed(2)}</p>
          {playerKillType && (
            <p>
              {playerKillType === "pentaKills"
                ? "펜타킬"
                : playerKillType === "quadraKills"
                ? "쿼드라킬"
                : playerKillType === "tripleKills"
                ? "트리플킬"
                : "더블킬"}
            </p>
          )}
        </div>
      </S_Article>
    );
  }
}

export default Match;

const S_Article = styled.article`
  display: flex;
  margin: 20px 0;

  &.win {
    background: #d3e0fc;
  }
  &.lose {
    background: #ffd4db;
  }
`;

const S_Div = styled.div`
  display: flex;
`;
