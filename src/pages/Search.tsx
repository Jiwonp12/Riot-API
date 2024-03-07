import styled from "styled-components";
import { useParams } from "react-router-dom";
import useGetSummonerQuery from "../queries/useGetSummonerQuery";
import Matches from "../components/features/Matches";
import SearchedPlayerHeader from "../components/features/SearchedPlayerHeader";
import Rank from "../components/features/rank/Rank";

function Search() {
  const { summoner = "" } = useParams<{ summoner: string }>();
  const { isLoading, data, error } = useGetSummonerQuery(summoner);

  if (isLoading) return "Loading...";

  if (error) return <S_Main>찾을수없음</S_Main>;

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

export default Search;

const S_Main = styled.main`
  background: var(--color-white2);

  .content {
    display: flex;
    margin: 0 28px;
  }
`;
