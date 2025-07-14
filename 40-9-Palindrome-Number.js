var isPalindrome = function (x) {
  if (x < 0) return false;

  let temp = x;
  let reversed = 0;

  while (temp > 0) {
    let lastDigit = temp % 10;
    reversed = reversed * 10 + lastDigit;
    temp = Math.floor(temp / 10);
  }

  return reversed === x;
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
