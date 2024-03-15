import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "@/assets/Search.png";
import cursorHover from "@/assets/CursorHover.png";

function SearchBar({ location }: { location: string }) {
  const [summonerInput, setSummonerInput] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSummonerInput(e.target.value);
  };

  const handleClick = () => {
    if (summonerInput.length) {
      setSummonerInput("");
      navigate(`/search/summoners/${summonerInput}`);
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <S_Label className={location}>
      <input
        value={summonerInput}
        type="text"
        placeholder="소환사명을 입력해주세요."
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      ></input>
      <figure>
        <img src={Search} alt="search icon" onClick={handleClick} />
      </figure>
    </S_Label>
  );
}

export default SearchBar;

const S_Label = styled.label`
  width: ${({ className }) => (className === "/" ? "800px" : "100%")};
  height: ${({ className }) => (className === "/" ? "60px" : "40px")};
  display: flex;
  align-self: ${({ className }) => (className === "/" ? "center" : "")};
  position: relative;
  margin-top: 20px;

  input {
    width: 100%;
    padding: 4px 8px;
    border-radius: ${({ className }) => (className === "/" ? "36px" : "4px")};
    background: var(--color-white);
    border: 1px solid var(--color-white);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);
    font-size: 16px;
    position: relative;
    text-align: ${({ className }) => (className === "/" ? "center" : "")};
    cursor: url(${cursorHover}) 0 0, auto;

    &::placeholder {
      text-align: ${({ className }) => (className === "/" ? "center" : "")};
      color: var(--color-gray);
    }
    &:focus {
      outline: none;
      &::placeholder {
        color: transparent;
      }
    }
  }

  img {
    width: ${({ className }) => (className === "/" ? "44px" : "32px")};
    position: absolute;
    right: ${({ className }) => (className === "/" ? "20px" : "8px")};
    top: 50%;
    transform: translateY(-50%);
  }

  img:hover {
    cursor: url(${cursorHover}) 0 0, auto;
  }
`;
