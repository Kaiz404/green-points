"use client";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import AptosWallet from "./AptosWallet";

export default function WalletButton() {
    const wallets = [new PetraWallet()]
    return (
    <>
        <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
            <AptosWallet />
        </AptosWalletAdapterProvider>
    </>
    );
}