// Check i a provided string is a permutation of a palindrom

function isPerOfPal(str1) {
  if (str1.length === 0) return true;
  let azArr = new Int32Array(256);
  let noneOdd = 0;
  let odd;
  if (str1.length % 2 === 0) odd = true;
  else odd = false;

  for (let char of str1) {
    if (char === " ") odd = !odd;
    else {
      let i = char.charCodeAt(0);
      azArr[i] += 1;
      if (azArr[i] % 2 === 0) noneOdd -= 1;
      else noneOdd += 1;
    }
  }
  if (noneOdd > 1 || (noneOdd === 1 && odd === true)) return false;
  else return true;
}
