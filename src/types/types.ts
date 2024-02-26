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

export type ItemOrSpellType = {
  item?: number | undefined;
  spell?: Spell | undefined;
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
