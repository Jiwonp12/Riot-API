import { useEffect, useState } from "react";
import styled from "styled-components";
import { navLists } from "./../../../constant/constant";
import { useLocation, useNavigate } from "react-router-dom";
import cursorHover from "@/assets/CursorHover.png";

function NavList() {
  const [clickedList, setClickedList] = useState(0);
  const navigate = useNavigate();
  const pathname = useLocation().pathname;

  const handleClick = (idx: number) => {
    navigate(navLists[idx].path);
  };

  useEffect(() => {
    if (pathname.includes("champions")) {
      setClickedList(1);
    } else if (pathname.includes("ranking")) {
      setClickedList(2);
    } else {
      setClickedList(0);
    }
  }, [pathname]);

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
  width: 953px;
  display: flex;
  margin-bottom: 20px;

  li {
    font-size: 14px;
    color: var(--color-bg2);
    cursor: url(${cursorHover}) 0 0, auto;
    margin: 0 12px;

    &:hover {
      color: var(--color-white);
    }
  }

  a {
    display: block;
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
