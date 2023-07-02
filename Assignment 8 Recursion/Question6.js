// Given two strings s and p, return *an array of all the start indices of* p*'s anagrams in* s. You may return the answer in **any order**.

// An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// **Example 1:**

// **Input:** s = "cbaebabacd", p = "abc"

// **Output:** [0,6]

// **Explanation:**

// The substring with start index = 0 is "cba", which is an anagram of "abc".

// The substring with start index = 6 is "bac", which is an anagram of "abc"

function findAnagrams(s, p) {
  const result = [];
  const targetFreqMap = new Map();
  const windowFreqMap = new Map();

  for (const char of p) {
    targetFreqMap.set(char, (targetFreqMap.get(char) || 0) + 1);
  }

  let left = 0;
  let right = 0;
  let matchCount = 0;

  while (right < s.length) {
    const charRight = s[right];
    windowFreqMap.set(charRight, (windowFreqMap.get(charRight) || 0) + 1);

    if (
      targetFreqMap.has(charRight) &&
      windowFreqMap.get(charRight) === targetFreqMap.get(charRight)
    ) {
      matchCount++;
    }

    if (right - left + 1 > p.length) {
      const charLeft = s[left];
      windowFreqMap.set(charLeft, windowFreqMap.get(charLeft) - 1);

      if (
        targetFreqMap.has(charLeft) &&
        windowFreqMap.get(charLeft) === targetFreqMap.get(charLeft) - 1
      ) {
        matchCount--;
      }

      left++;
    }

    if (matchCount === targetFreqMap.size) {
      result.push(left);
    }

    right++;
  }

  return result;
}

const s = "cbaebabacd";
const p = "abc";
const indices = findAnagrams(s, p);
console.log(indices);
