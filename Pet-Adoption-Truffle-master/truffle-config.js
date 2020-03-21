const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

const MNEMONIC = "slush jeans near thank annual cushion illegal that melody mansion lizard object";
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby:{
      provider : () => new HDWalletProvider(MNEMONIC,"https://rinkeby.infura.io/v3/c6e86b47ba654275b643cdc50705ab9e"),
      network_id : 4,
      networkCheckTimeout: 1000000,
    }
  }
};
