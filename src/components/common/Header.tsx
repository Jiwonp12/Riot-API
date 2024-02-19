import styled from "styled-components";

function Header() {
  return (
    <>
      <S_Header>
        <nav>
          <ul>
            <li>
              <a>HOME</a>
            </li>
            <li>
              <a>HOME</a>
            </li>
            <li>
              <a>HOME</a>
            </li>
            <li>
              <a>HOME</a>
            </li>
          </ul>
        </nav>
        <input></input>
      </S_Header>
    </>
  );
}

export default Header;

const S_Header = styled.header`
  background: var(--color-bg);
  top: 0;
  position: sticky;
  padding: 0 12px;
  font-size: 20px;

  ul {
    display: flex;
    padding: 8px 0;
  }

  li {
    padding: 0 12px;
    margin-right: 20px;
    cursor: pointer;
  }

  input {
    margin: 8px 12px;
    border-radius: 4px;
  }
`;
