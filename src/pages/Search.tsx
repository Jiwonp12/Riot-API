import styled from "styled-components";
import { useParams } from "react-router-dom";
import useGetSummonerQuery from "../queries/useGetSummonerQuery";
import Matches from "../components/features/Matches";
import SearchedPlayerHeader from "../components/features/SearchedPlayerHeader";
import MatchAside from "../components/features/match/matchAside/MatchAside";
import useGetSummonerByTagName from "@/queries/useGetSummonerByTagName";

function Search() {
  const { summoner = "", tag = "" } = useParams<{
    summoner: string;
    tag: string;
  }>();
  const {
    isLoading: tagDataLoading,
    isSuccess: tagIsSuccess,
    data: tagData,
  } = useGetSummonerByTagName(summoner, tag);
  const { isLoading, isSuccess, data, error } = useGetSummonerQuery(
    tagData?.puuid,
    tagData
  );

  if (tagDataLoading || isLoading) return;

  if (error) return <S_Main>찾을수없음</S_Main>;

  if (tagIsSuccess && isSuccess) {
    return (
      <S_Main>
        <SearchedPlayerHeader
          data={data}
          gameName={tagData?.gameName}
          tagLine={tagData?.tagLine}
        />
        <div className="content">
          <MatchAside id={data.id} />
          <Matches puuid={data.puuid} gameName={tagData?.gameName} />
        </div>
      </S_Main>
    );
  }
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
