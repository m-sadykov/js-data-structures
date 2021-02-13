const Trie = require('../trie');
const expect = require('chai').expect;

describe('Trie:', () => {
    const tr = new Trie();

    tr.add('test');
    tr.add('one');
    tr.add('two');
    tr.add('three');

    describe('add', () => {
        it('should insert word into tree', () => {
            tr.add('four');
            expect(tr.isWord('four')).to.be.true;
        })
    })

    describe('isWord', () => {
        it('should return true if tree consists of a specific word', () => {
            expect(tr.isWord('three')).to.be.true;
        })

        it('should return false if word is not found in tree', () => {
            expect(tr.isWord('nest')).to.be.false;
        })
    })

    describe('print', () => {
        it('should return all words in tree', () => {
            const words = ['test', 'one', 'two', 'three', 'four'];
            const printedWords = tr.print();
            
            words.every(w => 
                expect(printedWords.includes(w)).to.be.true
            );
        })
    })
})