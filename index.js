class Block {
    constructor({timestamp, lastHash, data, hash}){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.data = data;
        this.hash = hash;
    }
}

const blockOne = new Block({
    data: 'foo-data',
    lastHash: 'foo-lastHash',
    hash: 'foo-hash',
    timestamp: '03/16/20'
}

)

console.log(blockOne)