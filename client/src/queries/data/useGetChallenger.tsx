import { useQuery } from "@tanstack/react-query";
import { GetChallengerSoloData } from "@/api/api";

const useGetChallengerSoloData = () => {
  return useQuery({
    queryKey: ["GetChallengerSoloData"],
    queryFn: () => GetChallengerSoloData(),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};

export default useGetChallengerSoloData;
