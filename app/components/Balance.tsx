import Image from "next/image"

const Balance = ({balance}: {balance: any}) => {
    return (
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold text-black">Your Balance:</div>
          <div className="flex items-center">
            <Image
              className="mt-5 mb-5 mr-2"
              src="/aptos.png"
              alt="logo"
              width={45}
              height={45} />
            <div className="text-5xl font-bold text-black">{balance}</div>
          </div>
        </div>
    )
}

export default Balance;