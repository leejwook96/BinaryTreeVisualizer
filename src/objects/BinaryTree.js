import Node from "../objects/Node";
import BinaryTreeBaseClass from "./BinaryTreeBase";

class BinaryTreeClass extends BinaryTreeBaseClass {
  constructor() {
    super();
    this.root = new Node("NULL", 0);
    this.numNode = 1;
    this.mapping = { 0: this.root };
  }

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

  deleteNode(id) {
    let node = this.mapping[id];
    if (node.value === "NULL") {
      return;
    }

    if (node.left != null) {
      delete this.mapping[node.left.id];
      node.left = null;
    }
    if (node.right != null) {
      delete this.mapping[node.right.id];
      node.right = null;
    }

    node.value = "NULL";
  }

  convertToD3TreeHelper(root) {
    if (root.value === "NULL") {
      return { name: root.value, nodeId: root.id, children: [] };
    }

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
