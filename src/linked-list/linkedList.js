/**
 * Node of a linked list
 */

class ListNode {
    constructor(element, next = null) {
        this.element = element;
        this.next = next;
    }
}

/**
 * Linked list non-primitive/chained data structure which consists of nodes.
 * Nodes consist of: data of the node and next which is the pointer to the next node.
 * Requires to read through all nodes in list to get specific element.
 */
class LinkedList {
    #length = 0;
    #head = null;

    /**
     * @description returns the number of node(s)
     * @returns {Number} number of node(s)
     */
    size() {
        return this.#length;
    }

    /**
     * @description returns the element of the head
     * @returns element of the head
     */
    head() {
        return this.#head;
    }

    /**
     * @description adds Node in the tail
     * @param {*} element
     */
    add(element) {
        const node = new ListNode(element);

        if (!this.#head) {
            this.#head = node;
        } else {
            let currentNode = this.#head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }

        this.#length++;
    }

    /**
     * @description removes certain node
     * @param {*} element
     */
    remove(element) {
        let currentNode = this.#head;
        let previousNode;

        if (currentNode.element === element) {
            this.#head = currentNode.next;
        } else {
            while (currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = currentNode.next;
        }

        this.#length--;
    }

    /**
     * @description returns the index of a Node
     * @param {*} element
     * @returns {Number} index
     */
    indexOf(element) {
        let currentNode = this.#head;
        let index = -1;

        while (currentNode) {
            index++;

            if (currentNode.element === element) {
                return index;
            }

            currentNode = currentNode.next;
        }

        return -1;
    }

    /**
     * @description returns the Node of an index
     * @param {Number} index
     * @returns element
     */
    elementAt(index) {
        let currentNode = this.#head;
        let count = 0;

        while (count < index) {
            count++;
            currentNode = currentNode.next;
        }

        return currentNode.element;
    }

    /**
     * @description inserts a node at a specific index
     * @param {Number} index
     * @param {*} element
     */
    addAt(index, element) {
        let node = new ListNode(element);
        let currentNode = this.#head;
        let previousNode;
        let currentIndex = 0;

        if (index > this.#length) {
            return false;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            node.next = currentNode;
            previousNode.next = node;
        }

        this.#length++;
    }

    /**
     * @description deletes Node at a specific index
     * @param {Number} index
     * @returns removed element
     */
    removeAt(index) {
        let currentNode = this.#head;
        let previousNode;
        let currentIndex = 0;

        if (index < 0 || index >= this.#head) {
            return null;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = currentNode.next;
        }

        this.#length--;
        return currentNode.element;
    }

    isEmpty() {
        return this.#length === 0;
    }
}

const list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);
list.add(4);

list.addAt(1, 5)

console.log(list.head())
console.log(`indexOf 5: `, list.indexOf(5))
console.log(list.size())