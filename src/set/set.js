/**
 * The Set object lets you store unique values of any type, whether primitive values or object references.
 */

class MySet {
    #collection;

    constructor(collection = []) {
        this.#collection = collection;
    }

    /**
     * @description determines whether an element exists
     * @param {*} element
     * @returns {Boolean} boolean
     */
    has(element) {
        return (this.#collection.indexOf(element) !== -1);
    }

    /**
     * @description returns all elements in a Set
     * @returns {Array} elements
     */
    values() {
        return this.#collection;
    }

    /**
     * @description returns number of elements
     * @returns {Number} number of elements
     */
    size() {
        return this.#collection.length;
    }

    /**
     * @description inserts element into Set
     * @param {*} element
     */
    add(element) {
        if (!this.has(element))
            this.#collection.push(element)
    }

    /**
     * @description removes specific element from Set and returns boolean if element was successfully removed
     * @param {*} element
     * @returns {Boolean} boolean
     */
    delete(element) {
        if (this.has(element)) {
            const index = this.#collection.indexOf(element);
            this.#collection.splice(index, 1);
            return true;
        }
        return false;
    }

    /**
     * @description removes all elements from Set
     */
    clear() {
        this.#collection = [];
    }

    /**
     * @description creates a Set that contains elements both Set a and Set b
     * @param {MySet} otherSet 
     * @returns {MySet} unionSet
     */
    union(otherSet) {
        const unionSet = new MySet();
        const currentSetValues = this.values();
        const secondSetValues = otherSet.values();

        currentSetValues.forEach(v => unionSet.add(v))
        secondSetValues.forEach(v => unionSet.add(v))

        return unionSet;
    }

    /**
     * @description creates a new Set which has common elements of both Sets
     * @param {MySet} otherSet
     * @returns {MySet} new Set
     */
    intersection(otherSet) {
        const intersectionSet = new MySet();
        const currentSetValues = this.values();

        currentSetValues.forEach(v => {
            if (otherSet.has(v)) {
                intersectionSet.add(v);
            }
        })

        return intersectionSet;
    }

    /**
     * @description creates a new Set that contains elements of Set a that are not in Set b
     * @param {MySet} otherSet
     * @returns {MySet} new Set
     */
    difference(otherSet) {
        const currentSetValues = this.values();
        return new MySet(currentSetValues.filter(v => !otherSet.has(v)));
    }

    /**
     * @description determines whether a certain set is a subset of another set
     * @param {MySet} otherSet
     * @returns {Boolean} boolean 
     */
    isSuperSet(otherSet) {
        const currentSetValues = this.values();
        return currentSetValues.every(v => otherSet.has(v));
    }
}

module.exports = MySet;
