class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  addLeft(node) {
    // Node is type BinaryTree
    this.left = node;
    return this;
  }

  addRight(node) {
    // Node is type BinaryTree
    this.right = node;
    return this;
  }
}

export default Node;
