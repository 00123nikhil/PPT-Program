// Given a string s containing only three types of characters: '(', ')' and '*', return true *if* s *is **valid***.

// The following rules define a **valid** string:

// - Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// - Any right parenthesis ')' must have a corresponding left parenthesis '('.
// - Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// - '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

// **Example 1:**

// **Input:** s = "()"

// **Output:**

// true

function isValid(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(" || char === "*") {
      stack.push(char);
    } else if (char === ")") {
      if (
        stack.length > 0 &&
        (stack[stack.length - 1] === "(" || stack[stack.length - 1] === "*")
      ) {
        stack.pop();
      } else if (stack.length > 1 && stack[stack.length - 2] === "(") {
        stack.pop();
        stack.pop();
      } else {
        return false;
      }
    }
  }

  let starCount = 0;

  while (stack.length > 0) {
    const char = stack.pop();

    if (char === "(") {
      if (starCount < 1) {
        return false;
      }
      starCount--;
    } else {
      starCount++;
    }
  }

  return true;
}

const s = "()";
const result = isValid(s);
console.log(result);
