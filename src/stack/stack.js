/** 
 * Stack follows the principle of LIFO (Last In First Out)
*/

class Stack {
    #count = 0;
    #storage = {};

    /**
     * @description input a new element in Stack
     * @param {*} value 
     */
    push(value) {
        this.#storage[this.#count] = value;
        this.#count++;
    }


    /**
     * @description remove the top element
     * @returns {element} removed element of a Stack
     */
    pop() {
        if (this.#count === 0) {
            return undefined;
        }

        this.#count--;
        const result = this.#storage[this.#count];
        delete this.#storage[this.#count];

        return result;
    }

    /**
     * @description returns the top element
     * @returns {element} top element of a Stack
     */
    peek() {
        return this.#storage[this.#count - 1];
    }

    /**
     * @description returns the number of element(s) in Stack
     * @returns {Number} number of element(s) in Stack
     */
    size() {
        return this.#count;
    }
}

module.exports = Stack;
