function nextPermutation(nums) {
  const n = nums.length;
  let i = n - 2;

  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = n - 1;

    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }

    swap(nums, i, j);
  }

  reverse(nums, i + 1, n - 1);
}

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function reverse(nums, start, end) {
  while (start < end) {
    swap(nums, start, end);
    start++;
    end--;
  }
}

const nums = [1, 2, 3];
nextPermutation(nums);
console.log(nums);
