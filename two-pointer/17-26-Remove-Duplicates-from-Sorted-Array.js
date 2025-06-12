var removeDuplicates = function (nums) {
  let first = 0;
  let sec = 1;

  while (sec < nums.length) {
    if (nums[first] === nums[sec]) {
      sec++;
    } else {
      first++;
      [nums[first], nums[sec]] = [nums[sec], nums[first]];
      sec++;
    }
  }
  console.log(nums.slice(0, first + 1));
  return first + 1;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
