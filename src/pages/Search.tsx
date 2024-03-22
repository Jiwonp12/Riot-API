import styled from "styled-components";
import { useParams } from "react-router-dom";
import useGetSummonerQuery from "../queries/useGetSummonerQuery";
import Matches from "../components/features/Matches";
import SearchedPlayerHeader from "../components/features/SearchedPlayerHeader";
import MatchAside from "../components/features/match/matchAside/MatchAside";

function Search() {
  const { summoner = "" } = useParams<{ summoner: string }>();
  const { isLoading, data, error } = useGetSummonerQuery(summoner);

  if (isLoading) return "Loading...";

  if (error) return <S_Main>찾을수없음</S_Main>;

  return (
    <S_Main>
      <SearchedPlayerHeader data={data} />
      <div className="content">
        <MatchAside id={data.id} />
        <Matches puuid={data.puuid} />
      </div>
    </S_Main>
  );
}

export default Search;

const S_Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    display: flex;
    margin: 0 100px;
  }
`;
