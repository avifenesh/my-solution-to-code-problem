// return the number of trailing zeroes in a factorial of n

const factorialZeroes = (n) => {
  return Math.floor(n / 5);
};

function factorialize(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
}

const main = () => {
  console.log(factorialZeroes(4)); //0
  console.log(factorialize(4));

  console.log(factorialZeroes(5)); //1
  console.log(factorialize(5));

  console.log(factorialZeroes(9)); //1
  console.log(factorialize(9));

  console.log(factorialZeroes(15)); //3
  console.log(factorialize(15));
};
module.exports = main;
