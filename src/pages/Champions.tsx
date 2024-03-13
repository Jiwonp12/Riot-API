import styled from "styled-components";
import AllChampions from "@/components/features/detail/AllChampions";

function Champions() {
  return (
    <S_Main>
      <AllChampions />
    </S_Main>
  );
}

export default Champions;

const S_Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 40px 100px;
`;
