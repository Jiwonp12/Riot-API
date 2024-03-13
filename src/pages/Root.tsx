import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "../components/common/header/Header";
import cursorDefault from "@/assets/cursorDefault.png";
import cursorHover from "@/assets/CursorHover.png";

function Root() {
  return (
    <S_Root>
      <Header />
      <Outlet />
    </S_Root>
  );
}

export default Root;

const S_Root = styled.div`
  cursor: url(${cursorDefault}) 0 0, auto;

  & :active {
    cursor: url(${cursorHover}) 0 0, auto;
  }
`;
