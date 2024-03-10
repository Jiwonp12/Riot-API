const img = import.meta.env.VITE_IMAGE_URL;

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
  { key: "IRON", src: `${img}/src/assets/IRON.png` },
  { key: "BRONZE", src: `${img}/src/assets/Bronze.png` },
  { key: "SILVER", src: `${img}/src/assets/SILVER.png` },
  { key: "GOLD", src: `${img}/src/assets/GOLD.png` },
  { key: "PLATINUM", src: `${img}/src/assets/PLATINUM.png` },
  { key: "EMERALD", src: `${img}/src/assets/EMERALD.png` },
  { key: "DIAMOND", src: `${img}/src/assets/DIAMOND.png` },
  { key: "MASTER", src: `${img}/src/assets/MASTER.png` },
  { key: "GRANDMASTER", src: `${img}/src/assets/GRANDMASTER.png` },
  { key: "CHALLENGER", src: `${img}/src/assets/CHALLENGER.png` },
];

export const rotationHeaderText = [
  "이번 주 챔피언 로테이션",
  "이번 주 챔피언 로테이션 (신규 플레이어)",
];
