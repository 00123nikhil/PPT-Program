function missingDuplicate(nums) {
    const map = new Map();
    for (const num of nums) {
      if (!map.has(num)) {
        map.set(num, true);
      } else {
        return [num];
      }
    }
  
    for (let i = 1; i <= nums.length; i++) {
      if (!map.has(i)) {
        return [i];
      }
    }
  }
  
  const nums = [1, 2, 2, 4];
  const result = missingDuplicate(nums);
  
  console.log(result);
  