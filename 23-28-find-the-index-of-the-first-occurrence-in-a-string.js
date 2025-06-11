var strStr = function (haystack, needle) {
  if (needle.length === 0) {
    return 0;
  }

  if (haystack.length < needle.length) {
    return -1;
  }

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let match = true;

    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        match = false;
        break;
      }
    }

    if (match) {
      return i;
    }
  }

  return -1;
};

console.log(strStr((haystack = "sadbutsad"), (needle = "sad")));
console.log(strStr((haystack = "leetcode"), (needle = "leeto")));
