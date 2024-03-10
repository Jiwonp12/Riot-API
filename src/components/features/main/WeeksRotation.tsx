import styled from "styled-components";
import ChampionImg from "../../common/ChampionImg";
import { ChampionType } from "../../../types/types";

function WeeksRotation({ champions }: { champions: ChampionType[] }) {
  return (
    <S_Div>
      <div className="flex first">
        {champions.slice(0, 10).map(champion => (
          <ChampionImg key={champion.id} champion={champion} champLevel={0} />
        ))}
      </div>
      <div className="flex">
        {champions.slice(10, 20).map(champion => (
          <ChampionImg key={champion.id} champion={champion} champLevel={0} />
        ))}
      </div>
    </S_Div>
  );
}

export default WeeksRotation;

const S_Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .first {
    padding: 20px 0;
  }

  .flex {
    display: flex;
  }
`;
