// An integer array original is transformed into a **doubled** array changed by appending **twice the value** of every element in original, and then randomly **shuffling** the resulting array.

// Given an array changed, return original *if* changed *is a **doubled** array. If* changed *is not a **doubled** array, return an empty array. The elements in* original *may be returned in **any** order*.

// **Example 1:**

// **Input:** changed = [1,3,4,2,6,8]

// **Output:** [1,3,4]

// **Explanation:** One possible original array could be [1,3,4]:

// - Twice the value of 1 is 1 * 2 = 2.
// - Twice the value of 3 is 3 * 2 = 6.
// - Twice the value of 4 is 4 * 2 = 8.

// Other original arrays could be [4,3,1] or [3,1,4].

function findOriginalArray(changed) {
  if (changed.length % 2 !== 0) {
    return [];
  }

  const original = [];
  const count = new Map();

  for (const num of changed) {
    count.set(num, (count.get(num) || 0) + 1);
  }

  changed.sort((a, b) => a - b);

  for (const num of changed) {
    if (count.get(num) === 0) {
      continue;
    }

    if (count.get(num * 2) === undefined || count.get(num * 2) === 0) {
      return [];
    }

    original.push(num);
    count.set(num, count.get(num) - 1);
    count.set(num * 2, count.get(num * 2) - 1);
  }

  return original;
}

const changed = [1, 3, 4, 2, 6, 8];
const result = findOriginalArray(changed);
console.log(result);
