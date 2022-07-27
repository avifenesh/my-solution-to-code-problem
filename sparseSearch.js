const sparseSearch = (str, arrayOfString) => {
  let right = arrayOfString.length - 1;
  let left = 0;
  let mid = Math.floor(left + right / 2);
  let rightSearchVal = 0;
  let leftSearchVal = 0;
  while (left < right) {
    console.log(mid);
    if (arrayOfString[mid] == str) return mid;
    if (arrayOfString[mid] == "") {
      rightSearchVal += sparseSearch(str, arrayOfString.slice(mid));
      leftSearchVal += sparseSearch(str, arrayOfString.slice(0, mid));
      if (rightSearchVal != -1) return rightSearchVal + mid;
      else return leftSearchVal;
    } else {
      if (str > arrayOfString[mid]) left = mid + 1;
      else right = mid - 1;
    }
  }
  return -1;
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
