// You need to construct a binary tree from a string consisting of parenthesis and integers.

// The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.
// You always start to construct the **left** child node of the parent first if it exists.

// **Input:** s = "4(2(3)(1))(6(5))"

// **Output:** [4,2,6,3,1,5]

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function str2tree(s) {
  if (s.length === 0) {
    return null;
  }

  const openParenIndex = s.indexOf("(");

  if (openParenIndex === -1) {
    return new TreeNode(parseInt(s));
  }

  const rootVal = parseInt(s.substring(0, openParenIndex));
  const root = new TreeNode(rootVal);

  let count = 0;
  let start = openParenIndex;

  for (let i = start; i < s.length; i++) {
    if (s[i] === "(") {
      count++;
    } else if (s[i] === ")") {
      count--;
    }

    if (count === 0 && start === openParenIndex) {
      root.left = str2tree(s.substring(start + 1, i));
      start = i + 1;
    } else if (count === 0) {
      root.right = str2tree(s.substring(start + 1, i));
    }
  }

  return root;
}

function inorderTraversal(root) {
  const result = [];

  function inorder(node) {
    if (!node) {
      return;
    }

    inorder(node.left);
    result.push(node.val);
    inorder(node.right);
  }

  inorder(root);

  return result;
}

const s = "4(2(3)(1))(6(5))";
const root = str2tree(s);
const result = inorderTraversal(root);
console.log(result);
