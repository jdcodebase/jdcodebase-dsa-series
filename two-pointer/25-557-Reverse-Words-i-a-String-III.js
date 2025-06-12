var reverseWords = function (s) {
  let chars = s.split(" ");

  for (let i = 0; i < chars.length; i++) {
    chars[i] = reverseWord(chars[i]);
  }

  return chars.join(" ");
};

function reverseWord(word) {
  let start = 0;
  let end = word.length - 1;

  const chars = word.split("");

  while (start < end) {
    [chars[start], chars[end]] = [chars[end], chars[start]];
    start++;
    end--;
  }

  return chars.join("");
}

console.log(reverseWords("Let's take LeetCode contest"));
// "s'teL ekat edoCteeL tsetnoc"
console.log(reverseWords("Mr Ding"));
//"rM gniD"
