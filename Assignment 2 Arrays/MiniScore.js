function minScore(nums, k) {
  nums.sort((a, b) => a - b);

  const n = nums.length;
  const minVal = nums[0];
  const maxVal = nums[n - 1];

  let res = maxVal - minVal;

  for (let i = 1; i < n - 1; i++) {
    const high = Math.max(nums[i] + k, maxVal - k);
    const low = Math.min(nums[i] - k, minVal + k);

    res = Math.min(res, high - low);
  }

  return res;
}

const nums = [1];
const k = 0;
console.log(minScore(nums, k));
