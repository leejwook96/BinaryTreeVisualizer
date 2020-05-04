import Node from "../objects/Node";
import BinaryTreeBaseClass from "./BinaryTreeBase";

class BinaryTreeClass extends BinaryTreeBaseClass {
  constructor() {
    super();
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
    console.log(clickedId, node);
    if (newValue.toUpperCase() === "NULL") {
      // console.log(this.mapping[node.left.id], this.mapping[node.right.id]);
      console.log(this.mapping);
      if (node.left != null) {
        delete this.mapping[node.left.id];
        node.left = null;
      }
      if (node.right != null) {
        delete this.mapping[node.right.id];
        node.right = null;
      }
      console.log(this.mapping);

      this.mapping[node.id].value = "NULL";
      node.value = "NULL";
    } else if (node.value === "NULL") {
      newValue = parseFloat(newValue);
      node.left = new Node("NULL", this.numNode);
      this.mapping[this.numNode++] = node.left;
      node.right = new Node("NULL", this.numNode);
      this.mapping[this.numNode++] = node.right;
      node.value = newValue;
    } else {
      node.value = newValue;
    }
  }

  // changeValue(clickedId, newValue) {
  //   let node = this.mapping[clickedId];
  //   if (node.value === "NULL") {
  //     node.left = new Node("NULL", this.numNode);
  //     this.mapping[this.numNode++] = node.left;
  //     node.right = new Node("NULL", this.numNode);
  //     this.mapping[this.numNode++] = node.right;
  //   }
  //   node.value = newValue;
  // }

  convertToD3TreeHelper(root) {
    if (root.value === "NULL") {
      console.log(root.id);
      return { name: root.value, nodeId: root.id, children: [] };
    }

    this.mapping[root.nodeId] = root;
    console.log(this.mapping);
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
