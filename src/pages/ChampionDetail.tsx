import styled from "styled-components";
import { useParams } from "react-router";
import SkinImg from "@/components/common/SkinImg";
import useGetChampionDetailData from "@/queries/data/useGetChampionDetailData";
import SmallIconImg from "@/components/common/SmallIconImg";
import { SkillSpell } from "@/types/types";

function ChampionDetail() {
  const param = useParams().champion;
  const { isLoading, isSuccess, data } = useGetChampionDetailData(param);

  if (isLoading) return;

  //   const select = Object.keys(champions).find(
  //     x => x.toLocaleLowerCase() === param
  //   );

  //   if (!select) {ac
  //     return <S_Main></S_Main>;
  //   }
  if (isSuccess && param) {
    const champion = data.data[param];

    return (
      <S_Main>
        <S_Section>
          <SkinImg champion={champion} />
          <div className="skills">
            <SmallIconImg passive={champion.passive} />
            {champion.spells.map((skill: SkillSpell) => (
              <SmallIconImg skill={skill} key={skill.id} />
            ))}
          </div>
        </S_Section>
      </S_Main>
    );
  }
}

export default ChampionDetail;

const S_Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 40px 100px;
  background: var(--color-white2);
`;

const S_Section = styled.section`
  display: flex;

  .skills {
    margin-left: 50px;
    width: 1370px;
    height: 560px;
    background: var(--color-white);
    border-radius: 8px;
  }
`;
