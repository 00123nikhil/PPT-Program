function removeElement(nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  console.log("Output: " + k);

  const result = new Array(k);
  for (let i = 0; i < k; i++) {
    result[i] = nums[i];
  }

  return result;
}

const nums = [3, 2, 2, 3];
const val = 3;
const updatedNums = removeElement(nums, val);

for (const num of updatedNums) {
  console.log(num);
}
