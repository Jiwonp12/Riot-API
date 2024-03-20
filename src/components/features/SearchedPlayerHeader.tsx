import styled from "styled-components";
import { Player } from "../../types/types";
import { gameVersion } from "../../constant/constant";
import { calculateDays } from "../../utils/calculatePlayTime";

function SearchedPlayerHeader({ data }: { data: Player }) {
  const days = calculateDays(data.revisionDate);

  return (
    <S_Section>
      <figure>
        <span>{data.summonerLevel}</span>
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/${gameVersion}/img/profileicon/${data.profileIconId}.png`}
          alt="summoner icon"
        />
      </figure>
      <div className="flex_col">
        <strong>{data.name}</strong>
        <p className="p_time">last play: {days}</p>
      </div>
    </S_Section>
  );
}

export default SearchedPlayerHeader;

const S_Section = styled.section`
  display: flex;
  padding: 20px 99px;
  background: var(--color-white);
  border: 1px solid var(--color-white3);

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

    strong {
      font-size: 24px;
      margin-bottom: 8px;
    }

    .p_time {
      color: var(--color-gray);
    }
  }
`;
