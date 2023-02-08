function negate(func) {
  return function () {
    return !func.apply(null, arguments);
  };
}

function isNull(val) {
  return val === null;
}

const isNotNull = negate(isNull);

const result1 = isNotNull(null);
const result2 = isNotNull({});

console.log("result1 :>> ", result1);
console.log("result2 :>> ", result2);
