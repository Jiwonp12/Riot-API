import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { summonerAtom } from "../../../atoms/atom";

function SearchBar() {
  const [summonerInput, setSummonerInput] = useState("");
  const setRecoilState = useSetRecoilState(summonerAtom);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSummonerInput(e.target.value);
  };

  const handleClick = () => {
    if (summonerInput.length) {
      setRecoilState(summonerInput);
      setSummonerInput("");
      navigate("/search");
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (summonerInput.length) {
        setRecoilState(summonerInput);
        setSummonerInput("");
        navigate("/search");
      }
    }
  };

  return (
    <S_Label>
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
  margin: 12px 16px 0 16px;
  display: flex;
  align-items: center;

  input {
    padding: 4px 8px;
    border-radius: 4px;
    width: 600px;
    height: 40px;
    background: var(--color-white);
    border: 1px solid var(--color-white);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);
    font-size: 16px;
    position: relative;

    &::placeholder {
      color: var(--color-dark);
    }
    &:focus {
      outline: none;
    }
  }

  svg {
    font-size: 24px;
    cursor: pointer;
    position: absolute;
    left: 590px;
  }
`;
