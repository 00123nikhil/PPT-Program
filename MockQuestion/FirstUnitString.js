var firstUniqChar = function (s) {
  const charCount = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charCount[char] === 1) {
      return i;
    }
  }

  return -1;
};

// Test case 1
const s1 = "leetcode";
console.log(firstUniqChar(s1));

// Test case 2
const s2 = "loveleetcode";
console.log(firstUniqChar(s2));

// Test case 3
const s3 = "aabb";
console.log(firstUniqChar(s3));
