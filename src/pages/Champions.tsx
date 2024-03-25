import styled from "styled-components";
import AllChampions from "@/components/features/detail/AllChampions";
import ChampionDetail from "@/components/features/detail/ChampionDetail";
import useGetSummonerByTagName from "@/queries/useGetSummonerByTagName";

function Champions() {
  const { isSuccess, data } = useGetSummonerByTagName("T1 Zeus", "091");
  if (isSuccess) console.log(data);
  return (
    <S_Main>
      <ChampionDetail />
      <AllChampions />
    </S_Main>
  );
}

export default Champions;

const S_Main = styled.main`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  background: var(--color-bg);
`;
