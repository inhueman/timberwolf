const Block = require('./Block');
const {GENESIS_DATA} = require('./config')

    describe('Block', () =>{
        const timestamp = 'a-date';
        const lastHash = 'foo-hash';
        const hash = 'bar-hash';
        const data = ['blockchain', 'data'];
        const block = new Block({timestamp, lastHash, hash, data});

        it('has a timestamp, lastHash, hash and data property', () =>{
            expect(block.timestamp).toEqual(timestamp);
            expect(block.lastHash).toEqual(lastHash);
            expect(block.hash).toEqual(hash);
            expect(block.data).toEqual(data);
        });

    describe('genesis()', () => {
            const genesisBlock = Block.genesis();

            //  console.log('genesisBlock', genesisBlock)

            it('returns a Block instance', () =>{
                expect(genesisBlock instanceof Block).toBe(true);
            });

            it('returns a Block instance', () =>{
                expect(genesisBlock).toEqual(GENESIS_DATA)
            });   
        });   mineBlock
    describe('mineBlock()', () => {
        const lastBlock = Block.genesis();
        const data = 'mined data';
        const minedBlock = Block.({lastBlock, data});

        it('returns a Block instance', () =>{
            expect(minedBlock.lastHash).toEqual(true);
        });
    });    
        
});