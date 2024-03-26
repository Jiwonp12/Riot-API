import { useQuery } from "@tanstack/react-query";
import { GetChallengerFreeData } from "@/api/api";

const useGetChallengerFreeData = () => {
  return useQuery({
    queryKey: ["GetChallengerFreeData"],
    queryFn: () => GetChallengerFreeData(),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};

export default useGetChallengerFreeData;
