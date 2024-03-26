import { useQuery } from "@tanstack/react-query";
import { GetChampionDetailData } from "../../api/api";

const useGetChampionDetailData = (champion?: string) => {
  return useQuery({
    queryKey: ["GetChampionDetailData", champion],
    queryFn: () => GetChampionDetailData(champion),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};

export default useGetChampionDetailData;
