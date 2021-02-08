const Stack = require('../stack');
const expect = require('chai').expect;

describe('Stack', () => {
    let stack = new Stack();
    
    describe('push', () => {
        it('should add element in stack', () => {
            stack.push('first');
            expect(stack.size()).to.be.greaterThan(0);
        })
    });

    describe('pop', () => {
        it('should remove first element from stack', () => {
            stack.pop();
            expect(stack.size()).to.equal(0);
        })
    })

    describe('peek', () => {
        it('should return top element of stack', () => {
            stack.push('first');
            stack.push('second');
            stack.push('third');

            const topEl = stack.peek();
            expect(topEl).to.equal('third');
        })
    })

    describe('size', () => {
        it('should return size of stack', () => {
            expect(stack.size()).to.equal(3);
        })
    })
});