import { atom } from "recoil";

export const walletState = atom({
  key: "_app.walletState",
  default: {
    address: "",
    chainId: "",
  },
});
