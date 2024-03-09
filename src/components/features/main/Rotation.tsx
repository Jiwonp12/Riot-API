import styled from "styled-components";
import { useRecoilValue } from "recoil";
import useGetChampionRotation from "../../../queries/useGetChampionRotation";
import { championAtom } from "../../../atoms/atom";
import { findRotation } from "../../../utils/findChampion";
import ChampionImg from "../../common/ChampionImg";

function Rotation() {
  const { isLoading, isSuccess, data } = useGetChampionRotation();
  const champions = useRecoilValue(championAtom);

  if (isLoading) console.log("load");

  if (isSuccess) {
    const freeChamps = findRotation(champions[0].data, data.freeChampionIds);
    const freeChampsForNew = findRotation(
      champions[0].data,
      data.freeChampionIdsForNewPlayers
    );

    return (
      <S_Nav>
        <div>
          {freeChamps.map(champion => (
            <ChampionImg key={champion.id} champion={champion} champLevel={0} />
          ))}
        </div>
        <div>
          {freeChampsForNew.map(champion => (
            <ChampionImg key={champion.id} champion={champion} champLevel={0} />
          ))}
        </div>
      </S_Nav>
    );
  }
}
export default Rotation;

const S_Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin: 52px;

  div {
    display: flex;
  }
`;
