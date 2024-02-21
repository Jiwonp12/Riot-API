import styled from "styled-components";
import useGetMatchesInfoQuery from "../../queries/useGetMatchesInfo";

function Match({ matchId }: { matchId: string }) {
  const { isLoading, isSuccess, data, error } = useGetMatchesInfoQuery(matchId);
  if (isSuccess) console.log(data);
  return <S_Article></S_Article>;
}

export default Match;

const S_Article = styled.section``;
