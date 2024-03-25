import styled from "styled-components";
import useGetSummonerBySummonerId from "./../../../queries/useGetSummonerBySummonerId";
import { Challenger } from "@/types/types";
import { gameVersion } from "@/constant/constant";
import cursorHover from "@/assets/CursorHover.png";
import ProgressBar from "@/components/common/ProgressBar";
import { useNavigate } from "react-router";
import useGetSummonerByAccountId from "@/queries/useGetSummonerByAccountId";

const RankedPlayer = ({
  summonerId,
  player,
  idx,
}: {
  summonerId: string;
  player: Challenger;
  idx: number;
}) => {
  const { isLoading, isSuccess, data } = useGetSummonerBySummonerId(summonerId);
  const {
    isLoading: tagIsLoading,
    isSuccess: tagIsSuccess,
    data: tagData,
  } = useGetSummonerByAccountId(data?.puuid, data);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/search/summoners/${tagData.gameName}/${tagData.tagLine}`);
  };

  if (isLoading && tagIsLoading) return <S_Loading />;

  if (isSuccess && tagIsSuccess) {
    return (
      <S_Li onClick={handleClick}>
        <p className="p_idx w_50">{idx + 1}</p>
        <div className="w_380">
          <figure>
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/${gameVersion}/img/profileicon/${data.profileIconId}.png`}
              alt="summoner icon"
            />
          </figure>
          <b>{tagData.gameName}</b>
          <p className="p_tag">{tagData.tagLine}</p>
        </div>
        <p className="p_lv w_50">{data.summonerLevel}</p>
        <p className="w_80">{player.leaguePoints} LP</p>
        <div className="w_240">
          <ProgressBar
            num={player.wins}
            max={player.wins + player.losses}
            type="win"
          />
        </div>
      </S_Li>
    );
  }
};

export default RankedPlayer;

const S_Li = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  border-top: 1px solid var(--color-white3);
  padding: 4px 0;

  .p_idx {
    color: var(--color-gray);
    justify-content: center;
  }

  .p_tag {
    margin-left: 8px;
    color: var(--color-blue2);
  }

  figure {
    width: 40px;
    position: relative;
    display: flex;
    margin-right: 10px;
  }

  figure > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
  }

  b {
    color: var(--color-dark);
  }

  &:hover {
    cursor: url(${cursorHover}) 0 0, auto;
    background: var(--color-white2);
  }

  .p_lv {
    justify-content: flex-start;
  }

  .w_50 {
    display: flex;
    width: 50px;
  }
  .w_80 {
    display: flex;
    justify-content: flex-end;
    width: 80px;
  }
  .w_240 {
    display: flex;
    justify-content: center;
    width: 240px;
  }
  .w_380 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 380px;
  }
`;

const S_Loading = styled.li`
  width: 100%;
  height: 61px;
  display: flex;
  align-items: center;
  border-top: 1px solid var(--color-white3);
  padding: 10px 0;
`;
