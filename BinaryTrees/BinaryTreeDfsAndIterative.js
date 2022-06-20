class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
  const d = new Node('d');
  const e = new Node('e');
  const f = new Node('f');
  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  
  const dfs = (root) => {
    if (!root) return [];
    const leftValues = dfs(root.left);
    const rightValues = dfs(root.right);
    return [root.val, ...leftValues, ...rightValues]
  }
  
  const dfsIter = (root) => {
    if (!root) return [];
    const stack = [root];
    let curNode;
    const result = [];
    while (stack.length > 0) {
      curNode = stack.pop();
      result.push(curNode.val);
  
      if (curNode.right) stack.push(curNode.right)
      if (curNode.left) stack.push(curNode.left)
    }
    return result;
  }
  
  console.log(dfs(a));