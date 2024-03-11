import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { championAtom } from "@/atoms/atom";
import { ChampionType } from "@/types/types";
import ChampionImg from "@/components/common/ChampionImg";

function Champions() {
  const champions = useRecoilValue(championAtom);
  const allChampions: ChampionType[] = Object.values(champions[0]);
  const sortedChampions = allChampions
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <S_Main>
      {sortedChampions.map(champion => (
        <div className="img_with_name" key={`${champion.name}`}>
          <ChampionImg champion={champion} champLevel={0} />
        </div>
      ))}
    </S_Main>
  );
}

export default Champions;

const S_Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px 100px;
`;
