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
      <div>
        <strong>{data.name}</strong>
        <span>
          last play:
          {days}
        </span>
      </div>
    </S_Section>
  );
}

export default SearchedPlayerHeader;

const S_Section = styled.section`
  display: flex;

  figure {
    position: relative;
  }
  figure > span {
    position: absolute;
    padding: 4px;
    background: var(--color-dark);
    border-radius: 4px;
    bottom: 10px;
    right: 8px;
    color: var(--color-white);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);
  }
  figure > img {
    width: 200px;
    border-radius: 20px;
    border: 3px solid var(--color-white);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);
  }

  strong {
    font-size: 24px;
  }
`;