'use client';

import { ReactNode } from "react";
import { WalletProvider } from "../context/WalletContext";

const WalletContextProvider = ({ children }: { children: ReactNode }) => {
  return <WalletProvider>{children}</WalletProvider>;
};

export default WalletContextProvider;