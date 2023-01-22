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
    let currentNode = this.root;

    while (currentNode.val !== null) {
      if (val == currentNode.val) {
        return true
      };
      if(val <= currentNode.val){
        if(currentNode.left == null){
          return false
        }else{
          currentNode = currentNode.left
        }
      }
      else if(val > currentNode.val){
        if (currentNode.right == null){
          return false
        }else{
          currentNode = currentNode.right
        }
      }
    }
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if(currentNode == null){
      return
    }

    console.log(currentNode.val)
    this.preOrderTraversal(currentNode.left)
    this.preOrderTraversal(currentNode.right)
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if(currentNode == null){
      return
    }

    this.inOrderTraversal(currentNode.left)
    console.log(currentNode.val)
    this.inOrderTraversal(currentNode.right)
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if(currentNode == null){
      return
    }

    this.postOrderTraversal(currentNode.left)
    this.postOrderTraversal(currentNode.right)
    console.log(currentNode.val)
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
    if(this.root == null){
      return
    }
    let queue = [];
    queue.push(this.root);

    // While the queue is not empty
    while (queue.length > 0) {
      // Dequeue a node and print its value
      let node = queue.shift();

      if(node !== null ){
        console.log(node.val);
        queue.push(node.left);
        queue.push(node.right);
      }
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
    if(this.root == null){
      return
    }

    let stack = [];
    stack.push(this.root);

    // While the stack is not empty
    while (stack.length > 0) {
      // Pop a node and print it value if its not null
      let node = stack.pop();

      if(node !== null){
        console.log(node.val);
        stack.push(node.left);
        stack.push(node.right);
      }

    }
  }
}

module.exports = { BinarySearchTree, TreeNode };
