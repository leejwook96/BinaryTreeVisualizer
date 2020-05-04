class Node {
  constructor(value, id) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.id = id;
  }

  addLeft(node) {
    this.left = node;
    return this;
  }

  addRight(node) {
    this.right = node;
    return this;
  }
}

export default Node;
