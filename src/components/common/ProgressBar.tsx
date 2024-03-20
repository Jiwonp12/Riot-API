import { Percent } from "@/types/types";
import styled from "styled-components";

function ProgressBar({ num, max }: { num: number; max: number }) {
  const percent = Math.floor((num / max) * 100);

  return (
    <S_Wrap>
      <S_Div percent={percent}>
        <div className="div_bar" />
        <p className="p_win">{num}W</p>
        <p className="p_lose">{max - num}L</p>
      </S_Div>
      <b className="b_percent">{percent}%</b>
    </S_Wrap>
  );
}

export default ProgressBar;

const S_Wrap = styled.div`
  display: flex;
  align-items: center;

  .b_percent {
    color: var(--color-red2);
    padding-left: 16px;
  }
`;

const S_Div = styled.div<Percent>`
  width: 150px;
  height: 24px;
  background: var(--color-red2);
  border-radius: 4px;
  position: relative;

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

  .p_win {
    top: 0;
    left: 10px;
  }

  .p_lose {
    top: 0;
    right: 10px;
  }
`;
