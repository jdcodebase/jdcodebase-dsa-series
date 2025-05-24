var reverseString = function (s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    let temp = s[start];
    s[start] = s[end];
    s[end] = temp;

    start++;
    end--;
  }

  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
// ["o","l","l","e","h"]

console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
// ["h","a","n","n","a","H"]
