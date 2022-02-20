import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

dotenv.config();

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_URL || "",
      accounts: {
        mnemonic: process.env.MNEMONIC || "",
      },
    },
    polygon: {
      url: process.env.POLYGON_URL || "",
      accounts: {
        mnemonic: process.env.MNEMONIC || "",
      },
    },
    binance: {
      url: process.env.BINANCE_URL || "",
      accounts: {
        mnemonic: process.env.MNEMONIC || "",
      },
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
};

export default config;
