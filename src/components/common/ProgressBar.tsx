import styled from "styled-components";

function ProgressBar({
  num,
  max,
  type,
}: {
  num: number;
  max: number;
  type: string;
}) {
  const percent = Math.floor((num / max) * 100);

  return (
    <S_Wrap type={type}>
      {type === "damage" || type === "taken" ? (
        <>
          <span>{num}</span>
          <S_Damage percent={percent} type={type}>
            <p className="p_num"></p>
            <div className="div_bar" />
          </S_Damage>
        </>
      ) : (
        <>
          <S_WinLose percent={percent}>
            <div className="div_bar" />
            <p className="p_num">{num}W</p>
            <p className="p_max">{max - num}L</p>
          </S_WinLose>
          <b className="b_percent">{percent}%</b>
        </>
      )}
    </S_Wrap>
  );
}

export default ProgressBar;

const S_Wrap = styled.div<{ type: string }>`
  width: 100%;
  display: flex;
  flex-direction: ${props => (props.type !== "win" ? "column" : "raw")};
  align-items: center;

  span {
    color: var(--color-gray);
    padding-bottom: 4px;
  }

  .b_percent {
    color: var(--color-red2);
    padding-left: 16px;
  }
`;

const S_Damage = styled.div<{ percent: number; type: string }>`
  width: 48px;
  height: 8px;
  background: var(--color-white);
  position: relative;

  .div_bar {
    background: ${props =>
      props.type === "damage" ? "var(--color-red2)" : "var(--color-gray)"};
    width: ${props => props.percent + "%"};
    height: 100%;
  }

  p {
    color: var(--color-white);
    position: absolute;
  }

  .p_num {
  }
`;

const S_WinLose = styled.div<{ percent: number }>`
  width: 150px;
  height: 24px;
  background: var(--color-red2);
  border-radius: 4px;
  position: relative;
  margin-left: 40px;

  .div_bar {
    background: var(--color-blue2);
    width: ${props => props.percent + "%"};
    height: 100%;
    border-radius: 4px;
  }

  p {
    color: var(--color-white);
    position: absolute;
  }

  .p_num {
    top: 4px;
    left: 6px;
  }

  .p_max {
    top: 4px;
    right: 6px;
  }
`;
