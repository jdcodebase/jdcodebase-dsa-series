// var findTheDifference = function (s, t) {
//   let sArray = s.split("").sort();
//   let tArray = t.split("").sort();

//   for (let i = 0; i < sArray.length; i++) {
//     if (sArray[i] !== tArray[i]) {
//       return tArray[i];
//     }
//   }

//   return tArray[tArray.length - 1];
// };

// var findTheDifference = function (s, t) {
//   const map = new Map();

//   for (let ch of s) {
//     map.set(ch, (map.get(ch) || 0) + 1);
//   }

//   for (let ch of t) {
//     if (!map.has(ch) || map.get(ch) === 0) {
//       return ch;
//     }

//     map.set(ch, map.get(ch) - 1);
//   }
// };

// var findTheDifference = function (s, t) {
//   let sumS = 0;
//   let sumT = 0;

//   for (let char of s) {
//     sumS = char.charCodeAt(0) + sumS;
//   }

//   for (let char of t) {
//     sumT = char.charCodeAt(0) + sumT;
//   }

//   let extraCharCode = sumT - sumS;

//   return String.fromCharCode(extraCharCode);
// };

var findTheDifference = function (s, t) {
  let xor = 0;

  for (let ch of s) {
    xor = ch.charCodeAt(0) ^ xor;
  }

  for (let ch of t) {
    xor = ch.charCodeAt(0) ^ xor;
  }

  return String.fromCharCode(xor);
};

console.log(findTheDifference((s = "abcd"), (t = "abcde")));
console.log(findTheDifference((s = ""), (t = "y")));
