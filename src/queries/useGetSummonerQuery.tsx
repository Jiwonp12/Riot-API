import { useQuery } from "@tanstack/react-query";
import { GetSummoner } from "./../api/api";

const useGetSummonerQuery = (id: string) => {
  return useQuery({
    queryKey: ["GetSummoner", id],
    queryFn: () => GetSummoner(id),
    refetchOnWindowFocus: false,
  });
};

export default useGetSummonerQuery;
