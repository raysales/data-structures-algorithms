class Node
{
    constructor()
    {
        this.val = 0;
        this.left = null;
        this.right = null;
    }
};

const leafNodesArr = [];

// Function to print leaf
// nodes from left to right
function printLeafNodes(root)
{
    // If node is null, return
    if (root == null)
        return;
     
    // If node is leaf node, print its data    
    if (root.left == null && root.right == null)
    {
      leafNodesArr.push(root.val);
      //return;
    }
     
    // If left child exists, check for leaf recursively
    if (root.left != null) printLeafNodes(root.left);
         
    // If right child exists, check for leaf recursively
    if (root.right != null) printLeafNodes(root.right);
    
    //printLeafNodes(root.left);
    //printLeafNodes(root.right);
    
    return leafNodesArr;
}

const storeLeafNodes = (root) => {

  if (root == null) return
         
  if (!root.left && !root.right) leafNodesArr.push(root.val)
   
  storeLeafNodes(root.left)
  storeLeafNodes(root.right)
    
  return leafNodesArr
}
 
// Utility function to create a new tree node
function newNode(data)
{
    var temp = new Node();
    temp.val = data;
    temp.left = null;
    temp.right = null;
    return temp;
}
 
// Driver code
 
// Let us create binary tree shown in
// above diagram
var root = newNode(1);
root.left = newNode(2);
root.right = newNode(3);
root.left.left = newNode(4);
root.right.left = newNode(5);
root.right.right = newNode(8);
root.right.left.left = newNode(6);
root.right.left.right = newNode(7);
root.right.right.left = newNode(9);
root.right.right.right = newNode(10);
 
// Print leaf nodes of the given tree
//console.log(printLeafNodes(root));
console.log(storeLeafNodes(root))