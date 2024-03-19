import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { Participants } from "@/types/types";
import { findChampion } from "@/utils/findChampions";
import { championAtom, itemAtom, runeAtom, spellAtom } from "@/atoms/atom";
import ChampionImg from "@/components/common/ChampionImg";
import SmallIconImg from "@/components/common/SmallIconImg";
import { findMainRune, findSubRune } from "@/utils/findRune";

function MatchDetail({ data }: { data: Participants[] }) {
  const champions = useRecoilValue(championAtom);
  const spells = useRecoilValue(spellAtom);
  const runes = useRecoilValue(runeAtom);
  const items = useRecoilValue(itemAtom);

  return (
    <S_Table>
      <div className="div_header">
        <b className="w_60">챔피언</b>
        <b className="w_100">스펠/룬</b>
        <b className="w_200">이름</b>
        <b className="w_130">KDA</b>
        <b className="w_130">피해량</b>
        <b className="w_85">CS</b>
        <b className="w_210">아이템</b>
      </div>
      {data.map(player => (
        <div
          key={player.totalDamageDealtToChampions}
          className={player.win ? "win" : "lose"}
        >
          <span className="w_60">
            <ChampionImg
              champion={findChampion(champions[0], player.championId)[0]}
              champLevel={player.champLevel}
              type={"small"}
            />
          </span>
          <div className="w_100 div_flex">
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
          <div className="w_200">
            <b className="b_name">{player.riotIdGameName}</b>
          </div>
          <div className="div_kda w_130">
            <p>{`${player.kills} / ${player.deaths} / ${player.assists}`}</p>
            <p>
              {`평점 ${(
                (player.kills + player.assists) /
                player.deaths
              ).toFixed(2)}`}
            </p>
          </div>
          <div className="div_damage w_130">
            <b className={`b_attack ${player.win ? "b_win" : "b_lose"}`}>
              {player.totalDamageDealtToChampions}
            </b>
            <b className="b_deffence">{player.totalDamageTaken}</b>
          </div>
          <p className="p_cs w_85">
            {player.neutralMinionsKilled + player.totalMinionsKilled}
          </p>
          <div className="div_items w_210">
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

  .w_60 {
    width: 60px;
    display: flex;
    justify-content: center;
  }
  .w_85 {
    width: 84.98px;
    display: flex;
    justify-content: center;
  }
  .w_100 {
    width: 100px;
    display: flex;
    justify-content: center;
  }
  .w_130 {
    width: 130px;
    display: flex;
    justify-content: center;
  }
  .w_200 {
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .w_210 {
    width: 210px;
    display: flex;
    justify-content: center;
  }

  .div_flex {
    display: flex;
    justify-content: center;
  }

  .div_header {
    padding: 4px 20px;
    display: flex;
    color: var(--color-dark);
    background: var(--color-white);
    border-radius: 4px;
  }

  .win,
  .lose {
    display: flex;
    padding: 4px 20px;
  }

  .win {
    background: var(--color-blue1);
  }

  .lose {
    background: var(--color-red1);
  }

  .b_name {
    width: 100%;
    color: var(--color-dark);
  }

  .div_kda {
    flex-direction: column;
    align-items: center;
  }

  .div_damage {
    align-items: center;

    .b_attack {
      margin-right: 12px;
    }

    .b_attack.b_win {
      color: var(--color-blue2);
    }

    .b_attack.b_lose {
      color: var(--color-red2);
    }

    .b_deffence {
      color: var(--color-gray);
    }
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
