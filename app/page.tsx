'use client';

import Image from "next/image";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AptosWallet from "./components/AptosWallet";

export default function Home() {
  const router = useRouter();
  const { account, connected, wallet, changeNetwork } = useWallet();

  const handleInitialize = () => {
    router.push("/dashboard");
  };
  
  useEffect(()=>{
    if (account){
      console.log("Wallet Connected");
    }
  }, [account]);

  return (
    <main className="bg-background h-full">
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

              <div className="text-4xl font-bold text-black">Account</div>
              <div className="text-4xl font-bold text-black mb-6">Initialized</div>
      
              <button onClick={handleInitialize} className="bg-secondary text-white w-auto p-4 rounded-md text-2xl hover:shadow-xl">
                Go to Dashboard
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

              <div className="text-4xl font-bold text-black">Account</div>
              <div className="text-4xl font-bold text-black mb-6">Disconnected</div>
      
              <button onClick={handleInitialize} className="bg-secondary text-white w-auto p-4 rounded-md text-2xl hover:shadow-xl">
                Initialize Wallet
              </button>
            </div>
          )
        }
    </main>
  );
}
