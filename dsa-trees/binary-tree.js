/** BinaryTreeNode: node for a binary tree. */
class BinaryTreeNode {
	/**
	 * BinaryTreeNode constructor.
	 * @param {any} val - The value to be stored in the node.
	 * @param {BinaryTreeNode} left - The left child node.
	 * @param {BinaryTreeNode} right - The right child node.
	 */
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

/** BinaryTree: a binary tree class. */
class BinaryTree {
	/**
	 * BinaryTree constructor.
	 * @param {BinaryTreeNode} root - The root node of the binary tree.
	 */
	constructor(root = null) {
		this.root = root;
	}

	/**
	 * minDepth(): Return the minimum depth of the tree, i.e., the length of the shortest path from the root to a leaf.
	 * @returns {number} - The minimum depth of the tree.
	 */
	minDepth() {
		// Implementation goes here
	}

	/**
	 * maxDepth(): Return the maximum depth of the tree, i.e., the length of the longest path from the root to a leaf.
	 * @returns {number} - The maximum depth of the tree.
	 */
	maxDepth() {
		// Implementation goes here
	}

	/**
	 * maxSum(): Return the maximum sum you can obtain by traveling along a path in the tree.
	 * The path doesn't need to start at the root, but you can't visit a node more than once.
	 * @returns {number} - The maximum sum obtainable by traveling along a path in the tree.
	 */
	maxSum() {
		// Implementation goes here
	}

	/**
	 * nextLarger(lowerBound): Return the smallest value in the tree which is larger than lowerBound.
	 * Return null if no such value exists.
	 * @param {number} lowerBound - The lower bound for value comparison.
	 * @returns {any|null} - The next larger element in the tree, or null if none exists.
	 */
	nextLarger(lowerBound) {
		// Implementation goes here
	}

	// Further study methods go here...
}

module.exports = { BinaryTree, BinaryTreeNode };
