// Check if one string is a one change diffrent from the another - change might be remove, replace or insert

const isOneChange = function (str1, str2) {
  if (typeof str1 != "string" || typeof str2 != "string") {
    return false;
  }
  const diff = str1.length - str2.length;
  if (Math.abs(diff) > 1) return false;
  if (diff === 0) return isOneChangeForEq(str1, str2);
  if (diff < 0) return isOneChangeForDiff(str2, str1);
  return isOneChangeForDiff(str1, str2);
};

const isOneChangeForEq = function (str1, str2) {
  let err = false;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      if (err === true) return false;
      err = true;
    }
  }
  return true;
};

const isOneChangeForDiff = function (big, small) {
  let err = false;
  let j = 0;
  for (let i = 0; i < small.length; i++) {
    if (big[j] !== small[i]) {
      if (err == true) return false;
      j++;
      err = true;
    }
    j++;
  }
  return true;
};
const main = () => {
  console.log(isOneChange("v", "till"));
};

module.exports = main;
