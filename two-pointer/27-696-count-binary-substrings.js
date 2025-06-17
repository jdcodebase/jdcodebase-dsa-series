var countBinarySubstrings = function (s) {
  let groups = [];
  let count = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      count++;
    } else {
      groups.push(count);
      count = 1;
    }
  }
  groups.push(count);

  let result = 0;

  for (let i = 1; i < groups.length; i++) {
    result += Math.min(groups[i - 1], groups[i]);
  }

  return result;
};

console.log(countBinarySubstrings("10101010")); // Output: 7
console.log(countBinarySubstrings("10101")); // Output: 4
