import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { walletState } from "../state/app";
import "../styles/button.css";

export const Button = (props) => {
  const wallet = useRecoilValue(walletState);
  const [message, setMessage] = useState("Connect to wallet");

  useEffect(() => {
    wallet.address && props && setMessage(`Mint ${props.gemType}`);
  }, [wallet.address, props]);

  const handleClick = () => {
    if (wallet.address) {
      props.onMint();
    } else {
      props.onConnectToMetamask();
    }
  };

  return (
    <button onClick={handleClick} disabled={props.isDisabled}>
      {message}
      {props.isLoading ? (
        <div>
          <i className="fa fa-spinner fa-spin" />
        </div>
      ) : null}
    </button>
  );
};
