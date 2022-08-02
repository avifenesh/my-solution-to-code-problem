// given two sorted array, A and B, when A has enough place to hold array B, write an algorithm to sort array B into A

twoSortedArray = (A, B) => {
  let m = B.length - 1;
  let n = 0;
  let i = 0;
  while (A[i] != null) {
    i++;
  }
  n = i - 1;
  while (m >= 0) {
    while (B[m] >= A[n]) {
      A[m + n] = B[m];
      m--;
    }
    A[m + n] = A[n];
    n--;
  }
  return A;
};
const main = () => {
  A = [
    0,
    1,
    3,
    5,
    6,
    7,
    8,
    9,
    11,
    14,
    15,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ];

  B = [1, 3, 5, 6, 7, 11, 15, 17, 21];

  console.log(twoSortedArray(A, B));
  //[
  //    1,  1,  3,  3,  5,  5,  6,
  //    6,  7,  7,  8,  9, 11, 11,
  //   14, 15, 15, 17, 21
  // ]
};
module.exports = main;
