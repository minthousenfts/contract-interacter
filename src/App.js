// import dependencies
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import { Button } from "./components/Button";
import { useContract } from "./hooks/contract";
import { useWallet } from "./hooks/wallet";
import { walletState } from "./state/app";
import { getGemstoneName } from "./utils/functions";
import truncateEthAddress from "truncate-eth-address";
// import styles 
import "./styles/index.css";
// import images 
import mgc_logo from "./assets/mgc_logo.png";
import Amethyst from "./assets/Stone_Purple.png";
import gif from "./assets/pikachu.gif";

export const App = () => {
  const { connectToMetamask } = useWallet();
  const { mint, getContractName, isContractLoaded } = useContract();
  const wallet = useRecoilValue(walletState);
  const [title, setTitle] = useState("");
  // eslint-disable-next-line
  const [gemstoneId, setGemstoneId] = useState(0);
  const [isAwaitingTxn, setIsAwaitingTxn] = useState(false);

  useEffect(() => {
    if (wallet.chainId !== 1 && wallet.address) {
      setTitle("Switch to Mainnet");
    } else if (wallet.chainId === 1) {
      isContractLoaded && getContractName().then(() => setTitle("Gemstone Minter"));
    }
    // eslint-disable-next-line
  }, [isContractLoaded, wallet]);

  const handleMint = async () => {
    setIsAwaitingTxn(true);
    const response = await mint(wallet.address, gemstoneId);
    if (response) {
      console.log(response);
      toast.success("Mint successful. Might take a while to show on opensea.");
    } else {
      toast.error("Mint failed. Most likely address is not whitelisted. see console for full error");
      console.log(toast.error)
    }
    setIsAwaitingTxn(false);
  };

  return (
    <div className="body-div">
      <div className="content-wrap">
        <img alt="MGC logo" className="logo" src={mgc_logo} />
        <span className="title">{title}</span>
        <div className="gemstone-section">
          <img alt="gemstone" className="gemstone-img" src={Amethyst} />
          <div>
            {/* hiding gemstone input for now because only purple gemstone is currently available */}
            {/* <input
              className="gemstone-picker"
              type="range"
              min="0"
              max="5"
              value={gemstoneId}
              onChange={(e) => {
                setGemstoneId(+e.target.value);
              }}
            /> */}
            <Button
              onConnectToMetamask={connectToMetamask}
              onMint={handleMint}
              gemType={getGemstoneName(gemstoneId)}
              isLoading={isAwaitingTxn}
              isDisabled={false}
            />
            <span style={{ fontSize: "16px" }}>
              Connected address: {wallet.address ? truncateEthAddress(wallet.address) : "None"}
            </span>
          </div>
        </div>
      </div>
      <div className="footer">
        <div>
          <a href="https://www.maltgraincane.com/">Malt, Grain & Cane Store</a>
          <a href="https://www.maltgraincane.com/pages/about">About Us</a>
          <a href="https://www.minthouse.dev/">NFTs by Minthouse.dev</a>
        </div>
        <img alt="under construction" src={gif} />
      </div>
    </div>
  );
};
