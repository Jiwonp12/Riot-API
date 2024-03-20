import styled from "styled-components";
import SearchBar from "./SearchBar";
import NavList from "./NavList";
import { useLocation } from "react-router";

function Header() {
  const location = useLocation().pathname;

  return (
    <S_Header>
      <nav>
        <NavList />
      </nav>
      <SearchBar location={location} />
    </S_Header>
  );
}

export default Header;

const S_Header = styled.header`
  display: flex;
  flex-direction: column;
  background: var(--color-bg);
  padding: 20px 100px;
`;
