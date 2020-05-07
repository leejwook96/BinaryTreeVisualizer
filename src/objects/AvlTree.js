import BinarySearchTreeClass from "./BinarySearchTree";

class AvlTreeClass extends BinarySearchTreeClass {
  isBalanced() {
    console.log(this.getUnbalancedNode());
    return this.getUnbalancedNode().length === 0;
  }

  getUnbalancedNode() {
    let unbalancedNode = [];
    this.findUnbalancedNode(this.root, unbalancedNode, null);

    return unbalancedNode;
  }

  balance() {
    let unbalancedNode = this.getUnbalancedNode();
    while (unbalancedNode.length === 2) {
      this.rotate(unbalancedNode);

      unbalancedNode = this.getUnbalancedNode();
    }
  }

  findUnbalancedNode(node, unbalancedNode, parent) {
    if (node.left) this.findUnbalancedNode(node.left, unbalancedNode, node);
    if (node.right) this.findUnbalancedNode(node.right, unbalancedNode, node);

    let heightDiff = node.getHeightDiff();
    if (Math.abs(heightDiff) === 2 && unbalancedNode.length === 0) {
      unbalancedNode.push(node, parent);
      return;
    }
  }

  rotate(unbalancedNode) {
    let node = unbalancedNode[0];
    let parent = unbalancedNode[1];
    let difference = node.getHeightDiff();
    if (difference < 0) {
      // right heavy RR RL rotation
      let rightHeightDiff = node.right.getHeightDiff();
      if (rightHeightDiff < 0) {
        if (parent) {
          if (parent.left && parent.left.value === node.value) {
            parent.left = parent.left.RRRotation();
          } else {
            parent.right = parent.right.RRRotation();
          }
        } else {
          this.root = node.RRRotation();
        }
      } else {
        if (parent) {
          if (parent.left && parent.left.value === node.value) {
            parent.left = parent.left.RLRotation();
          } else {
            parent.right = parent.right.RLRotation();
          }
        } else {
          this.root = node.RLRotation();
        }
      }
    } else {
      // left heavy LL LR rotaion
      let leftHeightDiff = node.left.getHeightDiff();
      if (leftHeightDiff > 0) {
        if (parent) {
          if (parent.left && parent.left.value === node.value) {
            parent.left = parent.left.LLRotation();
          } else {
            parent.right = parent.right.LLRotation();
          }
        } else {
          this.root = node.LLRotation();
        }
      } else {
        if (parent) {
          if (parent.left && parent.left.value === node.value) {
            parent.left = parent.left.LRRotation();
          } else {
            parent.right = parent.right.LRRotation();
          }
        } else {
          this.root = node.LRRotation();
        }
      }
    }
    this.root.getAllHeight();
  }

  insertValue(value) {
    super.insertValue(value);
  }
}

export default AvlTreeClass;
