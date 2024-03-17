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
  console.log(items);

  //   const playerMainRune = player.perks.styles[0].selections[0].perk;
  //   const playerSubRune = player.perks.styles[1].selections[0].perk;
  //   const mainRune = findRune(playerMainRune, runes);
  //   const subRune = findRune(playerSubRune, runes);

  console.log(data);
  return (
    <S_Table>
      <div>어쩌고 저쩌고..</div>
      {data.map(player => (
        <div
          key={player.totalDamageDealtToChampions}
          className={player.win ? "win" : "lose"}
        >
          <span>
            <ChampionImg
              champion={findChampion(champions[0], player.championId)[0]}
              champLevel={player.champLevel}
              type={"small"}
            />
          </span>
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
          <p>{player.riotIdGameName}</p>
          <div>
            <p>{`${player.kills} / ${player.deaths} / ${player.assists}`}</p>
            <p>
              {`평점 ${(
                (player.kills + player.assists) /
                player.deaths
              ).toFixed(2)}`}
            </p>
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

  .win,
  .lose {
    display: flex;
    padding: 12px 12px 12px 20px;
  }

  .win {
    background: var(--color-blue1);
  }

  .lose {
    background: var(--color-red1);
  }
`;
