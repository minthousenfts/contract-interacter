import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { walletState } from "../state/app";

export const useWallet = () => {
  // eslint-disable-next-line
  const [wallet, setWallet] = useRecoilState(walletState);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);

  useEffect(() => {
    window.ethereum && getMetamask();
    // eslint-disable-next-line
  }, [window.ethereum]);

  useEffect(() => {
    if (!signer) return;
    // eslint-disable-next-line
    setWalletState();
    listenToNetworkSwitch();
    // eslint-disable-next-line
  }, [signer]);

  const listenToNetworkSwitch = () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    provider.on("network", (newNetwork, oldNetwork) => {
      if (oldNetwork) {
        window.location.reload();
      }
    });
  };

  const getMetamask = () => {
    const metamask = window.ethereum;
    if (metamask) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);
      setSigner(provider.getSigner());
    }
  };

  const setWalletState = async () => {
    const address = await signer.getAddress();
    const network = await provider.getNetwork();
    setWallet({
      address,
      chainId: network.chainId,
    });
  };

  const connectToMetamask = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    setProvider(provider);
    const signer = provider.getSigner();
    setSigner(signer);
  };

  return {
    signer,
    provider,
    connectToMetamask,
  };
};
