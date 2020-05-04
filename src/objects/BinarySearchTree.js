import Node from "./Node";
import BinaryTreeBaseClass from "./BinaryTreeBase";

class BinarySearchTreeClass extends BinaryTreeBaseClass {
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
          return null;
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
