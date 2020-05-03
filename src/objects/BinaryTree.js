class BinaryTreeClass {
  constructor() {
    this.root = null;
    this.numNode = 0;
  }

  // Methods TODO
  preOrder() {}

  postOrder() {}

  inOrder() {}

  convertToD3Tree() {
    let res = this.convertToD3TreeHelper(this.root);
    return [res];
  }

  convertToD3TreeHelper(root) {
    if (root === null) return { name: "null", children: [] };
    if (root.left === null && root.right === null) {
      return {
        name: root.value.toString(),
        children: [
          { name: "null", children: [] },
          { name: "null", children: [] },
        ],
      };
    }

    let left = this.convertToD3TreeHelper(root.left);
    let right = this.convertToD3TreeHelper(root.right);
    let children = [left, right];
    return { name: root.value.toString(), children };
  }
}

export default BinaryTreeClass;
