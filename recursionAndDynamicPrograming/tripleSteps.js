// a kid can go up the stairs in 1, 2 or 3 steps each time, for n stairs how much ways he has to go up the stairs

tripleSteps = (n) => {
  if (n == 0 || n == 1) return 1;
  if (n == 2) return 2;
  if (n == 3) return 4;
  let a = 1;
  let b = 2;
  let c = 4;
  let steps;
  for (let i = 3; i < n; i++) {
    steps = a + b + c;
    a = b;
    b = c;
    c = steps;
  }
  return steps;
};

const main = () => {
  console.log(tripleSteps(10)); // 274
};

module.exports = main;
