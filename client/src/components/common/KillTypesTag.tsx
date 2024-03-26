import styled from "styled-components";

function KillTypesTag({
  playerKillType,
}: {
  playerKillType: string | undefined;
}) {
  if (playerKillType) {
    return (
      <S_Tag>
        <p>
          {playerKillType === "pentaKills"
            ? "펜타킬"
            : playerKillType === "quadraKills"
            ? "쿼드라킬"
            : playerKillType === "tripleKills"
            ? "트리플킬"
            : "더블킬"}
        </p>
      </S_Tag>
    );
  } else {
    return <></>;
  }
}

export default KillTypesTag;

const S_Tag = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  padding: 3px 6px;
  background: var(--color-red2);
  color: var(--color-white);
  border-radius: 24px;
  margin-left: 8px;
`;
