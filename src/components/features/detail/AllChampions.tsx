import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { championAtom } from "@/atoms/atom";
import { ChampionType } from "@/types/types";
import ChampionImg from "@/components/common/ChampionImg";
import Lanes from "@/components/common/Lanes";
import { useState } from "react";

function AllChampions() {
  const champions = useRecoilValue(championAtom);
  const allChampions: ChampionType[] = Object.values(champions[0]);
  const sortedChampions = allChampions
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));
  const [championState, setChampionState] = useState([...sortedChampions]);

  const handleClick = (lane: string) => {
    if (lane === "All") {
      setChampionState([...sortedChampions]);
    } else {
      const cliked = allChampions.filter(champion =>
        champion.tags.includes(lane)
      );
      setChampionState(cliked.sort((a, b) => a.name.localeCompare(b.name)));
    }
  };

  return (
    <S_Aside>
      <Lanes click={handleClick} />
      <span className="border_line" />
      <div className="content">
        {championState.map(champion => (
          <div className="img_with_name" key={`${champion.name}`}>
            <ChampionImg champion={champion} type={"all"} />
          </div>
        ))}
      </div>
    </S_Aside>
  );
}

export default AllChampions;

const S_Aside = styled.aside`
  width: 370px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--color-bg);
  border-radius: 8px;
  padding: 10px 20px;

  .content {
    display: flex;
    flex-wrap: wrap;
    gap: 3px;

    .img_with_name {
      display: flex;
    }
  }
`;
