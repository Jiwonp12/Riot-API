import styled from "styled-components";
import { lanes } from "@/constant/constant";
import { Tooltip } from "react-tooltip";
import { LanesProps } from "@/types/types";

const Lanes: React.FC<LanesProps> = ({ click }) => {
  return (
    <S_Header>
      {lanes.map(lane => (
        <S_figure key={lane.key}>
          <img
            src={lane.src}
            alt={`${lane.key} icon`}
            data-tooltip-id={lane.src}
            data-tooltip-place="top"
            data-tooltip-variant="dark"
            data-tooltip-delay-show={100}
            onClick={() => click(lane.key)}
          />
          <S_Tooltip id={lane.src} style={{ borderRadius: "4px" }} opacity={1}>
            <div>
              <b className="skill_name">{lane.key}</b>
            </div>
          </S_Tooltip>
        </S_figure>
      ))}
    </S_Header>
  );
};

export default Lanes;

const S_Header = styled.header`
  max-width: 440px;
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const S_figure = styled.figure`
  width: 46px;
  height: 46px;
  border: 1px solid var(--color-bg2);
  border-radius: 4px;
  background: var(--color-white);

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    filter: grayscale(1);
  }

  img:hover {
    filter: grayscale(0);
  }
`;

const S_Tooltip = styled(Tooltip)`
  z-index: 10;
`;
