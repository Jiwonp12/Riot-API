import { useQuery } from "@tanstack/react-query";
import { GetChampionData } from "../../api/api";

const useGetChampionData = () => {
  return useQuery({
    queryKey: ["GetChampionData"],
    queryFn: () => GetChampionData(),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};

export default useGetChampionData;
