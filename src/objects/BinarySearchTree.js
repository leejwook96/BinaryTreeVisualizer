import BinaryTreeClass from "./BinaryTree";
import Node from "./Node";

class BinarySearchTreeClass extends BinaryTreeClass {
  insertValue(value) {
    let node = new Node(value);

    let curr = this.root;
    if (curr === null) {
      this.root = node;
    } else {
      let parent = null;
      while (curr != null) {
        parent = curr;

        if (curr.value <= value) {
          curr = curr.right;
        } else {
          curr = curr.left;
        }
      }
      if (parent.value <= value) {
        parent.right = node;
      } else {
        parent.left = node;
      }
    }
    this.numNode++;
    // return this;
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

export default BinarySearchTreeClass;
