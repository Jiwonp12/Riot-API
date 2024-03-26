import { useQuery } from "@tanstack/react-query";
import { GetMatches } from "./../api/api";

const useGetMatchesQuery = (puuid: string, start: string, count: string) => {
  return useQuery({
    queryKey: ["GetMatches", puuid],
    queryFn: () => GetMatches(puuid, start, count),
    refetchOnWindowFocus: false,
  });
};

export default useGetMatchesQuery;
