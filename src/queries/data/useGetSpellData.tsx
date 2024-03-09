import { useQuery } from "@tanstack/react-query";
import { GetSpellData } from "../../api/api";

const useGetSpellData = () => {
  return useQuery({
    queryKey: ["GetSpellData"],
    queryFn: () => GetSpellData(),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};

export default useGetSpellData;
