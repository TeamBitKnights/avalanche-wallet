import Web3 from 'web3'

const defaultRpcUrl = `http://localhost:9650/ext/bc/C/rpc`

export let web3 = new Web3(defaultRpcUrl)
export const changeRpc = (rpcProvider: any) => {
    web3 = new Web3(rpcProvider)
}
