import { useQuery } from "@tanstack/react-query";
import { GetMatches } from "./../api/api";

const useGetMatchesQuery = (puuid: string) => {
  return useQuery({
    queryKey: ["GetMatches", puuid],
    queryFn: () => GetMatches(puuid),
    refetchOnWindowFocus: false,
  });
};

export default useGetMatchesQuery;
