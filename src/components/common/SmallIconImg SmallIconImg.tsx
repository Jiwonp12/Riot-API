import styled from "styled-components";
import { gameVersion } from "../../constant/constant";
import { SmallIconImgType } from "../../types/types";

function SmallIconImg({ item, spell, rune }: SmallIconImgType) {
  if (item) {
    return (
      <S_figure>
        {item !== 0 && (
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/${gameVersion}/img/item/${item}.png`}
            alt={`${item} icon`}
          />
        )}
      </S_figure>
    );
  }

  if (spell) {
    return (
      <S_figure>
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/14.4.1/img/spell/${spell.id}.png`}
          alt={`${spell.id} icon`}
        />
      </S_figure>
    );
  }

  if (rune) {
    return (
      <S_figure>
        <img src={`${rune}`} alt={`${rune} icon`} />
      </S_figure>
    );
  }
}
export default SmallIconImg;

const S_figure = styled.figure`
  width: 32px;
  height: 32px;
  border: 1px solid var(--color-white);

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
`;
