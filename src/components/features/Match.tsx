import styled from "styled-components";
import { useRecoilValue } from "recoil";
import useGetMatchesInfoQuery from "../../queries/useGetMatchesInfo";
import { summonerAtom } from "../../atoms/atom";
import { Participants } from "../../types/types";
import ChampionImg from "../common/ChampionImg";
import ItemImg from "../common/ItemImg";

function Match({ matchId }: { matchId: string }) {
  const { isLoading, isSuccess, data, error } = useGetMatchesInfoQuery(matchId);
  const summoner = useRecoilValue(summonerAtom);

  if (isSuccess) {
    const hours = Math.floor(
      (new Date().getTime() - data.info.gameEndTimestamp) / (1000 * 60 * 60)
    );
    const days = Math.floor(hours / 24);
    const minute = Math.floor(data.info.gameDuration / 60);
    const second = data.info.gameDuration % 60;
    const player = data.info.participants.filter(
      (key: Participants) =>
        key.summonerName.toLowerCase() === summoner.toLowerCase()
    );
    const kda = `${player[0].kills}/${player[0].deaths}/${player[0].assists}`;
    const rating = (
      (player[0].kills + player[0].assists) /
      player[0].deaths
    ).toFixed(2);

    console.log(player);
    return (
      <S_Article className={player[0].win ? "win" : "lose"}>
        <div>
          <p>
            {data.info.gameMode === "CLASSIC"
              ? "랭크"
              : data.info.gameMode === "ARAM"
              ? "칼바람"
              : "일반"}
          </p>
          <p>{hours < 24 ? `${hours}시간 전` : `${days}일 전`}</p>
          <p>{player[0].win ? "승리" : "패배"}</p>
          <p>{`${minute}분 ${second}초`}</p>
        </div>
        <div>
          <ChampionImg champion={player[0].championName} />
          <S_Div>
            {Array.from({ length: 6 }, (_, idx) => idx).map(itemIndex => {
              return (
                <ItemImg
                  key={`item${itemIndex}`}
                  item={player[0][`item${itemIndex}`]}
                />
              );
            })}
          </S_Div>
        </div>
        <div>
          <p>{kda}</p>
          <p>{rating}</p>
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
