function BinarySearch(nums, target) {
  let st = 0;
  let end = nums.length - 1;

  while (st <= end) {
    const mid = (st + end) >> 1;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      st = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

const nums = [1, 3, 5, 6];
const target = 5;

const result = BinarySearch(nums, target);

console.log(result);
