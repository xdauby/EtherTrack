const Web3 = require('web3');
const mainnet = 'https://mainnet.infura.io/v3/67dad3b7954247ffac010d4b35aa7055';
const walletAddress = '0x3866DaD7fb9672e54daD3e4378aEd0Ed3B747866';
const web3 = new Web3(new Web3.providers.HttpProvider(mainnet));

//return balance in ETH of a certain wallet address on eth blockchain

var getBalanceETH = async(walletAddress) => {
    var balanceETH = await web3.eth.getBalance(walletAddress).then((balanceInWei) => {
        return web3.utils.fromWei(balanceInWei);
        });
    return balanceETH
}

module.exports = {getBalanceETH};