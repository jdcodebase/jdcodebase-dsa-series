var lengthOfLastWord = function (s) {
  console.log(s);
  let words = s.trim().split(" ");
  return words[words.length - 1].length;
};

// var lengthOfLastWord = function (s) {
//   let subStr = "";

//   for (let i = s.length - 1; i >= 0; i--) {
//     let char = s[i];

//     if (char === " " && subStr === "") {
//       continue;
//     } else if (char === " " && subStr.length > 0) {
//       return subStr.length;
//     } else {
//       subStr += char;
//     }
//   }

//   return subStr.length;
// };

console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy")); // 6
