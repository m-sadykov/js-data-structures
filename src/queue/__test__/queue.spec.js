const Queue = require('../queue');
const expect = require('chai').expect;

describe('Queue:', () => {
    let queue = new Queue();

    describe('enqueue', () => {
        it('should add element to queue', () => {
            queue.enqueue(1);
            expect(queue.size()).to.be.greaterThan(0);
        })
    })

    describe('dequeue', () => {
        it('should remove front element of the queue', () => {
            queue.dequeue();
            expect(queue.size()).to.equal(0);
        })

        it('should return "Underflow" if queue is empty', () => {
            const message = queue.dequeue();
            expect(message).to.equal('Underflow');
        })
    })

    describe('front', () => {
        it('should return front element of the queue', () => {
            const frontEl = 1;

            queue.enqueue(1);
            expect(queue.front()).to.be.equal(frontEl);
        })

        it('should return "No elements in Queue" if queue is empty', () => {
            const message = "No elements in Queue";

            queue.dequeue();
            expect(queue.front()).to.equal(message);
        })
    })

    describe('isEmpty', () => {
        it('should return true if queue is empty', () => {
            expect(queue.size()).to.equal(0);
        })
    })

    describe('size', () => {
        it('should return number of elements in queue', () => {
            queue.enqueue(1);
            queue.enqueue(2);
            queue.enqueue(3);

            expect(queue.size()).to.be.equal(3);
        })
    })
})