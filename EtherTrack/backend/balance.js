const Web3 = require('web3');
const mainnet = 'https://mainnet.infura.io/v3/67dad3b7954247ffac010d4b35aa7055';
const walletAddress = '0x49a2dcc237a65cc1f412ed47e0594602f6141936';
const web3 = new Web3(new Web3.providers.HttpProvider(mainnet));

//return balance in ETH of a certain wallet address on eth blockchain
var getBalanceETH = async(walletAddress) => {
    var balanceETH = await web3.eth.getBalance(walletAddress).then((balanceInWei) => {
        return web3.utils.fromWei(balanceInWei, 'ether');
        });
    return balanceETH
}

module.exports = {getBalanceETH};