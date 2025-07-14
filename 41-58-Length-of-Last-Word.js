// var lengthOfLastWord = function (s) {
//   let subStr = "";

//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] === " " && subStr === "") {
//       continue;
//     } else if (s[i] === " " && subStr.length > 0) {
//       return subStr.length;
//     } else {
//       subStr += s[i];
//     }
//   }

//   return subStr.length;
// };

var lengthOfLastWord = function (s) {
  let words = s.trim().split(" ");
  return words[words.length - 1].length;
};

console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy")); // 6
