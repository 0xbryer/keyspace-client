import { defineConfig } from "@wagmi/cli";
import entrypointABI from "./abis/Entrypoint.json";
import smartWalletABI from "./abis/SmartWallet.json";
import smartWalletFactoryABI from "./abis/SmartWalletFactory.json";
import anchorStateRegistryABI from "./abis/AnchorStateRegistry.json";
import keystoreABI from "./abis/Keystore.json";
import bridgedKeystoreABI from "./abis/BridgedKeystore.json";
import l1BlockABI from "./abis/L1Block.json";

export default defineConfig({
  out: "./generated.ts",
  contracts: [
    {
      abi: smartWalletFactoryABI,
      address: "0xFB739503f4C342E1eef28a42c83f89353873784E",
      name: "AccountFactory",
    },
    {
      abi: smartWalletABI,
      name: "Account",
    },
    {
      abi: entrypointABI,
      name: "EntryPoint",
      address: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
    },
    {
      abi: anchorStateRegistryABI,
      name: "AnchorStateRegistry",
      address: "0x4C8BA32A5DAC2A720bb35CeDB51D6B067D104205",
    },
    {
      abi: keystoreABI,
      name: "Keystore",
      address: "0x8346284b016A22d23EbA31966cffc05b617DC32A",
    },
    {
      abi: bridgedKeystoreABI,
      name: "BridgedKeystore",
      address: "0x65C1Cf5a8c14D7C787aD32ffFEDD8a1062c0B050"
    },
    {
      abi: l1BlockABI,
      name: "L1Block",
      address: "0x4200000000000000000000000000000000000015",
    }
  ],
});
