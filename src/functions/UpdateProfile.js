import CeramicClient from "@ceramicnetwork/http-client";
import ThreeIdResolver from "@ceramicnetwork/3id-did-resolver";

import { EthereumAuthProvider, ThreeIdConnect } from "@3id/connect";
import { DID } from "dids";
import { IDX } from "@ceramicstudio/idx";

import { ConnectWallet } from "./ConnectWallet";

const endpoint = "https://ceramic-clay.3boxlabs.com";

export const UpdateProfile = async (name, description, imageUrl) => {
    const addr = await ConnectWallet();
    const ceramic = new CeramicClient(endpoint);
    const threeIdConnect = new ThreeIdConnect();
    const provider = new EthereumAuthProvider(window.ethereum, addr);

    await threeIdConnect.connect(provider);

    const did = new DID({
        provider: threeIdConnect.getDidProvider(),
        resolver: {
            ...ThreeIdResolver.getResolver(ceramic),
        },
    });

    ceramic.setDID(did);
    await ceramic.did.authenticate();

    const idx = new IDX({ ceramic });

    console.log(did);
    await idx.set("basicProfile", {
        name,
        description,
        avatar: imageUrl,
    });

    console.log("Profile updated!");
};
