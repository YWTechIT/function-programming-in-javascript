var outerVar = "Outer";

function makeInner(params) {
  var innerVar = "Inner";

  function inner() {
    console.log(`${outerVar}, ${innerVar}, ${params}이(가) 보여요!`);
  }

  return inner;
}

var inner = makeInner("Params");
console.log("inner :>> ", inner);

console.log("잠깐 쉬어주고요");

inner();
