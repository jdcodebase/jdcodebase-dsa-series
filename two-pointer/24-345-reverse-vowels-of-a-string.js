var reverseVowels = function (s) {
  const vowels = new Set("aeiouAEIOU");
  const chars = s.split("");
  let start = 0,
    end = s.length - 1;

  while (start < end) {
    while (start < end && !vowels.has(chars[start])) start++;
    while (start < end && !vowels.has(chars[end])) end--;

    [chars[start], chars[end]] = [chars[end], chars[start]];
    start++;
    end--;
  }

  return chars.join("");
};

console.log(reverseVowels("IceCreAm")); // "AceCreIm"
console.log(reverseVowels("leetcode")); // "leotcede"
