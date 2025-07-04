var isHappy = function (number) {
  let seenNumbers = new Set();

  while (number !== 1) {
    if (seenNumbers.has(number)) {
      return false;
    }

    seenNumbers.add(number);

    let current = number;
    let sumOfSquares = 0;

    while (current > 0) {
      let digit = current % 10;
      sumOfSquares += digit * digit;
      current = Math.floor(current / 10);
    }

    number = sumOfSquares;
  }

  return true;
};

console.log(isHappy(19));
console.log(isHappy(2));
