var sortColors = function (nums) {
  let zero = 0,
    one = 0,
    two = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zero++;
    } else if (nums[i] === 1) {
      one++;
    } else {
      two++;
    }
  }

  let i = 0;

  while (zero--) nums[i++] = 0;

  while (one--) nums[i++] = 1;

  while (two--) nums[i++] = 2;

  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0])); // [0, 0, 1, 1, 2, 2]
console.log(sortColors([2, 0, 1])); // [0, 1, 2]
