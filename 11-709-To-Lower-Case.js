var toLowerCase = function (s) {
  let str = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt(0) >= 65 && s[i].charCodeAt(0) <= 90) {
      let code = s[i].charCodeAt(0) + 32;
      str += String.fromCharCode(code);
    } else {
      str += s[i];
    }
  }
  return str;
};

console.log(toLowerCase("Hello"));
console.log(toLowerCase("here"));
console.log(toLowerCase("LOVELY"));
