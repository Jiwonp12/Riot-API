import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { summonerAtom } from "../atoms/atom";
import useGetSummonerQuery from "../queries/useGetSummonerQuery";
import Matches from "../components/features/Matches";

function Search() {
  const summoner = useRecoilValue(summonerAtom);
  const { isLoading, isSuccess, data, error } = useGetSummonerQuery(summoner);

  // if (isLoading) console.log("loading");

  // if (error) console.log("error");

  if (isSuccess) {
    // console.log(data);
    const time = Math.floor(
      (new Date().getTime() - data.revisionDate) / (1000 * 60)
    );

    return (
      <S_Main>
        <S_Section>
          <figure>
            <span>{data.summonerLevel}</span>
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/14.3.1/img/profileicon/${data.profileIconId}.png`}
              alt="summoner icon"
            />
          </figure>
          <div>
            <strong>{data.name}</strong>
            <span>
              last play:
              {time > 60
                ? `${Math.floor(time / 60)}시간 ${time % 60}분 전`
                : `${time}분 전`}
            </span>
          </div>
        </S_Section>
        <Matches puuid={data.puuid} />
      </S_Main>
    );
  }
}

export default Search;

const S_Main = styled.main`
  padding: 28px;
  background: var(--color-white);
`;

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
    width: 250px;
    border-radius: 20px;
    border: 3px solid var(--color-white);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);
  }

  strong {
    font-size: 24px;
  }
`;
