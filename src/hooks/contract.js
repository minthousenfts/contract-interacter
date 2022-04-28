import { ethers } from "ethers";
import { useEffect, useState } from "react";
import mgcContractAbi from "../utils/mgc_contract.json";
import { useWallet } from "./wallet";
const contractAddress = "0x05120A6b33e89844cD5a447545Bc6BB63d4b329b";

export const useContract = () => {
  const { provider, signer } = useWallet();
  const [contract, setContract] = useState(null);
  useEffect(() => {
    if (!provider) return;
    const contract = new ethers.Contract(
      contractAddress,
      mgcContractAbi,
      provider
    );
    setContract(contract);
  }, [provider]);
  const getContractName = async () => (contract ? await contract.name() : "");
  const mint = async (address, gemId) => {
    const contractWithSigner = contract.connect(signer);
    const mintTxn = await (await contractWithSigner)
      .whitelistMint(address, gemId)
      .catch((e) => console.log(e));
    if (!mintTxn) return false;
    return true;
  };
  return { mint, getContractName, isContractLoaded: !!contract };
};
