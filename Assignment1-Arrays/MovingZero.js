function moveZeroes(nums) {
    const n = nums.length;
    let count = 0;
  
    for (let i = 0; i < n; i++) {
      if (nums[i] === 0) {
        count++;
      } else {
        nums[i - count] = nums[i];
      }
    }
  
    for (let i = n - count; i < n; i++) {
      nums[i] = 0;
    }
  }
  
  const nums = [0, 1, 0, 3, 12];
  moveZeroes(nums);
  console.log(nums); 
  