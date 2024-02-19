import axios from "axios";

export const GetSummoner = (id: string) =>
  axios
    .get(
      `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${id}?api_key=${
        import.meta.env.VITE_RIOT_API
      }`
    )
    .then(res => res.data);
