import { useEffect, useState } from "react";
import styled from "styled-components";
import useGetMatchesQuery from "../../queries/useGetMatches";
import Match from "./match/Match";
import cursorHover from "@/assets/CursorHover.png";
import { matchCount, matchStart } from "@/constant/constant";

function Matches({ puuid, gameName }: { puuid: string; gameName: string }) {
  const [countState, setCountState] = useState(matchCount);
  const { isSuccess, data, refetch } = useGetMatchesQuery(
    puuid,
    String(matchStart),
    String(countState)
  );

  const handleMoreMatch = () => {
    setCountState(prev => prev + matchCount);
    refetch();
  };

  useEffect(() => {
    refetch();
  }, [countState, refetch]);

  if (isSuccess) {
    return (
      <S_Section>
        {data.map((id: string) => (
          <Match key={id} matchId={id} gameName={gameName} />
        ))}
        <button className="button_match" onClick={handleMoreMatch}>
          더 보기
        </button>
      </S_Section>
    );
  }
}

export default Matches;

const S_Section = styled.section`
  .button_match {
    width: 643px;
    height: 40px;
    margin-top: 10px;
    background: var(--color-white);
    border: 1px solid var(--color-white3);
    color: var(--color-dark);
    border-radius: 8px;
    font-size: 13px;
    cursor: url(${cursorHover}) 0 0, auto;
  }

  .button_match:hover {
    background: var(--color-white2);
  }
`;
