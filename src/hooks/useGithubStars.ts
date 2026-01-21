import { useQuery } from "@tanstack/react-query";
import { getStars } from "@/api/main/github";

export const useGithubStars = () => {
  return useQuery({
    queryKey: ["stars"],
    queryFn: getStars,
    staleTime: 1000 * 60 * 10,
  });
};
