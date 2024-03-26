import { useQuery } from "@tanstack/react-query";
import { GetSummonerByTagName } from "./../api/api";

const useGetSummonerByTagName = (summonerName: string, tag: string) => {
  return useQuery({
    queryKey: ["GetSummonerByTagName", summonerName, tag],
    queryFn: () => GetSummonerByTagName(summonerName, tag),
    refetchOnWindowFocus: false,
    enabled: !!summonerName && !!tag,
  });
};

export default useGetSummonerByTagName;
