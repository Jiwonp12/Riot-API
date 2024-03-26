import { useQuery } from "@tanstack/react-query";
import { GetTier } from "./../api/api";

const useGetTier = (id: string) => {
  return useQuery({
    queryKey: ["GetTier", id],
    queryFn: () => GetTier(id),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};

export default useGetTier;
