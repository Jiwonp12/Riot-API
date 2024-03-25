import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { Participants } from "@/types/types";
import { findChampion } from "@/utils/findChampions";
import { championAtom, itemAtom, runeAtom, spellAtom } from "@/atoms/atom";
import ChampionImg from "@/components/common/ChampionImg";
import SmallIconImg from "@/components/common/SmallIconImg";
import { findMainRune, findSubRune } from "@/utils/findRune";
import { useNavigate } from "react-router";
import cursorHover from "@/assets/CursorHover.png";
import ProgressBar from "@/components/common/ProgressBar";

function MatchDetail({ data }: { data: Participants[] }) {
  const champions = useRecoilValue(championAtom);
  const spells = useRecoilValue(spellAtom);
  const runes = useRecoilValue(runeAtom);
  const items = useRecoilValue(itemAtom);
  const navigate = useNavigate();

  const maxDamage = (isWin: boolean) =>
    Math.max(
      ...data
        .filter(player => player.win === isWin)
        .map(player => player.totalDamageDealtToChampions),
      0
    );

  const maxDamageTaken = (isWin: boolean) =>
    Math.max(
      ...data
        .filter(player => player.win === isWin)
        .map(player => player.totalDamageTaken),
      0
    );

  const handleClick = (riotIdGameName: string) => {
    if (riotIdGameName === "") {
      alert("찾을 수 없는 소환사입니다.");
    } else {
      navigate(`/search/summoners/${riotIdGameName}`);
    }
  };

  return (
    <S_Table>
      <div className="div_header">
        <b className="w_40">챔피언</b>
        <b className="w_70">스펠/룬</b>
        <b className="w_100">이름</b>
        <b className="w_106">KDA</b>
        <b className="w_106">피해량</b>
        <b className="w_40">CS</b>
        <b className="w_160">아이템</b>
      </div>
      {data.map(player => (
        <div
          key={player.totalDamageDealtToChampions}
          className={player.win ? "win" : "lose"}
        >
          <span className="w_40">
            <ChampionImg
              champion={findChampion(champions[0], player.championId)[0]}
              champLevel={player.champLevel}
              type={"small"}
            />
          </span>
          <div className="w_70 div_flex">
            <div>
              <SmallIconImg
                spell={spells.find(
                  spell => Number(spell.key) === player.summoner1Id
                )}
                type={"small"}
              />
              <SmallIconImg
                spell={spells.find(
                  spell => Number(spell.key) === player.summoner2Id
                )}
                type={"small"}
              />
            </div>
            <div>
              <SmallIconImg
                mainRune={findMainRune(
                  player.perks.styles[0].selections[0].perk,
                  runes
                )}
                type={"small"}
              />
              <SmallIconImg
                subRune={
                  findSubRune(player.perks.styles[1].selections[0].perk, runes)
                    ?.icon
                }
                type={"small"}
              />
            </div>
          </div>
          <div className="w_100">
            <b
              className="b_name"
              onClick={() => handleClick(player.riotIdGameName)}
            >
              {player.riotIdGameName}
            </b>
          </div>
          <div className="div_kda w_106">
            <p>{`${player.kills} / ${player.deaths} / ${player.assists}`}</p>
            <p>
              {`평점 ${(
                (player.kills + player.assists) /
                player.deaths
              ).toFixed(2)}`}
            </p>
          </div>
          <div className="div_damage w_106">
            <ProgressBar
              num={player.totalDamageDealtToChampions}
              max={maxDamage(player.win)}
              type="damage"
            />
            <ProgressBar
              num={player.totalDamageTaken}
              max={maxDamageTaken(player.win)}
              type="taken"
            />
          </div>
          <p className="p_cs w_40">
            {player.neutralMinionsKilled + player.totalMinionsKilled}
          </p>
          <div className="div_items w_160">
            <SmallIconImg item={items[0][player.item0]} />
            <SmallIconImg item={items[0][player.item1]} />
            <SmallIconImg item={items[0][player.item2]} />
            <SmallIconImg item={items[0][player.item3]} />
            <SmallIconImg item={items[0][player.item4]} />
            <SmallIconImg item={items[0][player.item5]} />
          </div>
        </div>
      ))}
    </S_Table>
  );
}

export default MatchDetail;

const S_Table = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  color: var(--color-gray);

  span {
    display: flex;
    align-items: center;
  }

  .w_40 {
    width: 40px;
    display: flex;
    justify-content: center;
  }
  .w_70 {
    width: 70px;
    display: flex;
    justify-content: center;
  }
  .w_106 {
    width: 106.5px;
    display: flex;
    justify-content: center;
  }
  .w_100 {
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .w_160 {
    width: 160px;
    display: flex;
    justify-content: center;
  }

  .div_flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .div_header {
    padding: 10px;
    display: flex;
    color: var(--color-dark);
    background: var(--color-white);
    border-radius: 4px;
  }

  .win,
  .lose {
    display: flex;
    padding: 4px 10px;
  }

  .win {
    background: var(--color-blue1);
  }

  .lose {
    background: var(--color-red1);
  }

  .b_name {
    width: 100%;
    color: var(--color-gray);
  }

  .b_name:hover {
    cursor: url(${cursorHover}) 0 0, auto;
    color: var(--color-dark);
  }

  .div_kda {
    flex-direction: column;
    align-items: center;
  }

  .div_damage {
    align-items: center;
  }

  .p_cs {
    display: flex;
    align-items: center;
  }

  .div_items {
    align-items: center;
    justify-content: flex-end;
  }
`;
