import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "../components/common/header/Header";

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
  cursor: url(/src/assets/CursorDefault.png) 0 0, auto;

  & :active {
    cursor: url(/src/assets/cursorHover.png) 0 0, auto;
  }
`;
