var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};

// Hash Map
var majorityElement = function (nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const key = nums[i];
    const value = map.get(key);         // Get current frequency (could be undefined)​
    const freq = value || 0;            // Default to 0 if not in map​

    map.set(key, freq + 1);             // Update frequency​

    // Check if current element is the majority​

    if (map.get(key) > Math.floor(nums.length / 2)) {​

      return key;
    }
  }

};

// Boyer-Moore Voting ​
var majorityElement = function (nums) {
  let count = 0;
  let major = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      major = nums[i];
    }

    if (major === nums[i]) {
      count++;
    } else {
      count--;
    }
  }

  return major;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([3, 2, 3]));
