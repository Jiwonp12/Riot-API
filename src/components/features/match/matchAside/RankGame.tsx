import styled from "styled-components";
import { RankType } from "../../../../types/types";
import TierImg from "../../../common/TierImg";

function RankGame({ type }: { type: RankType }) {
  if (type) {
    const winRate = Math.ceil((type.wins / (type.wins + type.losses)) * 100);
    const queueType =
      type.queueType === "RANKED_SOLO_5x5" ? "솔로 랭크" : "자유 랭크";

    return (
      <S_Content>
        <p className="queue">{queueType}</p>
        <div className="flex">
          <TierImg tier={type.tier} />
          <div className="rank_lp">
            <p>{`${type.tier} ${type.rank}`}</p>
            <p>{`${type.leaguePoints} LP`}</p>
          </div>
          <div className="win_rate">
            <p>{`${type.wins}승 ${type.losses}패`}</p>
            <p>{`승률 ${winRate}%`}</p>
          </div>
        </div>
      </S_Content>
    );
  } else {
    return <></>;
  }
}

export default RankGame;

const S_Content = styled.div`
  width: 300px;
  margin: 10px 0;
  background: var(--color-white);
  border-radius: 8px;
  color: var(--color-dark);

  .queue {
    text-align: center;
    border-bottom: 1px solid var(--color-white2);
    padding: 8px 0;
  }

  .flex {
    padding: 10px;
    display: flex;
    align-items: center;

    .rank_lp {
      margin: 0 10px;

      p:first-child {
        font-size: 14px;
        font-weight: 600;
      }
    }
    .win_rate {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
`;
