import { useQuery } from "@tanstack/react-query";
import { GetChampionRotation } from "./../api/api";

const useGetChampionRotation = () => {
  return useQuery({
    queryKey: ["GetChampionRotation"],
    queryFn: () => GetChampionRotation(),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};

export default useGetChampionRotation;
