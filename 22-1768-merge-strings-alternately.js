var mergeAlternately = function (word1, word2) {
  let w1Index = 0;
  let w2Index = 0;

  let str = "";

  while (w1Index < word1.length && w2Index < word2.length) {
    str = str + word1[w1Index++] + word2[w2Index++];
  }

  while (w1Index < word1.length) {
    str += word1[w1Index++];
  }

  while (w2Index < word2.length) {
    str += word2[w2Index++];
  }

  return str;
};

console.log(mergeAlternately("abc", "pqr")); //"apbqcr"
console.log(mergeAlternately("ab", "pqrs")); //"apbqrs"
console.log(mergeAlternately("abcd", "pq")); //"apbqcd"
