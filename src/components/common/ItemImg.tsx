import styled from "styled-components";

function ItemImg({ item }: { item: number }) {
  return (
    <S_figure>
      {item !== 0 && (
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/14.3.1/img/item/${item}.png`}
          alt={`${item} icon`}
        />
      )}
    </S_figure>
  );
}
export default ItemImg;

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
