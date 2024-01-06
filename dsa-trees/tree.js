/** TreeNode: node for a general tree. */
class TreeNode {
	/**
	 * TreeNode constructor.
	 * @param {any} val - The value to be stored in the node.
	 * @param {TreeNode[]} children - An array of child nodes.
	 */
	constructor(val, children = []) {
		this.val = val;
		this.children = children;
	}
	// DEMO CODE START -----------------------------------------------------
	/** find: return node obj w/this val */
	findDFS(val) {
		const toVisitStack = [this];
		while (toVisitStack.length) {
			const current = toVisitStack.pop();
			console.log("VISITING:", current.val);
			if (current.val === val) {
				return current;
			}
			for (let child of current.children) {
				toVisitStack.push(child);
			}
		}
	}
	/** find: return node obj w/this val */
	findBFS(val) {
		const toVisitQueue = [this];
		while (toVisitQueue.length) {
			const current = toVisitQueue.shift();
			console.log("VISITING:", current.val);
			if (current.val === val) {
				return current;
			}
			for (let child of current.children) {
				toVisitQueue.push(child);
			}
		}
	}
	// DEMO CODE END ------------------------------------------------------
}

/** Tree: a general tree class. */
class Tree {
	/**
	 * Tree constructor.
	 * @param {TreeNode} root - The root node of the tree.
	 */
	constructor(root = null) {
		this.root = root;
	}

	/**
	 * sumValues(): Add up all of the values in the tree.
	 * @param i - index from which to start
	 * @returns {number} - The sum of all values in the tree.
	 */
	sumValues() {
		// console.log("SUMMING!!");
		// console.log("This:", this);
		// Check if the tree is empty.
		if (!this.root) {
			// console.log("Returning 0");
			return 0;
		}

		let totalSum = 0;
		let sumStack = [this.root];

		while (sumStack.length) {
			const currentNode = sumStack.pop();
			// console.log(
			// 	"CURRENT NODE VAL:",
			// 	currentNode.val,
			// 	"Children:",
			// 	currentNode.children
			// );
			totalSum += currentNode.val;

			// Add children to the stack for further processing.
			sumStack.push(...currentNode.children);
		}
		// console.log("RETURNING SUM:", totalSum);
		return totalSum;
	}

	/**
	 * countEvens(): Given a n-ary tree of integers, return the count of all the even integers.
	 * @returns {number} - The count of nodes with even values.
	 */
	countEvens() {
		// console.log("COUNTING!!!");
		// console.log("This:", this);
		// Check if the tree is empty.
		if (!this.root) {
			// console.log("Returning 0");
			return 0;
		}

		let evenCount = 0;
		let countStack = [this.root];

		while (countStack.length) {
			const currentNode = countStack.pop();
			// console.log(
			// 	"CURRENT NODE VAL:",
			// 	currentNode.val,
			// 	"Children:",
			// 	currentNode.children
			// );
			if (currentNode.val % 2 === 0) {
				// console.log("+1");
				evenCount += 1;
			}

			// Add children to the stack for further processing.
			countStack.push(...currentNode.children);
		}
		// console.log("RETURNING COUNT:", evenCount);
		return evenCount;
	}

	/**
	 * numGreater(x): Given a n-ary tree and a number x, find and return the number of nodes which are greater than x.
	 *
	 * @param {number} x - The value for comparison.
	 * @returns {number} - The count of nodes with values greater than x.
	 */
	numGreater(x) {
		console.log("COUNTING NUMBERS GREATER THAN:", x);
		console.log("This:", this);
		// Check if the tree is empty.
		if (!this.root) {
			console.log("Returning 0");
			return 0;
		}

		let count = 0;
		let countStack = [this.root];

		while (countStack.length) {
			const currentNode = countStack.pop();
			console.log(
				"CURRENT NODE VAL:",
				currentNode.val,
				"Children:",
				currentNode.children
			);
			if (currentNode.val > x) {
				console.log("+1");
				count += 1;
			}

			// Add children to the stack for further processing.
			countStack.push(...currentNode.children);
		}
		console.log("RETURNING COUNT:", count);
		return count;
	}
}

module.exports = { Tree, TreeNode };
