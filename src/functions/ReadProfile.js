import CeramicClient from "@ceramicnetwork/http-client";
import { IDX } from "@ceramicstudio/idx";
import { ConnectWallet } from "./ConnectWallet";

const endpoint = "https://ceramic-clay.3boxlabs.com";

export const ReadProfile = async () => {
    const addr = await ConnectWallet();
    const ceramic = new CeramicClient(endpoint);
    const idx = new IDX({ ceramic });

    try {
        const basicInfo = await idx.get("basicProfile", `${addr}@eip155:1`);
        console.log(basicInfo);

        return basicInfo;
    } catch (error) {
        console.log("error: ", error);
    }
};

export const ExploreProfile = async (addr) => {
    const ceramic = new CeramicClient(endpoint);
    const idx = new IDX({ ceramic });

    try {
        const basicInfo = await idx.get("basicProfile", `${addr}@eip155:1`);
        console.log(basicInfo);

        return basicInfo;
    } catch (error) {
        console.log("error: ", error);
    }
};
