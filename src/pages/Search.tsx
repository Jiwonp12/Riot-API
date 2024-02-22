import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { summonerAtom } from "../atoms/atom";
import useGetSummonerQuery from "../queries/useGetSummonerQuery";
import Matches from "../components/features/Matches";
import SearchedPlayer from "../components/features/SearchedPlayer";

function Search() {
  const summoner = useRecoilValue(summonerAtom);
  const { isLoading, isSuccess, data, error } = useGetSummonerQuery(summoner);

  // if (isLoading) console.log("loading");

  // if (error) console.log("error");

  if (isSuccess) {
    return (
      <S_Main>
        <SearchedPlayer data={data} />
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
