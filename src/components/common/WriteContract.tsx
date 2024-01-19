"use client";

import React from "react";
import Image from "next/image";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import FlipCard, { BackCard } from "./FlipCard";
import ABI from "../../abi/devcon.json";

const contractConfig = {
  address: "0x9759063Bc84a6844dc58338cbdfAB9d6eF57f639",
  abi: ABI,
} as const;

export function CheckIn() {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const [totalMinted, setTotalMinted] = React.useState(0);
  const { isConnected } = useAccount();

  const { config: contractWriteConfig } = usePrepareContractWrite({
    ...contractConfig,
    functionName: "checkin",
  });

  const {
    data: mintData,
    write: mint,
    isLoading: isMintLoading,
    isSuccess: isMintStarted,
    error: mintError,
  } = useContractWrite(contractWriteConfig);

  const { data: totalSupplyData } = useContractRead({
    ...contractConfig,
    functionName: "totalSupply",
    watch: true,
  });

  const {
    data: txData,
    isSuccess: txSuccess,
    error: txError,
  } = useWaitForTransaction({
    hash: mintData?.hash,
  });

  React.useEffect(() => {
    if (totalSupplyData) {
      setTotalMinted(Number(totalSupplyData));
    }
  }, [totalSupplyData]);

  const isMinted = txSuccess;

  return (
    <div className="flex justify-center">
      <div className="w-full">
        <div
          style={{ flex: "1 1 auto" }}
          className="w-full flex flex-col items-center text-center"
        >
          <div className="w-1/6">
            <h1>Road To DevCon</h1>
            <p style={{ margin: "12px 0 24px" }}>
              {Number(totalMinted)} participants!
            </p>

            {mintError && (
              <p style={{ marginTop: 24, color: "#FF6257" }}>
                Error: {mintError.message}
              </p>
            )}
            {txError && (
              <p style={{ marginTop: 24, color: "#FF6257" }}>
                Error: {txError.message}
              </p>
            )}

            {mounted && isConnected && !isMinted && (
              <button
                // style={{ marginTop: 24, color: "#FF6257" }}
                disabled={!mint || isMintLoading || isMintStarted}
                className="my-8 w-full h-10 inline-flex justify-center items-center  transition-all  rounded px-4 py-1.5 md:py-2 text-base font-semibold leading-7 text-zinc-800   bg-indigo-400 ring-1  duration-150  hover:text-black hover:drop-shadow-cta   hover:bg-green-300"
                data-mint-loading={isMintLoading}
                data-mint-started={isMintStarted}
                onClick={() => mint?.()}
              >
                {isMintLoading && "Waiting for approval"}
                {isMintStarted && "Loading..."}
                {!isMintLoading && !isMintStarted && "Check in"}
              </button>
            )}
          </div>
        </div>

        <div
          style={{ flex: "0 0 auto" }}
          className="flex flex-col items-center text-center"
        >
          <FlipCard>
            <BackCard isCardFlipped={isMinted}>
              <div style={{ padding: 24 }}>
                <h2 style={{ marginTop: 24, marginBottom: 6 }}>
                  Check in successful!
                </h2>
                <p style={{ marginBottom: 24 }}>
                  You have received 1 DevCon NFT. Thank you for participating.
                </p>
                <Image
                  src="/nft.png" // Path to your image file inside the public folder
                  alt="Example Image"
                  width={500} // Desired width of the image
                  height={800} // Desired height of the image
                />
                <p style={{ marginTop: 12 }}>
                  View on {""}
                  <a
                    href={`https://testnet.bscscan.com/tx/${mintData?.hash}`}
                    target="_blank"
                    className="underline"
                  >
                    BSCScan
                  </a>
                </p>
              </div>
            </BackCard>
          </FlipCard>
        </div>
      </div>
    </div>
  );
}
