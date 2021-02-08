/**
 * Queue uses the FIFO principle (First In First Out)
 * A queue can be created using both an array or through a linked list
 * Here an array is used for simplicity
 */

class Queue {
    #collection;

    constructor(collection = []) {
        this.#collection = collection;
    }

    /**
     * @description adds an element at the end of the Queue
     * @param {*} element
     */
    enqueue(value) {
        this.#collection.push(value);
    }

    /**
     * @description removes and returns the front element of the Queue
     * @returns {element} returns front element of the Queue
     */
    dequeue() {
        if (this.isEmpty())
            return "Underflow";
        return this.#collection.shift();
    }

    /**
     * @description returns front element of the Queue
     * @returns {element} front element of the Queue
     */
    front() {
        if (this.isEmpty())
            return "No elements in Queue";
        return this.#collection[0];
    }

    /**
     * @description determines whether the Queue is empty
     * @returns {Boolean} boolean
     */
    isEmpty() {
        return this.#collection.length === 0;
    }

    /**
     * @description gets the number of element(s) in Queue
     * @returns number of element(s) in Queue
     */
    size() {
        return this.#collection.length;
    }
}

// const queue = new Queue();

// const frontEl = queue.front();
// console.log(frontEl)

// queue.enqueue("one");
// queue.enqueue("two");
// queue.enqueue("three");

// const removedFrontEl = queue.dequeue();

// console.log(removedFrontEl);
// console.log(queue.front())

// console.log(queue.size());
