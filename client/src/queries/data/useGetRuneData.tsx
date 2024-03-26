import { useQuery } from "@tanstack/react-query";
import { GetRuneData } from "../../api/api";

const useGetRuneData = () => {
  return useQuery({
    queryKey: ["GetRuneData"],
    queryFn: () => GetRuneData(),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};

export default useGetRuneData;
