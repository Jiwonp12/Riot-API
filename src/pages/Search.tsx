import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { summonerAtom } from "../atoms/atom";
import useGetSummonerQuery from "../queries/useGetSummonerQuery";
import Matches from "../components/features/Matches";
import SearchedPlayerHeader from "../components/features/SearchedPlayerHeader";
import Rank from "../components/features/rank/Rank";

function Search() {
  const summoner = useRecoilValue(summonerAtom);
  const { isLoading, isSuccess, data, error } = useGetSummonerQuery(summoner);

  // if (isLoading) console.log("loading");

  // if (error) console.log("error");

  if (isSuccess) {
    return (
      <S_Main>
        <SearchedPlayerHeader data={data} />
        <div className="content">
          <Rank id={data.id} />
          <Matches puuid={data.puuid} />
        </div>
      </S_Main>
    );
  }
}

export default Search;

const S_Main = styled.main`
  background: var(--color-white2);

  .content {
    display: flex;
    margin: 0 28px;
  }
`;
