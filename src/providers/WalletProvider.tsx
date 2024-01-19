"use client";

import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { ReactNode } from "react";
import { mainnet, goerli } from "wagmi/chains";

const config = createConfig(
  getDefaultConfig({
    alchemyId: process.env.ALCHEMY_ID,
    walletConnectProjectId:
      process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "",
    chains: [goerli],

    // Required
    appName: "Jayden Application",

    // Optional
    appDescription: "Jayden Application - For Teaching",
  })
);

const WalletProvider = ({ children }: { children: ReactNode }) => {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider theme="retro" mode="dark">
        {children}
      </ConnectKitProvider>
    </WagmiConfig>
  );
};

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}

export default WalletProvider;
