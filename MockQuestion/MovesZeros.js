var moveZeroes = function (nums) {
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
  }
};

const nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1);

const nums2 = [0];
moveZeroes(nums2);
console.log(nums2);
