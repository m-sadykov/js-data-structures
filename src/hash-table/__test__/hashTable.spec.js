const HashTable = require('../hashTable');
const expect = require('chai').expect;

describe('Hash Table:', () => {
    let hashTable = new HashTable();

    describe('add', () => {
        it('should add key-value pair', () => {
            const mockVal = 'foo';
            hashTable.add('a', mockVal);
            
            const val = hashTable.lookup('a');
            expect(val).to.equal(mockVal);
        })
    })

    describe('remove', () => {
        it('should remove key-value pair', () => {
            hashTable.remove('a');

            const val = hashTable.lookup('a');
            expect(val).to.be.undefined;
        })
    })

    describe('lookup', () => {
        it('should find value by key', () => {
            hashTable.add('a', 'foo');
            hashTable.add('b', 'bar');
            hashTable.add('c', 'baz');

            const val = hashTable.lookup('b');
            expect(val).to.equal('bar');
        })
    })
})