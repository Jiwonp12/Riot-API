import styled from "styled-components";
import useGetMatchesQuery from "../../queries/useGetMatches";

function Matches({ puuid }: { puuid: string }) {
  const { isLoading, isSuccess, data, error } = useGetMatchesQuery(puuid);
  if (isSuccess) console.log(data);
  return (
    <S_Section>
      <article></article>
    </S_Section>
  );
}

export default Matches;

const S_Section = styled.section``;
