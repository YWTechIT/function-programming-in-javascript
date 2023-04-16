function partial() {
  let fn = this;
  let boundArgs = Array.prototype.slice.call(arguments);
  let placeholder = undefined;

  let bound = function () {
    let position = 0;
    let length = boundArgs.length;
    for (let i = 0; i < length; i++) {
      args[i] =
        boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
    }

    while (position < arguments.length) {
      args.push(arguments[position++]);
    }
    return fn.apply(this, args);
  };

  return bound;
}

var partialAppliedFn = function (a) {
  return function (b, c) {
    return a + ", " + b + ", " + c + "는 좋은 친구들입니다.";
  };
};
