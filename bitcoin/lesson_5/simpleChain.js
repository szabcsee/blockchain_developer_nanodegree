const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(data) {
        this.hash = "";
        this.height = 0;
        this.body = data;
        this.previousBlockHash = "";
    }
}

class Blockchain {
    constructor() {
        this.chain = [];
        this.addBlock(this.createGenesisBlock());
    }
    getLatestBlock(){
        return this.chain[this.chain.length -1];
    }
    addBlock(newBlock) {
        newBlock.height = this.chain.length;
        newBlock.timeStamp = new Date().getTime().toString().slice(0,-3);
        if (this.chain.length > 0) {
            newBlock.previousBlockHash = this.getLatestBlock().hash
        }
        newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
        this.chain.push(newBlock);
    }
    createGenesisBlock(){
        return new Block("First block in the chain - Genesis block");
    }
}