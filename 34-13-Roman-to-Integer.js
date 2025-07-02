var romanToInt = function (s) {
  let map = new Map();

  map.set("I", 1);
  map.set("V", 5);
  map.set("X", 10);
  map.set("L", 50);
  map.set("C", 100);
  map.set("D", 500);
  map.set("M", 1000);
  map.set("IV", 4);
  map.set("IX", 9);
  map.set("XL", 40);
  map.set("XC", 90);
  map.set("CD", 400);
  map.set("CM", 900);

  let intVal = 0;

  for (let i = 0; i < s.length; ) {
    if (map.has(s[i] + s[i + 1]) && i + 1 < s.length) {
      intVal += map.get(s[i] + s[i + 1]);
      i += 2;
    } else {
      intVal += map.get(s[i]);
      i++;
    }
  }

  return intVal;
};

console.log(romanToInt("III"));
// 3   III = 3.

console.log(romanToInt("LVIII"));
// 58   L = 50, V= 5, III = 3.

console.log(romanToInt("MCMXCIV"));
//1994   M = 1000, CM = 900, XC = 90, IV = 4.
