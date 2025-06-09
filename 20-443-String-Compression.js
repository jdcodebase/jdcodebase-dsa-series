var compress = function (chars) {
  let read = 0;
  let write = 0;

  while (read < chars.length) {
    let count = 0;
    let char = chars[read];

    while (read < chars.length && chars[read] === char) {
      read++;
      count++;
    }

    chars[write] = char;
    write++;

    if (count > 1) {
      for (let c of count.toString()) {
        chars[write] = c;
        write++;
      }
    }
  }
  console.log(chars);
  return write;
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"])); // ["a","2","b","2","c","3"]
console.log(compress(["a"])); // ["a"]
console.log(
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
); //  ["a","b","1","2"].
