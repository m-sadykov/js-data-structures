const MySet = require('../set');
const expect = require('chai').expect;

describe('Set:', () => {
    let set = new MySet();

    describe('has', () => {
        it('should return true if element exists in Set', () => {
            set.add(1);

            const isExists = set.has(1);
            expect(isExists).to.be.true;
        })


        it('should return false if element does not exist in Set', () => {
            set.clear();

            const isExists = set.has(1);
            expect(isExists).to.be.false;
        })
    })

    describe('values', () => {
        it('should return all elements of a Set', () => {
            set.add(1);
            set.add(2);

            expect(set.values()).not.empty;
        })
    })

    describe('size', () => {
        it('should return size of a Set', () => {
            expect(set.size()).to.be.greaterThan(0);
        })
    })

    describe('delete', () => {
        it('should return true if element was removed', () => {
            const result = set.delete(1);
            expect(result).to.be.true;
        })

        it('should return false if element to remove does not exist in Set', () => {
            const isExists = set.has(1);
            expect(isExists).to.be.false;
        })
    })

    describe('clear', () => {
        it('should remove all elements from Set', () => {
            set.clear();
            expect(set.size()).to.equal(0);
        })
    })

    describe('union', () => {
        it('should create union set', () => {
            const mockUnion = [1, 2, 3, 4, 5, 6];

            const set = new MySet([1, 2, 3]);
            const otherSet = new MySet([4, 5, 6]);
            const unionSet = set.union(otherSet);

            mockUnion.every(value =>
                expect(unionSet.has(value)).to.be.true
            );
        })
    })

    describe('intersection', () => {
        it('should create intersection set', () => {
            const mockIntersection = [2, 3, 4];

            const set = new MySet([1, 2, 3, 4]);
            const otherSet = new MySet([2, 3, 4, 6, 7, 8]);
            const intersectionSet = set.intersection(otherSet);

            mockIntersection.every(element =>
                expect(intersectionSet.has(element)).to.be.true
            );
        })
    })

    describe('difference', () => {
        it('should create a new set which contains elements that are not in subset', () => {
            const mockerDifference = [4, 5];

            const set = new MySet([2, 3, 4, 5]);
            const otherSet = new MySet([2, 3]);
            const differenceSet = set.difference(otherSet);

            mockerDifference.every(element =>
                expect(differenceSet.has(element)).to.be.true
            );
        })
    })

    describe('isSuperset', () => {
        it('should check if a set is a subset of another set', () => {
            const set = new MySet([1, 2, 3]);
            const otherSet = new MySet([1, 2, 3]);

            const isSuperSet = set.isSuperSet(otherSet);
            expect(isSuperSet).to.be.true;
        })
    })
})