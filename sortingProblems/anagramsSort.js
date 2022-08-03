// sort an array of strings i a way that all the anagram are in the same place
const abcMap = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
  k: 10,
  l: 11,
  m: 12,
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 21,
  w: 22,
  x: 23,
  y: 24,
  z: 25,
};

const anagramSort = (stringsArray) => {
  const helper = [];
  let c = 1;
  let temp1;
  let temp2;
  for (string of stringsArray) {
    helper.push(bucketStringsSort(string));
  }
  for (let i = 0; i < stringsArray.length; i++) {
    for (let j = c; j < stringsArray.length; j++) {
      if (helper[i] == helper[j]) {
        temp1 = helper[i + 1];
        temp2 = stringsArray[i + 1];
        helper[i + 1] = helper[j];
        stringsArray[i + 1] = stringsArray[j];
        stringsArray[j] = temp2;
        helper[j] = temp1;
        break;
      }
    }
    c++;
  }
  return stringsArray;
};

const bucketStringsSort = (str) => {
  let strDup = "";

  let helper = new Array(26).fill(0);

  for (let ind = 0; ind < str.length; ind++) {
    helper[abcMap[str[ind]]] += 1;
  }
  for (let ind = 0; ind < helper.length; ind++) {
    if (helper[ind] != 0) {
      strDup += Object.keys(abcMap)[ind].repeat(helper[ind]);
    }
  }
  return strDup;
};
const stringsArray = [
  "avi",
  "vviv",
  "vai",
  "string",
  "bar",
  "wow",
  "oww",
  "gstrin",
  "tsgrin",
];

const main = () => {
  console.log(anagramSort(stringsArray));
  //[
  //   'avi',    'vai',
  //   'vviv',   'string',
  //   'gstrin', 'tsgrin',
  //   'oww',    'wow',
  //   'bar'
  // ]
};
module.exports = main;
