// var moveZeroes = function (nums) {
//   let nonZeroes = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       nonZeroes.push(nums[i]);
//     }
//   }

//   let i = 0;
//   while (i < nonZeroes.length) {
//     nums[i] = nonZeroes[i];
//     i++;
//   }

//   while (i < nums.length) {
//     nums[i] = 0;
//     i++;
//   }

//   return nums;
// };

var moveZeroes = function (nums) {
  let first = 0;
  let sec = 1;

  while (first < sec && sec < nums.length) {
    if (nums[first] === 0 && nums[sec] !== 0) {
      [nums[first], nums[sec]] = [nums[sec], nums[first]];
      first++;
      sec++;
    } else if (nums[first] === 0 && nums[sec] === 0) {
      sec++;
    } else {
      first++;
      sec++;
    }
  }

  return nums;
};
console.log(moveZeroes([0, 1, 0, 3, 12, 1, 15, 0, 0, 0, 0, 17, 19, 20]));
console.log(moveZeroes([0]));
