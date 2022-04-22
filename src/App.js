import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import { Button } from "./components/Button";
import { useContract } from "./hooks/contract";
import { useWallet } from "./hooks/wallet";
import { walletState } from "./state/app";
import { getGemstoneName } from "./utils/functions";

export const App = () => {
  const { connectToMetamask } = useWallet();
  const { mint, getContractName, isContractLoaded } = useContract();
  const wallet = useRecoilValue(walletState);
  const [contractName, setContractName] = useState("");
  const [gemstoneId, setGemstoneId] = useState(1);
  const [customerAddress, setCustomerAddress] = useState("");
  const [isAwaitingTxn, setIsAwaitingTxn] = useState(false);

  useEffect(() => {
    isContractLoaded && getContractName().then((name) => setContractName(name));
  }, [isContractLoaded]);

  const handleMint = async () => {
    setIsAwaitingTxn(true);
    const response = await mint(customerAddress, gemstoneId);
    if (response) {
      toast.success("Mint successful");
    } else {
      toast.error("Mint failed, see console for error");
    }
    setIsAwaitingTxn(false);
  };

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(to bottom, #eff1fa, #c1c7eb)",
      }}
    >
      {contractName ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            paddingTop: "4rem",
            textAlign: "center",
          }}
        >
          <span style={{ fontSize: "32px" }}>{contractName}</span>
          <input
            style={{ minWidth: "300px" }}
            type="text"
            placeholder="0x0000000..."
            onChange={(e) => setCustomerAddress(e.target.value)}
          />
          <input
            type="range"
            min="1"
            max="6"
            value={gemstoneId}
            onChange={(e) => {
              setGemstoneId(+e.target.value);
            }}
          />
          <Button
            onConnectToMetamask={connectToMetamask}
            onMint={handleMint}
            gemType={getGemstoneName(gemstoneId)}
            isLoading={isAwaitingTxn}
          />
          <span style={{ fontSize: "16px" }}>
            Connected address: {wallet.address}
          </span>
        </div>
      ) : (
        <i className="fa fa-spinner fa-spin" />
      )}
    </div>
  );
};
