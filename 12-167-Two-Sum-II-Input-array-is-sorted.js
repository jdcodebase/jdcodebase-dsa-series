var twoSum = function (numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  while (start < end) {
    let sum = numbers[start] + numbers[end];

    if (sum === target) {
      return [start + 1, end + 1];
    }

    if (sum < target) {
      start++;
    } else {
      end--;
    }
  }
};

console.log(twoSum([2, 8, 11, 13, 15, 17], 28));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([3, 3], 6));
