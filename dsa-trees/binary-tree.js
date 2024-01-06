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
	 * minDepth(): Given a binary tree, find its minimum depth.
	 * The minimum depth is the number of nodes along the shortest path from root node down to the nearest leaf node.
	 * @returns {number} - The minimum depth of the tree.
	 */
	minDepth() {
		// console.log("DIGGING!!");
		// console.log("This:", this);
		// Check if the tree is empty.
		if (!this.root) {
			// console.log("Returning 0");
			return 0;
		}

		let depth = 1;
		const queueArr = [this.root];

		while (queueArr.length) {
			const levelSize = queueArr.length;
			// console.log("LEVEL SIZE:", levelSize);
			for (let i = 0; i < levelSize; i++) {
				const currentNode = queueArr.shift();
				// console.log(
				// 	"CURRENT NODE VAL:",
				// 	currentNode.val,
				// 	"\nleft:",
				// 	currentNode.left,
				// 	"\nright:",
				// 	currentNode.right
				// );
				// Check if the current node has any branches
				if (!currentNode.left && !currentNode.right) {
					// console.log("... dead-end leaf node, RETURNING DEPTH:", depth);
					return depth;
				}

				// Add child nodes to the queueArr for further processing.
				if (currentNode.left) {
					queueArr.push(currentNode.left);
				}
				if (currentNode.right) {
					queueArr.push(currentNode.right);
				}
			}

			// Move to the next level.
			// console.log("Depth +1");
			depth++;
		}

		// If the loop completes without finding a leaf node, return the depth.
		// console.log("RETURNING DEPTH:", depth);
		return depth;
	}

	/**
	 * maxDepth(): Given a binary tree, find its maximum depth.
	 * The maximum depth is the number of nodes along the longest path from root node down to the nearest leaf node.
	 * @returns {number} - The maximum depth of the tree.
	 */
	maxDepth() {
		// Helper function to calculate the depth recursively
		const calculateDepth = (node) => {
			if (!node) {
				return 0; // If the node is null, depth is 0
			}

			// Recursively calculate the depth of the left and right subtrees
			const leftDepth = calculateDepth(node.left);
			const rightDepth = calculateDepth(node.right);

			// Return the maximum depth between the left and right subtrees, plus 1 for the current node
			return Math.max(leftDepth, rightDepth) + 1;
		};

		// Start the calculation from the root of the tree
		return calculateDepth(this.root);
	}

	/**
	 * maxSum(): Given a binary tree, find the maximum path sum.
	 * The path may start and end at any node in the tree, but no node can be visited more than once.
	 * @returns {number} - The maximum sum obtainable by traveling along a path in the tree.
	 */
	maxSum() {
		if (!this.root) {
			return 0; // If the tree is empty, return 0
		}
		// Helper function to calculate the maximum path sum recursively
		const calculateMaxSum = (node) => {
			if (!node) {
				return 0; // If the node is null, return 0
			}

			// Recursively calculate the maximum path sum for the left and right subtrees
			const leftMaxSum = calculateMaxSum(node.left);
			const rightMaxSum = calculateMaxSum(node.right);

			// Calculate the maximum sum that includes the current node
			const maxSumWithNode = Math.max(
				node.val,
				node.val + leftMaxSum,
				node.val + rightMaxSum
			);

			// Update the global maximum by considering the maximum sum across all nodes
			maxSum = Math.max(
				maxSum,
				maxSumWithNode,
				node.val + leftMaxSum + rightMaxSum
			);

			// Return the maximum sum including the current node for further recursion
			return maxSumWithNode;
		};

		// Initialize a variable to store the global maximum sum
		let maxSum = Number.MIN_SAFE_INTEGER;

		// Start the calculation from the root of the tree
		calculateMaxSum(this.root);

		// Return the calculated maximum sum
		return maxSum;
	}

	/** PAM: USED CODE FROM SOLUTION
	 * nextLarger(x): Given a binary tree and a integer x.
	 * Find and return the value of the node with next larger element in the tree i.e. find a node with value just greater than x.
	 * Return null if no node is present with value greater than x.
	 * @param {number} x - The lower bound for value comparison.
	 * @returns {object|null} - The next larger element in the tree, or null if none exists.
	 */
	nextLarger(lowerBound) {
		if (!this.root) return null;

		// let's use BFS for this!
		let queue = [this.root];
		let closest = null;

		while (queue.length) {
			let currentNode = queue.shift();
			let currentVal = currentNode.val;
			let higherThanLowerBound = currentVal > lowerBound;
			let shouldReassignClosest = currentVal < closest || closest === null;

			if (higherThanLowerBound && shouldReassignClosest) {
				closest = currentVal;
			}

			if (currentNode.left) queue.push(currentNode.left);
			if (currentNode.right) queue.push(currentNode.right);
		}

		return closest;
	}
}

module.exports = { BinaryTree, BinaryTreeNode };
