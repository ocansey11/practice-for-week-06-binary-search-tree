// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor(root = null) {
    // Your code here
    this.root = root
  }

  insert(val, currentNode = this.root) {
    // Your code here
    let newNode = new TreeNode(val)

    if(this.root == null){
      this.root = newNode
      return
    }

    while(currentNode.val !== null){
      if(val <= currentNode.val){
        if(currentNode.left == null){
          currentNode.left = newNode
          return
        }else{
          currentNode = currentNode.left
        }
      }
      else if(val > currentNode.val){
        if (currentNode.right == null){
          currentNode.right = newNode
          return
        }else{
          currentNode = currentNode.right
        }
      }
    }
    currentNode =  newNode
  }

  search(val) {
    // Your code here
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
}
}

module.exports = { BinarySearchTree, TreeNode };
