var countConsistentStrings = function (allowed, words) {
  const ALLOWED_STR = new Set(allowed);
  let count = 0;

  for (let word of words) {
    let isConsistent = [...word].every((char) => ALLOWED_STR.has(char));
    if (isConsistent) {
      count++;
    }
  }

  return count;
};

console.log(
  countConsistentStrings(
    (allowed = "ab"),
    (words = ["ad", "bd", "aaab", "baa", "badab"])
  )
);
console.log(
  countConsistentStrings(
    (allowed = "abc"),
    (words = ["a", "b", "c", "ab", "ac", "bc", "abc"])
  )
);
console.log(
  countConsistentStrings(
    (allowed = "cad"),
    (words = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"])
  )
);
