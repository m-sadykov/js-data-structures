
function hash(string, max) {
    let hash = 0;

    for (let i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);
    }

    return hash % max;
}

export class HashTable {
    #storage = [];
    #STORAGE_LIMIT = 4;

    /**
     * @description adds a key-value pair
     * @param {String} key
     * @param {*} value
     */
    add(key, value) {
        const index = hash(key, this.#STORAGE_LIMIT);

        if (!this.#storage[index]) {
            this.#storage[index] = [[key, value]];
        } else {
            let inserted = false;

            for (let i = 0; i < this.#storage[index].length; i++) {
                if (this.#storage[index][i][0] === key) {
                    this.#storage[index][i][1] = value;
                    inserted = true;
                }
            }

            if (!inserted) {
                this.#storage[index].push([key, value]);
            }
        }
    }

    /**
     * @description deletes a key-value pair
     * @param {String} key
     */
    remove(key) {
        const index = hash(key, this.#STORAGE_LIMIT);
        
        if (this.#storage[index].length === 1
            && this.#storage[index][0][0] === key) {
            delete this.#storage[index];
        } else {
            for (let i = 0; i < this.#storage[index].length; i++) {
                if (this.#storage[index][i][0] === key) {
                    delete this.#storage[index][i];
                }
            }
        }
    }

    /**
     * @description finds a corresponding value using a key
     * @param {String} key
     * @returns {*} value
     */
    lookup(key) {
        const index = hash(key, this.#STORAGE_LIMIT);

        if (!this.#storage[index]) {
            return;
        } else {
            for (let i = 0; i < this.#storage[index].length; i++) {
                if (this.#storage[index][i][0] === key) {
                    return this.#storage[index][i][1];
                }
            }
        }
    }
}

// let hashT = new HashTable();

// hashT.add("1", "one");
// hashT.add("2", "two");
// hashT.add("3", "three");
// hashT.add("4", "four");

// hashT.remove("3")

// console.log(hashT.lookup("4"))