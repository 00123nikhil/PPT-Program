// Given two [sparse matrices](https://en.wikipedia.org/wiki/Sparse_matrix) mat1 of size m x k and mat2 of size k x n, return the result of mat1 x mat2. You may assume that multiplication is always possible.

// **Example 1:**

// **Input:** mat1 = [[1,0,0],[-1,0,3]], mat2 = [[7,0,0],[0,0,0],[0,0,1]]

// **Output:**

// [[7,0,0],[-7,0,3]]

function multiply(mat1, mat2) {
  const m = mat1.length;
  const n = mat2[0].length;
  const result = new Array(m).fill().map(() => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let sum = 0;
      for (let k = 0; k < mat1[0].length; k++) {
        sum += mat1[i][k] * mat2[k][j];
      }
      result[i][j] = sum;
    }
  }

  return result;
}

const mat1 = [
  [1, 0, 0],
  [-1, 0, 3],
];
const mat2 = [
  [7, 0, 0],
  [0, 0, 0],
  [0, 0, 1],
];
const result = multiply(mat1, mat2);
console.log(result);
