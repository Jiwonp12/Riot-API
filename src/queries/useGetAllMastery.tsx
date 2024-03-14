import { useQuery } from "@tanstack/react-query";
import { GetAllMastery } from "./../api/api";

const useGetAllMastery = (puuid: string) => {
  return useQuery({
    queryKey: ["useGetAllMastery"],
    queryFn: () => GetAllMastery(puuid),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};

export default useGetAllMastery;
