require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config({ path: '.env' });

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY_URL;
const GOERLI_KEY = process.env.GOERLI_PRIVATE_KEY;


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: ALCHEMY_API_KEY,
      accounts: [GOERLI_KEY],
    },
  },
};
