// Given two strings s and goal, return true *if and only if* s *can become* goal *after some number of **shifts** on* s.

// A **shift** on s consists of moving the leftmost character of s to the rightmost position.

// - For example, if s = "abcde", then it will be "bcdea" after one shift.

// **Example 1:**

// **Input:** s = "abcde", goal = "cdeab"

// **Output:**

// true

function canShiftString(s, goal) {
  const shiftedString = s + s;
  return shiftedString.includes(goal);
}


const s = "abcde";
const goal = "cdeab";
const result = canShiftString(s, goal);
console.log(result);
