import npmApi from "../npm-axios";

type NpmDownloadsResponse = {
	downloads: number;
};

export const getDownloads = async (): Promise<number | null> => {
	try {
		const res = await npmApi.get<NpmDownloadsResponse>("");
		return res.data.downloads;
	} catch (error) {
		console.error("Failed to fetch npm downloads", error);
		return null;
	}
};
