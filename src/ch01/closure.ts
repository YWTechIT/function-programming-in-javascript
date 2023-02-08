import { zipCode } from "./zip-code";

const princetonZip = zipCode("0213", "0216");

console.log("princetonZip.code() :>> ", princetonZip.code());

function makeAddFunction(amount: number) {
  function add(number: number) {
    return number + amount;
  }

  return add;
}

function makeExponentialFunction(base: number) {
  function raise(exponent: number) {
    return Math.pow(base, exponent);
  }
  return raise;
}

const addTenTo = makeAddFunction(10);
// console.log(addTenTo(10));

const raiseTenTo = makeExponentialFunction(3);
// console.log(raiseTenTo(2));
