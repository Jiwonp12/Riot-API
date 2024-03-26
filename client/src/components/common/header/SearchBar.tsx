import styled from "styled-components";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "@/assets/Search.png";
import cursorHover from "@/assets/CursorHover.png";

function SearchBar({ location }: { location: string }) {
  const [summonerInput, setSummonerInput] = useState({
    summonerName: "",
    tag: "",
  });
  const navigate = useNavigate();
  const tagRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSummonerInput({
      ...summonerInput,
      [name]: value,
    });
  };

  const handleClick = () => {
    if (!summonerInput.summonerName.length) {
      alert("플레이어 이름을 입력해주세요.");
    } else if (!summonerInput.tag.length) {
      alert("태그를 입력해주세요.");
      setTimeout(() => {
        tagRef.current?.focus();
      }, 0);
    } else {
      setSummonerInput({ summonerName: "", tag: "" });
      navigate(
        `/search/summoners/${
          summonerInput.summonerName
        }/${summonerInput.tag.replace("#", "")}`
      );
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
        className="input_name"
        value={summonerInput.summonerName}
        name="summonerName"
        type="text"
        placeholder="플레이어 이름"
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
      <input
        ref={tagRef}
        className="input_tag"
        value={summonerInput.tag}
        name="tag"
        type="text"
        placeholder="#KR1"
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
      <figure>
        <img src={Search} alt="search icon" onClick={handleClick} />
      </figure>
    </S_Label>
  );
}

export default SearchBar;

const S_Label = styled.label`
  width: ${({ className }) => (className === "/" ? "800px" : "953px")};
  height: ${({ className }) => (className === "/" ? "50px" : "40px")};
  display: flex;
  align-self: ${({ className }) => (className === "/" ? "center" : "")};
  position: relative;
  margin: 0 auto;

  .input_name {
    width: 100%;
    padding: 4px 8px;
    border-radius: ${({ className }) => (className === "/" ? "36px" : "4px")};
    background: var(--color-white);
    border: 1px solid var(--color-white);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);
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

  .input_tag {
    width: ${({ className }) => (className === "/" ? "30%" : "15%")};
    height: 100%;
    padding: 4px 8px;
    border-radius: ${({ className }) => (className === "/" ? "36px" : "4px")};
    background: var(--color-blue2);
    color: var(--color-white);
    border: 1px solid var(--color-white);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);
    position: absolute;
    right: 0;
    text-align: ${({ className }) => (className === "/" ? "center" : "")};
    cursor: url(${cursorHover}) 0 0, auto;

    &::placeholder {
      text-align: ${({ className }) => (className === "/" ? "center" : "")};
      color: var(--color-white);
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
    right: ${({ className }) => (className === "/" ? "4px" : "8px")};
    top: 50%;
    transform: translateY(-50%);
  }

  img:hover {
    cursor: url(${cursorHover}) 0 0, auto;
  }
`;
