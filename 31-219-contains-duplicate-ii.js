var containsNearbyDuplicate = function (nums, k) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;

    set.add(nums[i]);

    if (set.size > k) {
      set.delete(nums[i - k]);
    }
  }

  return false;
};

// var containsNearbyDuplicate = function (nums, k) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j <= i + k && j < nums.length; j++) {
//       if (nums[i] === nums[j]) return true;
//     }
//   }

//   return false;
// };

console.log(containsNearbyDuplicate([1, 2, 3, 1], (k = 3)));
console.log(containsNearbyDuplicate([1, 0, 1, 1], (k = 1)));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], (k = 2)));
