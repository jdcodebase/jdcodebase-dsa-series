// var merge = function (nums1, m, nums2, n) {
//   for (let i = m, j = 0; i < m + n; i++) {
//     nums1[i] = nums2[j];
//     j++;
//   }
//   return nums1.sort((a, b) => a - b);
// };

var merge = function (nums1, m, nums2, n) {
  let arr = [];

  for (let i = 0; i < m; i++) {
    arr.push(nums1[i]);
  }

  let count = 0,
    first = 0,
    sec = 0;

  while (count < m + n) {
    if (
      arr[first] < nums2[sec] ||
      (arr[first] !== undefined && nums2[sec] === undefined)
    ) {
      nums1[count] = arr[first];
      first++;
    } else {
      nums1[count] = nums2[sec];
      sec++;
    }
    count++;
  }
  console.log(nums1);
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]
console.log(merge([1], 1, [], 0)); //  [1]
console.log(merge([0], 0, [1], 1)); // [1]
