import { useQuery } from "@tanstack/react-query";
import { GetSummonerByAccountId } from "./../api/api";
import { Player } from "@/types/types";

const useGetSummonerByAccountId = (puuid: string, data: Player) => {
  return useQuery({
    queryKey: ["GetSummonerByAccountId", puuid],
    queryFn: () => GetSummonerByAccountId(puuid),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    enabled: !!data,
  });
};

export default useGetSummonerByAccountId;
