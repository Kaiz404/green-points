'use client';

import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image';

const Page = () => {
    const router = useRouter();
    const params = useParams()
    console.log(params)
    const { id, code } = params;

    const handleClick = () => {
        router.push("/dashboard");
    };

    return (
        <div className="flex flex-col justify-center items-center w-full h-full">
          <Image
            className="mt-5 mb-5"
            src="/Claimed.png"
            alt="logo"
            width={200}
            height={200}
          />

          <div className="text-4xl font-bold text-black">Success!</div>
          <div className="text-2xl font-bold text-black mb-6">Your Balance: 10920</div>
  
          <button onClick={handleClick} className="bg-red-500 text-white w-auto p-4 rounded-md text-2xl hover:shadow-xl">
            Go Back
          </button>
        </div>
    );
}

export default Page;