var findMaxAverage = function (nums, k) {
  let subArray = 0;
  for (let i = 0; i < k; i++) {
    subArray = nums[i] + subArray;
  }

  let avg = subArray / k;

  for (let i = k; i < nums.length; i++) {
    subArray = subArray + nums[i] - nums[i - k];

    avg = Math.max(avg, subArray / k);
  }

  return avg.toFixed(5);
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
