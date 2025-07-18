var findDisappearedNumbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;

    nums[index] = -Math.abs(nums[index]);
  }

  let ans = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      ans.push(i + 1);
    }
  }

  return ans;
};

// var findDisappearedNumbers = function (nums) {
//   let map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     map.set(nums[i], true);
//   }

//   let ans = [];

//   for (let i = 1; i <= nums.length; i++) {
//     if (!map.has(i)) {
//       ans.push(i);
//     }
//   }

//   return ans;
// };

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
