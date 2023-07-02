// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

// **Example 1:**

// **Input:** s = "3[a]2[bc]"

// **Output:** "aaabcbc"

function decodeString(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "]") {
      stack.push(s[i]);
    } else {
      let currentStr = "";

      while (stack[stack.length - 1] !== "[") {
        currentStr = stack.pop() + currentStr;
      }

      stack.pop();

      let multiplier = "";

      while (stack.length > 0 && !isNaN(stack[stack.length - 1])) {
        multiplier = stack.pop() + multiplier;
      }

      multiplier = parseInt(multiplier);

      for (let j = 0; j < multiplier; j++) {
        for (let k = 0; k < currentStr.length; k++) {
          stack.push(currentStr[k]);
        }
      }
    }
  }

  return stack.join("");
}

const s = "3[a]2[bc]";
const decodedString = decodeString(s);
console.log(decodedString);
