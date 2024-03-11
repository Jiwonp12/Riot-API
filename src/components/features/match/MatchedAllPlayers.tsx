import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { AllPlayersType } from "../../../types/types";
import SmallIconImg from "../../common/SmallIconImg";
import { findRotation } from "@/utils/findChampions";
import { championAtom } from "@/atoms/atom";

function MatchedAllPlayers({ allPlayers }: { allPlayers: AllPlayersType[] }) {
  const champions = useRecoilValue(championAtom);
  const blueTeam = allPlayers.slice(0, 5);
  const redTeam = allPlayers.slice(5);

  const fixName = (name: string) =>
    name.length > 7 ? name.substring(0, 7) + ".." : name;

  return (
    <S_Div>
      <div className="team">
        {blueTeam.map((player: AllPlayersType) => (
          <div
            className="img_with_name"
            key={`${player.championName}+${player.goldEarned}`}
          >
            <SmallIconImg
              champion={findRotation(champions[0], [player.championId])}
            />
            <div className="name">
              <p>{fixName(player.riotIdGameName)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="team">
        {redTeam.map((player: AllPlayersType) => (
          <div
            className="img_with_name"
            key={`${player.championName}+${player.goldEarned}`}
          >
            <SmallIconImg
              champion={findRotation(champions[0], [player.championId])}
            />
            <div className="name">
              <p>{fixName(player.riotIdGameName)}</p>
            </div>
          </div>
        ))}
      </div>
    </S_Div>
  );
}

export default MatchedAllPlayers;

const S_Div = styled.div`
  display: flex;
  margin-left: 20px;

  .team {
    display: flex;
    flex-direction: column;
    padding-left: 12px;

    .img_with_name {
      display: flex;
      align-items: center;

      .name {
        width: 130px;
        height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      p {
        margin-left: 4px;
      }
    }
  }
`;
