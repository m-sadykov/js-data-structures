/**
 * Tree Node
 */
class TreeNode {
    data;
    left;
    right;

    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

/**
 * Binary Search Tree
 */
class BST {
    root;

    constructor(root = null) {
        this.root = root;
    }

    /**
     * @description inserts node into tree
     * @param {*} data
     */
    add(data) {
        const currentNode = this.root;

        if (!currentNode) {
            this.root = new TreeNode(data);
            return;
        } else {
            const searchTree = function (node) {
                if (data < node.data) {
                    return !node.left ? node.left = new TreeNode(data) : searchTree(node.left);
                } else if (data > node.data) {
                    return !node.right ? node.right = new TreeNode(data) : searchTree(node.right);
                } else {
                    return;
                }
            };

            return searchTree(currentNode);
        }
    }

    /**
     * @description get minimum node data
     * @returns {*} data
     */
    findMin() {
        let currentNode = this.root;

        while (currentNode.left !== null) {
            currentNode = currentNode.left;
        }

        return currentNode.data;
    }

    /**
     * @description get maximum node data
     * @returns {*} data
     */
    findMax() {
        let currentNode = this.root;

        while (currentNode.right !== null) {
            currentNode = currentNode.right;
        }

        return currentNode.data;
    }

    /**
     * @description search a specific node
     * @param {*} data
     * @returns {TreeNode} node
     */
    find(data) {
        let currentNode = this.root;

        while (currentNode.data !== data) {
            data < currentNode.data ? currentNode = currentNode.left : currentNode = currentNode.right;
            if (!currentNode) return null;
        }

        return currentNode;
    }

    /**
     * @description determines existence of a certain node
     * @param {*} data
     * @returns {Boolean} boolean
     */
    isPresent(data) {
        let currentNode = this.root;

        while (currentNode) {
            if (currentNode.data === data) {
                return true;
            }

            data < currentNode.data ? currentNode = currentNode.left : currentNode = currentNode.right;
        }

        return false;
    }

    /**
     * @description removes node from tree
     * @param {*} data
     */
    remove(data) {
        const removeNode = function (node, data) {
            if (!node) return null;

            if (node.data === data) {
                if (!node.left && !node.right) return null;
                if (!node.left) return node.right;
                if (!node.right) return node.left;

                let tmpRoot = node.right;
                while (!tmpRoot.left) {
                    tmpRoot = tmpRoot.left;
                }

                node.data = tmpRoot.data;
                node.right = removeNode(node.right, tmpRoot.data);
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }

        this.root = removeNode(this.root, data);
    }
}

module.exports = BST;

// let tree = new BST();

// tree.add(4);
// tree.add(2);
// tree.add(6);
// tree.add(1);
// tree.add(3);
// tree.add(5);
// tree.add(7);

// console.log(tree)
// console.log(`min node: ${tree.findMin()}`);
// console.log(`max node: ${tree.findMax()}`);

// tree.remove(3);

// console.log(tree.isPresent(3))
