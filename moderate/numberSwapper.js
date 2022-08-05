// write a function to swap two numbers in a place (without using temp number)

const numberSwapper = (a, b) => {
  b = a + b;
  a = b - a;
  b = b - a;
  console.log(a, b);
};

const main = () => {
  numberSwapper(7, 6);
  numberSwapper(-111, 265);
  numberSwapper(12, 1);
  numberSwapper(10000, 0);
};
module.exports = main;
