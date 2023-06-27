function findMissingRanges(nums, lower, upper) {
  const ranges = [];
  let start = lower;

  for (let i = lower; i <= upper + 1; i++) {
    if (nums.includes(i)) {
      start = i + 1;
    } else if (i === upper || !nums.includes(i + 1)) {
      ranges.push([start, i]);
      start = i + 1;
    }
  }

  return ranges;
}

const nums = [0, 1, 3, 50, 75];
const lower = 0;
const upper = 99;
const missingRanges = findMissingRanges(nums, lower, upper);
console.log(missingRanges);
