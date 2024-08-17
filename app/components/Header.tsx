// 'use client';

// import Image from "next/image";
// import WalletButton from "./WalletButton";
// import { useState } from "react";

// const Header = () => {
//     const [connected, useConnected] = useState(false);
//     const handleClick = () => {
//         useConnected(connected ? false : true);
//         console.log("Wallet Connected: ", connected);
//     }

//     return (
//         <div className="flex items-center justify-between p-3 h-[8vh] bg-secondary">
            
//             <Image 
//                 className=""
//                 width={100} height={80} src="/logo.png" alt="logo" />

//             {/* <WalletButton /> */}
//             <button 
//                 onClick={handleClick}
//                 className="bg-blue-500 rounded-2xl w-36 h-12 hover:shadow-xl">
//                     Connect Wallet
//             </button>
//         </div>
//     )
// }

// export default Header;

'use client';

import Image from "next/image";
import { useWalletContext } from "../context/WalletContext";

const Header = () => {
  const { connected, setConnected } = useWalletContext();

  const handleClick = () => {
    setConnected(!connected);
    console.log("Wallet Connected: ", !connected);
  };

  return (
    <div className="flex items-center justify-between p-3 h-[8vh] bg-secondary">
      <Image className="" width={100} height={80} src="/logo.png" alt="logo" />
      <button onClick={handleClick} className="bg-blue-500 rounded-2xl w-36 h-12 hover:shadow-xl">
        {connected ? "Disconnect Wallet" : "Connect Wallet"}
      </button>
    </div>
  );
};

export default Header;