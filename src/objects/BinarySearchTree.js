import BinaryTreeClass from "./BinaryTree";
import Node from "./Node";

class BinarySearchTreeClass extends BinaryTreeClass {
  insertValue(value) {
    let node = new Node(value);

    let curr = this.root;

    let allParents = [];

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
        allParents.push(parent);
      }

      if (parent.left === null && parent.right === null) {
        allParents.map((parent) => {
          parent.height++;
        });
      }
      if (parent.value <= value) {
        parent.right = node;
      } else {
        parent.left = node;
      }
    }
    this.numNode++;
  }
}

export default BinarySearchTreeClass;
