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
  width: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--color-white);
  border-radius: 8px;
  padding: 10px;
  margin-left: 20px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);

  .content {
    display: flex;
    flex-wrap: wrap;
    gap: 3px;

    .img_with_name {
      display: flex;
    }
  }
`;
