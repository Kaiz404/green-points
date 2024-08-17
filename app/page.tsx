'use client';

import Image from "next/image";
import App from "./components/AptosWallet";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import WalletButton from "./components/WalletButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IMAGE_HEIGHT, IMAGE_WIDTH } from "@/public/constants";
import { useWalletContext } from "./context/WalletContext";

export default function Home() {
  const router = useRouter();
  const { connected, setConnected } = useWalletContext();

  // const handleConnect = async() => {
  //   console.log("Wallet Connected");
  //   useAccount(true);
  //   router.push("/dashboard");
  // };  

  const handleButton = () => {
    // setConnected(true);
    router.push("/dashboard");
  };

  const [account, useAccount] = useState(false);
  // const { account, connected } = useWallet();
  
  // useEffect(()=>{
  //   if (account){
  //     console.log("Wallet Connected");
  //   }
  // }, [account]);

  return (
    <main className="bg-white h-full">
        {
          connected ? (
            <div className="flex flex-col justify-center items-center w-full h-full">
              <Image
                className="mt-5 mb-5"
                src="/ConnectedWallet.png"
                alt="logo"
                width={200}
                height={200}
              />

              <div className="text-4xl font-bold text-black">Account Not</div>
              <div className="text-4xl font-bold text-black mb-6">Initialized</div>
      
              {/* <WalletButton /> */}
              <button onClick={handleButton} className="bg-secondary text-white w-auto p-4 rounded-md text-2xl hover:shadow-xl">
                Initialize Wallet
              </button>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center w-full h-full">
              <Image
                className="mt-5 mb-5"
                src="/UnconnectedWallet.png"
                alt="logo"
                width={200}
                height={200}
              />

              <div className="text-4xl font-bold text-black">Account Not</div>
              <div className="text-4xl font-bold text-black mb-6">Initialized</div>
      
              {/* <WalletButton /> */}
              <button onClick={handleButton} className="bg-secondary text-white w-auto p-4 rounded-md text-2xl hover:shadow-xl">
                Initialize Wallet
              </button>
            </div>
          )
        }
    </main>
  );
}
