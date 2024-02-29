import styled from "styled-components";
import useGetMatchesQuery from "../../queries/useGetMatches";
import Match from "./match/Match";

function Matches({ puuid }: { puuid: string }) {
  const { isLoading, isSuccess, data, error } = useGetMatchesQuery(puuid);

  if (isSuccess) {
    return (
      <S_Section>
        {data.map((id: string) => (
          <Match key={id} matchId={id} />
        ))}
      </S_Section>
    );
  }
}

export default Matches;

const S_Section = styled.section``;
