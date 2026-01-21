import githubApi from "../github-axios";

type GitHubStarsResponse = {
  stargazers_count: number;
};

export const getStars = async (): Promise<number | null> => {
  try {
    const res = await githubApi.get<GitHubStarsResponse>("");
    return res.data.stargazers_count;
  } catch (error) {
    console.error("Failed to fetch github stars", error);
    return null;
  }
};
