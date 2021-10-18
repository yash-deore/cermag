export const ConnectWallet = async () => {
    const addresses = await window.ethereum.request({
        method: "eth_requestAccounts",
    });
    console.log(addresses[0]);
    return addresses[0];
};
