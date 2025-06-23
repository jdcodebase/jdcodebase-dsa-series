var shortestToChar = function (s, c) {
  let cIndexes = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      cIndexes.push(i);
    }
  }

  let distance = [];
  let index = 0;

  for (let i = 0; i < s.length; i++) {
    if (i <= cIndexes[index]) {
      let dist = Math.abs(i - cIndexes[index]);
      distance.push(dist);
    } else {
      if (index + 1 < cIndexes.length) {
        let dist1 = Math.abs(i - cIndexes[index]);
        let dist2 = Math.abs(i - cIndexes[index + 1]);

        if (dist2 < dist1) {
          index++;
          distance.push(dist2);
        } else {
          distance.push(dist1);
        }
      } else {
        let dist = Math.abs(i - cIndexes[index]);
        distance.push(dist);
      }
    }
  }

  return distance;
};

console.log(shortestToChar("loveleetcode", "e")); // [3,2,1,0,1,0,0,1,2,2,1,0]
console.log(shortestToChar("aaab", "b")); // [3,2,1,0]
