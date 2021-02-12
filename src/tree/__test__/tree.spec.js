const BST = require('../tree');
const expect = require('chai').expect;

describe('Binary Search Tree:', () => {
    let tree = new BST();

    tree.add(4);
    tree.add(2);
    tree.add(6);
    tree.add(1);
    tree.add(3);
    tree.add(5);
    tree.add(7);

    describe('add', () => {
        it('should insert node into tree', () => {
            tree.add(1);
            expect(tree.isPresent(1)).to.be.true;
        })
    })

    describe('findMin', () => {
        it('should return minimum node data', () => {
            const min = tree.findMin();
            expect(min).to.equal(1);
        })
    })

    describe('findMax', () => {
        it('should return maximum node data', () => {
            const max = tree.findMax();
            expect(max).to.equal(7);
        })
    })

    describe('find', () => {
        it('should find a specific node', () => {
            const data = 3;
            const foundNode = tree.find(data);

            expect(foundNode.data).to.equal(data);
        })

        it('should return null if node not found', () => {
            const data = 15;
            const result = tree.find(data);

            expect(result).to.be.null;
        })
    })

    describe('isPresent', () => {
        it('should return true if node is exists in tree', () => {
            const data = 2;
            const isPresent = tree.isPresent(data);

            expect(isPresent).to.be.true;
        })

        it('should return false if node is not exist in tree', () => {
            const data = 22;
            const isPresent = tree.isPresent(data);

            expect(isPresent).to.be.false;
        })
    })

    describe('remove', () => {
        it('should remove node from tree', () => {
            tree.remove(3);
            expect(tree.isPresent(3)).to.be.false;
        })
    })
})