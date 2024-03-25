import styled from "styled-components";
import { Player } from "../../types/types";
import { gameVersion } from "../../constant/constant";
import { calculateDays } from "../../utils/calculatePlayTime";

function SearchedPlayerHeader({
  data,
  gameName,
  tagLine,
}: {
  data: Player;
  gameName: string;
  tagLine: string;
}) {
  const days = calculateDays(data.revisionDate);

  return (
    <S_Section>
      <div className="div_content">
        <figure>
          <span>{data.summonerLevel}</span>
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/${gameVersion}/img/profileicon/${data.profileIconId}.png`}
            alt="summoner icon"
          />
        </figure>
        <div className="flex_col">
          <div className="div_flex">
            <strong>{gameName}</strong>
            <p className="p_tag">#{tagLine}</p>
          </div>
          <p className="p_time">last play: {days}</p>
        </div>
      </div>
    </S_Section>
  );
}

export default SearchedPlayerHeader;

const S_Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  background: var(--color-white);
  border: 1px solid var(--color-white3);

  .div_content {
    width: 953px;
    display: flex;
  }

  figure {
    position: relative;
  }

  figure > span {
    position: absolute;
    padding: 4px;
    background: var(--color-dark);
    border-radius: 8px;
    bottom: -5px;
    right: -10px;
    color: var(--color-white);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);
  }

  figure > img {
    width: 100px;
    border-radius: 20px;
    border: 2px solid var(--color-white);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);
  }

  .flex_col {
    display: flex;
    flex-direction: column;
    margin: 0 30px;

    .div_flex {
      display: flex;
      align-items: center;
      margin-bottom: 8px;

      strong {
        font-size: 24px;
        margin-right: 10px;
      }
      .p_tag {
        font-size: 24px;
        color: var(--color-blue2);
      }
    }

    .p_time {
      color: var(--color-gray);
    }
  }
`;
