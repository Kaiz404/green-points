'use client';

import Image from "next/image"
import { checkTokenBalance } from "../lib/GreenToken";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useEffect, useState } from "react";
import { get } from "http";

const Balance = () => {
    const { account } = useWallet();
    const [balance, setBalance] = useState<number>(0);

    useEffect(() => {
      if (!account) {
        return;
      }

      const getBalance = async() => {
        setBalance(await checkTokenBalance({ account }));
      }

      getBalance();
    }, [])


    return (
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold text-black">Your Balance:</div>
          <div className="flex items-center">
            <Image
              className="mt-5 mb-5 mr-2"
              src="/greentoken.png"
              alt="logo"
              width={45}
              height={45} />
            <div className="text-5xl font-bold text-black">{balance}</div>
          </div>
        </div>
    )
}

export default Balance;