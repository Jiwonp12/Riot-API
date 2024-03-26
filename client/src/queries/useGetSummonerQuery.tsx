import { useQuery } from "@tanstack/react-query";
import { GetSummoner } from "./../api/api";
import { TagData } from "@/types/types";

const useGetSummonerQuery = (id: string, tagData: TagData) => {
  return useQuery({
    queryKey: ["GetSummoner", id],
    queryFn: () => GetSummoner(id),
    refetchOnWindowFocus: false,
    enabled: !!tagData,
  });
};

export default useGetSummonerQuery;
