import { useState } from "react";
import styled from "styled-components";
import { navLists } from "./../../../constant/constant";

function NavList() {
  const [clickedList, setClickedList] = useState(0);

  const handleClick = (idx: number) => {
    setClickedList(idx);
  };

  return (
    <S_Ul>
      {navLists.map((text, idx) => (
        <li key={idx} onClick={() => handleClick(idx)}>
          <a className={clickedList === idx ? "active" : ""}>{text}</a>
        </li>
      ))}
    </S_Ul>
  );
}

export default NavList;

const S_Ul = styled.ul`
  display: flex;
  margin-bottom: 4px;

  li {
    font-size: 20px;
    color: var(--color-gray);
    cursor: pointer;
    transition: color 0.1s ease;

    &:hover {
      color: var(--color-white);
    }
  }

  a {
    display: block;
    padding: 12px 0;
    margin: 0 16px;
    transition: border-bottom 0.3s ease;

    &:hover {
      border-bottom: 4px solid white;
    }
    &.active {
      color: var(--color-white);
      border-bottom: 4px solid white;
    }
  }
`;
