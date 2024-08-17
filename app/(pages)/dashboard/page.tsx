'use client';

import Image from 'next/image';
import { useRouter } from "next/navigation";
import { useWalletContext } from "../../context/WalletContext";
import { useEffect } from 'react';

const Dashboard = () => {
    const router = useRouter();
    const { connected, setConnected } = useWalletContext();

    useEffect(() => {
        if (!connected) {
            router.push("/");
        }
    }, [connected]);

    return (
        <div className="flex flex-col justify-center items-center w-full h-full bg-background">
          <Image
            className="mt-5 mb-5"
            src="/ScanQR.png"
            alt="logo"
            width={200}
            height={200}
          />

          <div className="text-4xl font-bold text-black">Claim Token</div>
          <div className="text-2xl font-bold text-black mb-6">Your Balance: 10920</div>
  
          {/* <WalletButton /> */}
          <button className="bg-secondary text-white w-auto p-4 rounded-md text-2xl hover:shadow-xl">
            Scan QR
          </button>
        </div>
    )
}

export default Dashboard;