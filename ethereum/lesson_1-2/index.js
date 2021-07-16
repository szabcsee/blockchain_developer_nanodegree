const Web3 = require('web3'),
    EthereumTx = require('ethereumjs-tx').Transaction,
    url = 'http://127.0.0.1:8545', //Ganache url
    web3 = new Web3(url); 

let sendingAddress = '0x942D31Ce813E1B34917B97031B628227d00b13d0',
    receivingAddress = '0x55763dED5BCE10f8886861BE54d418Cef6EDEc17',
    privateKey = Buffer.from('ebdcb2ea2542057cfe4a3d3808504ecf9be1c16bbbbb5513cf7d83fb69e87586','hex',),
    txParams = {
        nonce: ascii_2_0xhex(7),
        to: receivingAddress,
        gasPrice: ascii_2_0xhex(20000000),
        gasLimit: ascii_2_0xhex(30000),
        value: ascii_2_0xhex(10000000000000000000),
        data: "0x00"
    }
const tx = new EthereumTx(txParams, { chain: 'mainnet', hardfork: 'petersburg' });

tx.sign(privateKey);

const serializedTx = tx.serialize();
web3.eth.sendSignedTransaction(serializedTx);



web3.eth.getBalance(sendingAddress).then(balance => console.log(web3.utils.fromWei(balance, 'ether')));

web3.eth.getBalance(receivingAddress).then(balance => console.log(web3.utils.fromWei(balance, 'ether')));

function ascii_2_0xhex(num){
    return "0x" + num.toString(16)
}
