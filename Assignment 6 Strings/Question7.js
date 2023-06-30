// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

// **Example 1:**

// **Input:** n = 3

// **Output:** [[1,2,3],[8,9,4],[7,6,5]]

function generateMatrix(n) {
  const matrix = new Array(n).fill().map(() => new Array(n));
  let rowStart = 0,
    rowEnd = n - 1,
    colStart = 0,
    colEnd = n - 1;
  let num = 1;

  while (num <= n * n) {
    for (let col = colStart; col <= colEnd; col++) {
      matrix[rowStart][col] = num++;
    }
    rowStart++;

    for (let row = rowStart; row <= rowEnd; row++) {
      matrix[row][colEnd] = num++;
    }
    colEnd--;

    for (let col = colEnd; col >= colStart; col--) {
      matrix[rowEnd][col] = num++;
    }
    rowEnd--;

    for (let row = rowEnd; row >= rowStart; row--) {
      matrix[row][colStart] = num++;
    }
    colStart++;
  }

  return matrix;
}

const n = 3;
const result = generateMatrix(n);
console.log(result);
