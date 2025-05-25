var isPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    while (start < end && !isAplhaNumeric(s[start])) {
      start++;
    }
    while (start < end && !isAplhaNumeric(s[end])) {
      end--;
    }

    if (s[start].toLowerCase() !== s[end].toLowerCase()) return false;

    start++;
    end--;
  }

  return true;
};

function isAplhaNumeric(c) {
  let code = c.charCodeAt(0);

  return (
    (code >= 48 && code <= 57) ||
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122)
  );
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true
