import Node from "../objects/Node";

class BinaryTreeClass {
  constructor() {
    this.root = new Node("NULL", 0);
    this.numNode = 1;
    this.mapping = { 0: this.root };
  }

  // preOrder() {
  //   return this.root.preOrder();
  //   if (root.value !== "NULL") {
  //     console.log(root.value);
  //     this.preOrder(root.left);
  //     this.preOrder(root.right);
  //   }
  // }

  // postOrder(root) {
  //   if (root.value !== "NULL") {
  //     this.postOrder(root.left);
  //     this.postOrder(root.right);
  //     console.log(root.value);
  //   }
  // }

  // inOrder(root) {
  //   if (root.value !== "NULL") {
  //     this.inOrder(root.left);
  //     console.log(root.value);
  //     this.inOrder(root.right);
  //   }
  // }

  changeValue(clickedId, newValue) {
    let node = this.mapping[clickedId];
    if (node.value === "NULL") {
      node.left = new Node("NULL", this.numNode);
      this.mapping[this.numNode++] = node.left;
      node.right = new Node("NULL", this.numNode);
      this.mapping[this.numNode++] = node.right;
    }
    node.value = newValue;
  }

  convertToD3Tree() {
    let res = this.convertToD3TreeHelper(this.root);
    return [res];
  }

  convertToD3TreeHelper(root) {
    if (root.value === "NULL") {
      return { name: root.value, nodeId: root.id, children: [] };
    }

    this.mapping[root.nodeId] = root;
    if (root.left.value === "NULL" && root.right.value === "NULL") {
      return {
        name: root.value.toString(),
        children: [
          {
            name: root.left.value.toString(),
            nodeId: root.left.id,
            children: [],
          },
          {
            name: root.right.value.toString(),
            nodeId: root.right.id,
            children: [],
          },
        ],
      };
    }

    let left = this.convertToD3TreeHelper(root.left);
    let right = this.convertToD3TreeHelper(root.right);
    let children = [left, right];
    return { name: root.value.toString(), nodeId: root.id, children };
  }
}

export default BinaryTreeClass;
