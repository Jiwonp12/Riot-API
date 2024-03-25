import { useQuery } from "@tanstack/react-query";
import { GetSummonerBySummonerId } from "./../api/api";

const useGetSummonerBySummonerId = (summonerId: string) => {
  return useQuery({
    queryKey: ["GetSummonerBySummonerId", summonerId],
    queryFn: () => GetSummonerBySummonerId(summonerId),
    refetchOnWindowFocus: false,
  });
};

export default useGetSummonerBySummonerId;
