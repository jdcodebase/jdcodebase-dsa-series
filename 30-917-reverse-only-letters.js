var reverseOnlyLetters = function (s) {
  let chars = s.split("");

  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    if (!isLetter(chars[left])) {
      left++;
    } else if (!isLetter(chars[right])) {
      right--;
    } else {
      [chars[left], chars[right]] = [chars[right], chars[left]];
      left++;
      right--;
    }
  }
  return chars.join("");
};

function isLetter(char) {
  const code = char.charCodeAt(0);

  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

console.log(reverseOnlyLetters("ab-cd")); // Output: "dc-ba"
console.log(reverseOnlyLetters("a-bC-dEf-ghIj")); // Output: "j-Ih-gfE-dCba"
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!")); // Output: "Qedo1ct-eeLg=ntse-T!"
