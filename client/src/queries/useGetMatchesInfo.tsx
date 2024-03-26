import { useQuery } from "@tanstack/react-query";
import { GetMatchesInfo } from "./../api/api";

const useGetMatchesInfoQuery = (puuid: string) => {
  return useQuery({
    queryKey: ["GetMatchesInfo", puuid],
    queryFn: () => GetMatchesInfo(puuid),
    refetchOnWindowFocus: false,
  });
};

export default useGetMatchesInfoQuery;
