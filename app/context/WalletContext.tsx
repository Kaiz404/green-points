import { createContext, useContext, useState, ReactNode } from "react";

interface WalletContextProps {
  connected: boolean;
  setConnected: (connected: boolean) => void;
}

const WalletContext = createContext<WalletContextProps | undefined>(undefined);

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [connected, setConnected] = useState(false);

  return (
    <WalletContext.Provider value={{ connected, setConnected }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWalletContext = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWalletContext must be used within a WalletProvider");
  }
  return context;
};