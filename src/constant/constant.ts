import IRON from "@/assets/IRON.png";
import BRONZE from "@/assets/BRONZE.png";
import SILVER from "@/assets/SILVER.png";
import GOLD from "@/assets/GOLD.png";
import PLATINUM from "@/assets/PLATINUM.png";
import EMERALD from "@/assets/EMERALD.png";
import DIAMOND from "@/assets/DIAMOND.png";
import MASTER from "@/assets/MASTER.png";
import GRANDMASTER from "@/assets/GRANDMASTER.png";
import CHALLENGER from "@/assets/CHALLENGER.png";

export const gameVersion = "14.5.1";

export const navLists = [
  { text: "Home", path: "/" },
  { text: "Home", path: "/" },
  { text: "Home", path: "/" },
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
