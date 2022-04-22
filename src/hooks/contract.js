import { ethers } from "ethers";
import { useEffect, useState } from "react";
import mgcContractAbi from "../utils/mgc_contract.json";
import { useWallet } from "./wallet";
const contractAddress = "0x309dd80e29ab87b553592dc0c4938562adfab3c9";

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
