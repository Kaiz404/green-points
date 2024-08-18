'use client';

import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image';
import Balance from '@/app/components/Balance';
import { claimGreenToken } from '@/app/lib/GreenToken';
import { useWallet } from '@aptos-labs/wallet-adapter-react';

const Page = () => {
    const router = useRouter();
    const params = useParams()
    console.log(params)
    const { id, code } = params;

    const { account, signAndSubmitTransaction } = useWallet();

    console.log(id);

    if (account) {
      claimGreenToken(parseInt(id.toString()), code.toString(), account, signAndSubmitTransaction);
    }

    const handleClick = () => {
        router.push("/dashboard");
    };

    return (
        <div className="bg-background flex flex-col justify-center items-center w-full h-full">
          <div className="text-4xl font-bold text-black mb-4">{id}</div>
          <div className="text-4xl font-bold text-black mb-4">{code}</div>
          <Image
            className="mt-5 mb-5"
            src="/Claimed.png"
            alt="logo"
            width={200}
            height={200}
          />

          <div className="text-4xl font-bold text-black mb-4">Success!</div>

          <Balance />
  
          <button onClick={handleClick} className="bg-red-500 mt-10 text-white w-auto p-4 rounded-md text-2xl hover:shadow-xl">
            Go Back
          </button>
        </div>
    );
}

export default Page;