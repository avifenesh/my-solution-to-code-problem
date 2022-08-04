// given a sorted array that rotated k times, find the index of n

const kRotatedArray = (arr, n) => {
  let low = 0;
  let high = arr.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] == n) return mid;
    if (arr[mid] > n && n > arr[low]) high = mid - 1;
    else if (arr[mid] < n && n <= arr[high]) low = mid + 1;
    else if (arr[mid] > n) low = mid + 1;
    else high = mid - 1;
  }

  return `${n} does not exsist in the array `;
};

const main = () => {
  const arr = [15, 16, 19, 21, 26, 3, 4, 5, 7, 10, 14];

  console.log(kRotatedArray(arr, 5)); //7
  console.log(kRotatedArray(arr, 21)); //3
  console.log(kRotatedArray(arr, 14)); //10
};
module.exports = main;
