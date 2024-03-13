import IRON from "@/assets/Iron.png";
import BRONZE from "@/assets/Bronze.png";
import SILVER from "@/assets/Silver.png";
import GOLD from "@/assets/Gold.png";
import PLATINUM from "@/assets/Platinum.png";
import EMERALD from "@/assets/Emerald.png";
import DIAMOND from "@/assets/Diamond.png";
import MASTER from "@/assets/Master.png";
import GRANDMASTER from "@/assets/Grandmaster.png";
import CHALLENGER from "@/assets/Challenger.png";

import AllSelected from "@/assets/All.png";
import Tank from "@/assets/Tank.png";
import Fighter from "@/assets/Fighter.png";
import Assassin from "@/assets/Assassin.png";
import Mage from "@/assets/Mage.png";
import Marksman from "@/assets/Marksman.png";
import Support from "@/assets/Support.png";

export const gameVersion = "14.5.1";

export const navLists = [
  { text: "홈", path: "/" },
  { text: "챔피언 정보", path: "/champions" },
  { text: "랭킹", path: "/" },
];

export const killTypes = [
  "pentaKills",
  "quadraKills",
  "tripleKills",
  "doubleKills",
];

export const runeTypes = [
  { key: "Domination", value: "7200_Domination" },
  { key: "Precision", value: "7201_Precision" },
  { key: "Sorcery", value: "7202_Sorcery" },
  { key: "Inspiration", value: "7203_Whimsy" },
  { key: "Resolve", value: "7204_Resolve" },
];

export const tiers = [
  { key: "IRON", src: `${IRON}` },
  { key: "BRONZE", src: `${BRONZE}` },
  { key: "SILVER", src: `${SILVER}` },
  { key: "GOLD", src: `${GOLD}` },
  { key: "PLATINUM", src: `${PLATINUM}` },
  { key: "EMERALD", src: `${EMERALD}` },
  { key: "DIAMOND", src: `${DIAMOND}` },
  { key: "MASTER", src: `${MASTER}` },
  { key: "GRANDMASTER", src: `${GRANDMASTER}` },
  { key: "CHALLENGER", src: `${CHALLENGER}` },
];

export const rotationHeaderText = [
  "이번 주 챔피언 로테이션",
  "이번 주 챔피언 로테이션 (신규 플레이어)",
];

export const lanes = [
  { key: "All", src: `${AllSelected}` },
  { key: "Tank", src: `${Tank}` },
  { key: "Fighter", src: `${Fighter}` },
  { key: "Mage", src: `${Mage}` },
  { key: "Assassin", src: `${Assassin}` },
  { key: "Marksman", src: `${Marksman}` },
  { key: "Support", src: `${Support}` },
];
