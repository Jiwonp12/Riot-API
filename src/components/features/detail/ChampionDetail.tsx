import styled from "styled-components";
import { useParams } from "react-router";
import SkinImg from "@/components/common/SkinImg";
import useGetChampionDetailData from "@/queries/data/useGetChampionDetailData";
import SmallIconImg from "@/components/common/SmallIconImg";
import { SkillSpell } from "@/types/types";

function ChampionDetail() {
  const param = useParams().champion;
  const { isLoading, isSuccess, data } = useGetChampionDetailData(param);

  if (isLoading) return <S_Loading />;

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
        <div className="div_text">
          <b className="b_tips">Tips</b>
          {champion.allytips.length === 0 ? (
            <p>- No Tips</p>
          ) : (
            champion.allytips.map((text: string, idx: number) => (
              <p key={text}>
                {idx + 1}. {text}
              </p>
            ))
          )}
          <b className="b_tips enemy">Enemy Tips</b>
          {champion.enemytips.length === 0 ? (
            <p>- No Enemy Tips</p>
          ) : (
            champion.enemytips.map((text: string, idx: number) => (
              <p key={text}>
                {idx + 1}. {text}
              </p>
            ))
          )}
          <i className="i_lore">{champion.lore}</i>
        </div>
      </S_Section>
    );
  }
}

export default ChampionDetail;

const S_Section = styled.section`
  width: 713px;
  height: 100%;
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

  .div_text {
    display: flex;
    flex-direction: column;
    width: 470px;
    padding-left: 10px;

    .b_tips {
      margin-bottom: 4px;
    }
    .enemy {
      margin-top: 4px;
    }
    .i_lore {
      flex-grow: 1;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      color: var(--color-gray);
    }
  }
`;

const S_Loading = styled.section`
  width: 713px;
  height: 312.7px;
  padding: 20px;
  display: flex;
  position: relative;
  background: var(--color-white);
  border-radius: 8px;
`;
