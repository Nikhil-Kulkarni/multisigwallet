/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");
module.exports = {
  solidity: "0.7.3",
  defaultNetwork: 'ropsten',
  networks: {
    ropsten: {
      url: process.env.INFURA_URL,
      accounts: [`${process.env.PRIVATE_KEY}`],
      gas: 210000,
    }
  },
  etherscan: {
    apiKey: `${process.env.ETHERSCAN_KEY}`
  },
  mocha: {
    timeout: 60000,
  }
};
