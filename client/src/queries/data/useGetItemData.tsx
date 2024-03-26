import { useQuery } from "@tanstack/react-query";
import { GetItemData } from "../../api/api";

const useGetItemData = () => {
  return useQuery({
    queryKey: ["GetItemData"],
    queryFn: () => GetItemData(),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};

export default useGetItemData;
