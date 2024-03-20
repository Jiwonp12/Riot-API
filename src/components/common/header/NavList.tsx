import { useState } from "react";
import styled from "styled-components";
import { navLists } from "./../../../constant/constant";
import { useNavigate } from "react-router-dom";
import cursorHover from "@/assets/CursorHover.png";

function NavList() {
  const [clickedList, setClickedList] = useState(0);
  const navigate = useNavigate();

  const handleClick = (idx: number) => {
    setClickedList(idx);
    navigate(navLists[idx].path);
  };

  return (
    <S_Ul>
      {navLists.map((nav, idx) => (
        <li key={idx} onClick={() => handleClick(idx)}>
          <a className={clickedList === idx ? "active" : ""}>{nav.text}</a>
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
    font-size: 14px;
    color: var(--color-bg2);
    cursor: url(${cursorHover}) 0 0, auto;
    transition: color 0.1s ease;
    margin: 0 12px;

    &:hover {
      color: var(--color-white);
    }
  }

  a {
    display: block;
    transition: border-bottom 0.3s ease;
    padding-bottom: 8px;

    &:hover {
      border-bottom: 4px solid white;
    }
    &.active {
      color: var(--color-white);
      border-bottom: 4px solid white;
    }
  }
`;
