class Node {
  constructor(value, id) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.id = id;
    this.height = 0;
  }

  addLeft(node) {
    this.left = node;
    return this;
  }

  addRight(node) {
    this.right = node;
    return this;
  }

  LLRotation() {
    let root = this.left;
    this.left = root.right;
    root.right = this;
    return root;
  }

  LRRotation() {
    let root = this.left.right;
    let originalLeft = this.left;

    this.left.right = root.left;
    this.left = root.right;

    root.left = originalLeft;
    root.right = this;
    return root;
  }

  RRRotation() {
    let root = this.right;
    this.right = root.left;
    root.left = this;
    return root;
  }

  RLRotation() {
    let root = this.right.left;
    let originalRight = this.right;

    this.right.left = root.right;
    this.right = root.left;

    root.right = originalRight;
    root.left = this;
    return root;
  }

  calcHeight() {
    if (this === null) return;
    if (this.left === null && this.right === null) {
      this.height = 0;
    } else {
      if (this.left === null) {
        this.height = 1 + this.right.height;
      } else if (this.right === null) {
        this.height = 1 + this.left.height;
      } else {
        this.height = 1 + Math.max(this.left.height, this.right.height);
      }
    }
  }

  getHeightDiff() {
    let leftHeight = this.left ? this.left.height + 1 : 0;
    let rightHeight = this.right ? this.right.height + 1 : 0;

    return leftHeight - rightHeight;
  }

  getAllHeight() {
    if (this.left) this.left.getAllHeight();
    if (this.right) this.right.getAllHeight();
    this.calcHeight();
  }

  printAllHeight() {
    console.log(this.value, this.height, this.getHeightDiff());
    if (this.left) this.left.printAllHeight();
    if (this.right) this.right.printAllHeight();
  }
}

export default Node;
