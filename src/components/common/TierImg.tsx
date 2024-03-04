import styled from "styled-components";
import { Tiers } from "../../constant/constant";

function TierImg({ tier }: { tier: string }) {
  const [icon] = Tiers.filter(str => str.key === tier);

  if (tier) {
    return (
      <S_figure>
        <img src={icon.src} alt={`${icon.key} icon`} />
      </S_figure>
    );
  } else {
    return <S_Empty></S_Empty>;
  }
}
export default TierImg;

const S_figure = styled.figure`
  width: 80px;
  height: 80px;
  background: var(--color-white2);
  border-radius: 50%;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const S_Empty = styled.figure`
  width: 80px;
  height: 80px;
  background: var(--color-white2);
  border-radius: 50%;
`;
