const LinkedList = require('../linkedList');
const expect = require('chai').expect;

describe('LinkedList:', () => {
    let list = new LinkedList();

    describe('add', () => {
        it('should add node in the tail of list', () => {
            list.add('first');
            expect(list.isEmpty()).to.be.false;
        })
    })

    describe('head', () => {
        it('should return head element', () => {
            const head = list.head();
            expect(head.element).to.equal('first');
        })
    })

    describe('size', () => {
        it('should return number of nodes', () => {
            list.add('second');
            list.add('third');
            expect(list.size()).to.equal(3);
        })
    })

    describe('remove', () => {
        it('should remove specific node', () => {
            const removedEl = list.remove('second');

            expect(removedEl).to.equal('second');
            expect(list.size()).to.be.equal(2);
        })
    })

    describe('indexOf', () => {
        it('should return index of a node', () => {
            const mockIdx = 1;
            const idx = list.indexOf('third');

            expect(idx).to.be.equal(mockIdx);
        })
    })

    describe('elementAt', () => {
        it('should return element at a certain index', () => {
            list.add('fourth');
            list.add('fifth');

            const elemAt = list.elementAt(3);
            expect(elemAt).to.equal('fifth');
        })
    })

    describe('addAt', () => {
        it('should insert node at a specific index', () => {
            list.addAt(2, 'hey');
            const newEl = list.elementAt(2);
            const shiftedEl = list.elementAt(3);

            expect(newEl).to.be.equal('hey');
            expect(shiftedEl).to.be.equal('fourth');
        })
    })

    describe('removeAt', () => {
        it('should remove node at specific index', () => {
            const removedEl = list.removeAt(3);

            expect(removedEl).to.equal('fourth');
            expect(list.size()).to.be.equal(4);
        })
    })
})