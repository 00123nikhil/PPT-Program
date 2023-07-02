// Given two strings s and goal, return true *if you can swap two letters in* s *so the result is equal to* goal*, otherwise, return* false*.*

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

// - For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

// **Example 1:**

// **Input:** s = "ab", goal = "ba"

// **Output:** true

// **Explanation:** You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

function buddyStrings(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  if (s === goal) {
    const charCount = new Map();
    for (const char of s) {
      if (charCount.has(char)) {
        return true;
      }
      charCount.set(char, true);
    }
    return false;
  }

  const diffIndices = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      diffIndices.push(i);
    }
  }

  return (
    diffIndices.length === 2 &&
    s[diffIndices[0]] === goal[diffIndices[1]] &&
    s[diffIndices[1]] === goal[diffIndices[0]]
  );
}

const s = "ab";
const goal = "ba";
const canSwap = buddyStrings(s, goal);
console.log(canSwap);
