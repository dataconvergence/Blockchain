import web3 from './web3';

//access our local copy to contract deployed on rinkeby testnet
//use your own contract address
const address = '0xe9074df35A2182B9B0C87631943eEb7Ca67A4918';
//use the ABI from your contract
const abi = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "x",
        "type": "string"
      }
    ],
    "name": "sendHash",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getHash",
    "outputs": [
      {
        "internalType": "string",
        "name": "x",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
export default new web3.eth.Contract(abi, address);