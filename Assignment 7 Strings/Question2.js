// Given a string num which represents an integer, return true *if* num *is a **strobogrammatic number***.

// A **strobogrammatic number** is a number that looks the same when rotated 180 degrees (looked at upside down).

// **Example 1:**

// **Input:** num = "69"

// **Output:**

// true

function isStrobogrammatic(num) {
  const strobogrammaticDigits = {
    0: "0",
    1: "1",
    6: "9",
    8: "8",
    9: "6",
  };

  let reversed = "";

  for (let i = num.length - 1; i >= 0; i--) {
    const ch = num[i];
    if (ch in strobogrammaticDigits) {
      reversed += strobogrammaticDigits[ch];
    } else {
      return false;
    }
  }

  return reversed === num;
}

const num = "69";
const result = isStrobogrammatic(num);
console.log(result);
