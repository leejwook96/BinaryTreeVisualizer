class BinaryTreeBaseClass {
  constructor() {
    this.root = null;
  }

  preOrderHelper(node, order) {
    if (node === null || node.value === "NULL") {
      return;
    }

    order.push(node.value);
    this.preOrderHelper(node.left, order);
    this.preOrderHelper(node.right, order);
  }

  postOrderHelper(node, order) {
    if (node === null || node.value === "NULL") {
      return;
    }

    this.preOrderHelper(node.left, order);
    this.preOrderHelper(node.right, order);
    order.push(node.value);
  }

  inOrderHelper(node, order) {
    if (node === null || node.value === "NULL") {
      return;
    }

    this.preOrderHelper(node.left, order);
    order.push(node.value);
    this.preOrderHelper(node.right, order);
  }

  preOrder() {
    let order = [];
    if (this.root === null || this.root.value === "NULL") {
      return order;
    }

    this.preOrderHelper(this.root, order);
    return order;
  }

  postOrder() {
    let order = [];
    if (this.root === null || this.root.value === "NULL") {
      return order;
    }

    this.postOrderHelper(this.root, order);
    return order;
  }

  inOrder() {
    let order = [];
    if (this === null || this.value === "NULL") {
      return order;
    }
    if (this.value === "NULL") {
      return order;
    }
    this.inOrderHelper(this.root, order);
    return order;
  }

  convertToD3Tree() {
    let res = this.convertToD3TreeHelper(this.root);
    return [res];
  }

  convertToD3TreeHelper(root) {
    return {};
  }
}

export default BinaryTreeBaseClass;
