import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      if (summonerInput.length) {
        setSummonerInput("");
        navigate(`/search/summoners/${summonerInput}`);
      }
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
      <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleClick} />
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

    &::placeholder {
      text-align: ${({ className }) => (className === "/" ? "center" : "")};
      color: var(--color-dark);
    }
    &:focus {
      outline: none;
      &::placeholder {
        color: transparent;
      }
    }
  }

  svg {
    font-size: 24px;
    cursor: pointer;
    position: absolute;
    right: ${({ className }) => (className === "/" ? "20px" : "8px")};
    top: 50%;
    transform: translateY(-50%);
    color: var(--color-bg);
  }
`;
