// find the index of a word in a sorted array with empty strings inside

const sparseSearch = (str, arrayOfString) => {
  let right = arrayOfString.length - 1;
  let left = 0;
  let mid = Math.floor(left + right / 2);
  let move;
  while (left < right) {
    if (arrayOfString[mid] == "") {
      move = findClosestStr(arrayOfString, mid, 1);
      if (move === 0) return -1;
      mid += move;
    }
    if (arrayOfString[mid] == str) return mid;
    else {
      if (str > arrayOfString[mid]) left = mid + 1;
      else right = mid - 1;
      mid = Math.floor(left + right / 2);
    }
  }
  return -1;
};

const findClosestStr = (arrayOfString, mid, n) => {
  if (mid + n >= arrayOfString.length || mid - n < 0) return 0;
  if (!(arrayOfString[mid + n] === "")) return n;
  if (!(arrayOfString[mid - n] === "")) return -n;
  return findClosestStr(arrayOfString, mid, n + 1);
};

const main = () => {
  const str = "ball";
  const arrayOfString = [
    "at",
    "",
    "",
    "",
    "ball",
    "",
    "",
    "car",
    "",
    "",
    "dad",
    "",
    "",
  ];
  console.log(sparseSearch(str, arrayOfString));
};

module.exports = main;
