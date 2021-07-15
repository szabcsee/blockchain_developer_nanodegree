const Web3 = require('web3'),
    EthereumTx = require('ethereumjs-tx').Transaction,
    url = 'http://127.0.0.1:8545', //Ganache url
    web3 = new Web3(url); 

let sendingAddress = '0xF483d4c0C8b5A9CB450D345De25E761BCA39Bbbd',
    receivingAddress = '0x249cefB9165De32D6f9D67f2A3Ae2cf972f6a9C7',
    privateKey = Buffer.from('490727426d01fb0a171491012631563e4dd863a49f3f300118587bbc5f468967','hex',),
    txParams = {
        nonce: ascii_2_0xhex(0),
        to: receivingAddress,
        gasPrice: ascii_2_0xhex(20000000),
        gasLimit: ascii_2_0xhex(30000),
        value: ascii_2_0xhex(100),
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
