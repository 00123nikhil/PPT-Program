// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase **may be** incomplete.

// Given the integer n, return *the number of **complete rows** of the staircase you will build*.

// **Example 1:**

// ![Screenshot 2023-05-29 004404.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0649438a-417e-4a97-ad4a-5d576ecbfee6/Screenshot_2023-05-29_004404.png)

// **Input:** n = 5

// **Output:** 2

// **Explanation:** Because the 3rd row is incomplete, we return 2.

function arrangeCoins(n) {
  let left = 0;
  let right = n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const curr = (mid * (mid + 1)) / 2;

    if (curr === n) {
      return mid;
    } else if (curr < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
}

const n = 5;
const result = arrangeCoins(n);
console.log(result);
