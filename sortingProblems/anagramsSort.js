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
  let temp1;
  let i = 0;
  let tempArr = [];
  const mapOfOrderedStrings = new Map();
  for (let string of stringsArray) {
    temp1 = bucketStringsSort(string);
    if (!mapOfOrderedStrings.has(temp1)) {
      mapOfOrderedStrings.set(temp1, []);
    }
    tempArr = mapOfOrderedStrings.get(temp1);
    tempArr.push(string);
  }
  for (anagramsArray of mapOfOrderedStrings.values()) {
    for (string of anagramsArray) {
      stringsArray[i] = string;
      i++;
    }
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
