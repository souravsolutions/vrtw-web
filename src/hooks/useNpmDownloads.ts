import { useQuery } from "@tanstack/react-query";
import { getDownloads } from "@/api/main/npm";

export function useNpmDownloads() {
  return useQuery({
    queryKey: ["downloads"],
    queryFn: getDownloads,
    staleTime: 1000 * 60 * 60,
  });
}
