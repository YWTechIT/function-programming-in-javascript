const square = function (x: number) {
  return x * x;
};

const lambdaSquare = (x: number) => x * x;

const obj = {
  method: function (x: number) {
    return x * x;
  },
};

console.log("obj.method :>> ", obj.method);

// const multiplier = new Function("a", "b", "return a * b");
// console.log("multiplier :>> ", multiplier(2, 3));
