export type Player = {
  accountId: string;
  id: string;
  name: string;
  profileIconId: number;
  puuid: string;
  revisionDate: number;
  summonerLevel: number;
};

export type Participants = {
  summonerName: string;
};

export type Teams = {
  teamId: number;
};

export type SmallIconImgType = {
  item?: ItemType | undefined;
  spell?: Spell;
  mainRune?: MainRune | undefined;
  subRune?: string;
  champion?: ChampionType[];
  skill?: SkillSpell | undefined;
  passive?: Passive | undefined;
};

export type ItemType = {
  name: string;
  description: string;
  plaintext: string;
  gold: {
    base: number;
    total: number;
  };
  image: {
    full: string;
  };
  stats: {
    FlatHPPoolMod: number;
    FlatPhysicalDamageMod: number;
  };
  tags: string[];
};

export type Spell = {
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;
  costType: string;
  datavalues: Record<string, unknown>;
  description: string;
  effect: (number | null)[][];
  effectBurn: string[];
  id: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
  };
  key: string;
  maxammo: string;
  maxrank: number;
  modes: string[];
  name: string;
  range: number[];
  rangeBurn: string;
  resource: string;
  summonerLevel: number;
  tooltip: string;
  vars: [];
};

export type Rune = {
  icon: string;
  id: number;
  key: string;
  name: string;
  slots: RuneSlots[];
};

export type RuneSlots = {
  icon: string;
  id: number;
  key: string;
  name: string;
  longDesc: string;
  shortDesc: string;
  runes: Rune[];
};

export type MainRune = {
  icon: string;
  id: number;
  key: string;
  name: string;
  longDesc: string;
  shortDesc: string;
};

export type RankType = {
  freshBlood: boolean;
  hotStreak: boolean;
  inactive: boolean;
  leagueId: string;
  leaguePoints: number;
  losses: number;
  queueType: string;
  rank: string;
  summonerId: string;
  summonerName: string;
  tier: string;
  veteran: boolean;
  wins: number;
};

export type AllPlayersType = {
  championName: string;
  riotIdGameName: string;
  goldEarned: number;
  championId: number;
};

export type ChampionType = {
  blurb: string;
  id: string;
  key: string;
  name: string;
  partype: string;
  stats: {
    armor: number;
    armorperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackrange: number;
    attackspeed: number;
    attackspeedperlevel: number;
    crit: number;
    critperlevel: number;
    hp: number;
    hpperlevel: number;
    hpregen: number;
    hpregenperlevel: number;
    movespeed: number;
    mp: number;
    mpperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
  };
  tags: string[];
  title: string;
};

export type SwiperType = {
  activeIndex: number;
};

export type ChampionDetailType = {
  allytips: string[];
  blurb: string;
  enemytips: string[];
  info: {
    attack: number;
    defense: number;
    difficulty: number;
    magic: number;
  };
  key: string;
  lore: string;
  name: string;
  id: string;
  partype: string;
  passive: Passive;
  skins: {
    id: string;
    name: string;
    num: number;
  }[];
  spells: SkillSpell[];
  stats: {
    armor: number;
    armorperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackrange: number;
    attackspeed: number;
    attackspeedperlevel: number;
    crit: number;
    critperlevel: number;
    hp: number;
    hpperlevel: number;
    hpregen: number;
    hpregenperlevel: number;
    movespeed: number;
    mp: number;
    mpperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
  };
  tags: string[];
  title: string;
};

export type SkillSpell = {
  cooldown: number[];
  cost: number[];
  costType: string;
  id: string;
  image: {
    full: string;
    group: string;
    sprite: string;
  };
  maxrank: number;
  name: string;
  resource: string;
  tooltip: string;
};

export type Passive = {
  description: string;
  image: {
    full: string;
    group: string;
    sprite: string;
  };
  name: string;
};
