// var isAnagram = function (s, t) {
//   let s1 = s.split("").sort().join("");
//   let t1 = t.split("").sort().join("");

//   return s1 === t1;
// };

// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;

//   let sMap = new Map();
//   let tMap = new Map();

//   for (let char of s) {
//     sMap.set(char, (sMap.get(char) || 0) + 1);
//   }

//   for (let char of t) {
//     tMap.set(char, (tMap.get(char) || 0) + 1);
//   }

//   for (let [key, value] of sMap) {
//     if (tMap.get(key) !== value) return false;
//   }

//   return true;
// };

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let map = new Map();

  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let char of t) {
    if (!map.has(char)) return false;
    map.set(char, map.get(char) - 1);

    if (map.get(char) < 0) return false;
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
