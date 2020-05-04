class BinaryTreeBaseClass {
  constructor() {
    this.root = null;
  }

  preOrder() {
    return [];
  }

  postOrder(root) {
    return [];
  }

  inOrder(root) {
    return [];
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
