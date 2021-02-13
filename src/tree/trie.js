/**
 * Node in Trie
 */
class TrieNode {
    keys = new Map();
    end = false;

    setEnd() {
        return this.end = true;
    }

    isEnd() {
        return this.end;
    }
}

class Trie {
    root = new TrieNode();

    /**
     * @description inserts a word into dictionary tree
     * @param {String} word
     */
    add(word, node = this.root) {
        if (word.length === 0) {
            node.setEnd();
            return;
        } else if (!node.keys.has(word[0])) {
            node.keys.set(word[0], new TrieNode());
            return this.add(word.substr(1), node.keys.get(word[0]));
        } else {
            return this.add(word.substr(1), node.keys.get(word[0]));
        }
    }

    /**
     * @description determines whether the tree consists of certain word
     * @param {String} word
     * @returns {Boolean} boolean
     */
    isWord(word) {
        let node = this.root;

        while (word.length > 1) {
            if (!node.keys.has(word[0])) {
                return false;
            }

            node = node.keys.get(word[0]);
            word = word.substr(1);
        }

        return node.keys.has(word) && node.keys.get(word).isEnd() ? true : false;
    }


    /**
     * @description prints all words in trie
     * @returns {Array<String>} words
     */
    print() {
        const words = [];

        /**
         * @param {TrieNode} node 
         * @param {String} str 
         */
        const search = function (node = this.root, str) {
            if (node.keys.size !== 0) {
                for (const letter of node.keys.keys()) {
                    search(node.keys.get(letter), str.concat(letter));
                }

                if (node.isEnd()) {
                    words.push(str);
                }
            } else {
                str.length > 0 ? words.push(str) : undefined;
                return;
            }
        }

        search(this.root, new String());
        return words.length > 0 ? words : null;
    }
}

module.exports = Trie;
