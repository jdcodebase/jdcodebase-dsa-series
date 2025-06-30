// var findLHS = function (nums) {
//   nums.sort((a, b) => a - b);

//   let start = 0;
//   let end = 0;

//   let maxLen = 0;

//   for (let end = 0; end < nums.length; end++) {
//     while (nums[end] - nums[start] > 1) {
//       start++;
//     }

//     if (nums[end] - nums[start] === 1) {
//       maxLen = Math.max(maxLen, end - start + 1);
//     }
//   }

//   return maxLen;
// };

var findLHS = function (nums) {
  const map = new Map();

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let maxLen = 0;

  for (let [num, count] of map.entries()) {
    if (map.has(num + 1)) {
      maxLen = Math.max(maxLen, count + map.get(num + 1));
    }
  }

  return maxLen;
};

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7])); // 5
console.log(findLHS([1, 2, 3, 4])); // 2
console.log(findLHS([1, 1, 1, 1])); // 0
