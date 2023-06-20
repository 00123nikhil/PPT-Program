function plusOne(digits) {
  const inc = [];
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + carry;
    inc.push(sum % 10);
    carry = sum / 10;
  }

  if (carry > 0) {
    inc.push(carry);
  }

  const result = [];
  for (let i = 0; i < inc.length; i++) {
    result[i] = inc[inc.length - 1 - i];
  }

  return result;
}

const digits = [1, 2, 3];
console.log(plusOne(digits));
