var kidsWithCandies = function (candies, extraCandies) {
  const MAX_CANDIES = Math.max(...candies);

  const result = [];

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= MAX_CANDIES) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], (extraCandies = 3))); // [true,true,true,false,true]
console.log(kidsWithCandies([4, 2, 1, 1, 2], (extraCandies = 1))); // [true,false,false,false,false]
console.log(kidsWithCandies([12, 1, 12], (extraCandies = 10))); // [true,false,true]
