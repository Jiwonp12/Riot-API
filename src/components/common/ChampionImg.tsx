import styled from "styled-components";

function ChampionImg({ champion }: { champion: string }) {
  return (
    <S_figure>
      <span></span>
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${champion}.png`}
        alt={`${champion} icon`}
      />
    </S_figure>
  );
}

export default ChampionImg;

const S_figure = styled.figure`
  position: relative;
  span {
    position: absolute;
    padding: 4px;
    background: var(--color-dark);
    border-radius: 4px;
    bottom: 10px;
    right: 8px;
    color: var(--color-white);
  }
  img {
    width: 80px;
    border-radius: 50%;
  }
`;
