import styled from "styled-components";
import SearchBar from "./SearchBar";
import NavList from "./NavList";

function Header() {
  return (
    <S_Header>
      <nav>
        <NavList />
      </nav>
      <SearchBar />
    </S_Header>
  );
}

export default Header;

const S_Header = styled.header`
  display: flex;
  flex-direction: column;
  background: var(--color-bg);
  top: 0;
  position: sticky;
  padding: 12px;
`;
