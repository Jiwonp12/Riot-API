import styled from "styled-components";
import useGetSummonerBySummonerId from "./../../../queries/useGetSummonerBySummonerId";
import { Challenger } from "@/types/types";
import { gameVersion } from "@/constant/constant";
import cursorHover from "@/assets/CursorHover.png";

const RankedPlayer = ({
  summonerId,
  player,
  idx,
}: {
  summonerId: string;
  player: Challenger;
  idx: number;
}) => {
  const { isSuccess, data } = useGetSummonerBySummonerId(summonerId);

  if (isSuccess) {
    return (
      <S_Article>
        <p>{idx + 1}</p>
        <figure>
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/${gameVersion}/img/profileicon/${data.profileIconId}.png`}
            alt="summoner icon"
          />
        </figure>
        <b>{data.name}</b>
        <p>lv{data.summonerLevel}</p>
        <p>점수{player.leaguePoints}</p>
        <p>승{player.wins}</p>
        <p>패{player.losses}</p>
      </S_Article>
    );
  }
};

export default RankedPlayer;

const S_Article = styled.article`
  width: 100%;
  display: flex;
  align-items: center;

  figure {
    position: relative;
  }

  figure > img {
    width: 40px;
    border-radius: 50%;
  }

  b {
    color: var(--color-dark);
  }

  &:hover {
    cursor: url(${cursorHover}) 0 0, auto;
  }
`;
