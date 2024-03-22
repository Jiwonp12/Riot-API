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

  if (isSuccess && param) {
    const champion = data.data[param];

    return (
      <S_Section>
        <SkinImg champion={champion} />
        <div className="skills">
          <SmallIconImg passive={champion.passive} />
          {champion.spells.map((skill: SkillSpell) => (
            <SmallIconImg skill={skill} key={skill.id} />
          ))}
        </div>
      </S_Section>
    );
  }
}

export default ChampionDetail;

const S_Section = styled.section`
  width: 713px;
  height: 400px;
  padding: 20px;
  display: flex;
  position: relative;
  background: var(--color-white);
  border-radius: 8px;

  .skills {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 272.73px;
  }
`;
