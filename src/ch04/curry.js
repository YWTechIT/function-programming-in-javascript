function curry2(fn) {
  return function (firstArg) {
    // 처음 curry2 호출 시 첫 번째 인수를 포착합니다.
    return function (secondArg) {
      // 두 번째 호출 시 두 번째 인수를 포착합니다.
      return fn(firstArg, secondArg); // 두 인수 firstArg, secondArg로 함수를 실행한 결괏값을 반환합니다.
    };
  };
}

var curriedFn = function (a) {
  return function (b) {
    return function (c) {
      return a + ", " + b + ", " + c + "는 좋은 친구들입니다.";
    };
  };
};
