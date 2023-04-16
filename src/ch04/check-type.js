const R = require("ramda");

// checkType :: Type -> Object -> Object
const checkType = R.curry((typeDef, obj) => {
  if (!R.is(typeDef, obj)) {
    let type = typeof obj;
    throw new TypeError(
      `형식 불일치: [${typeDef}]이어야 하는데, [${type}]입니다.`
    );
  }
  return obj;
});

checkType(String)("curry");
checkType(Number)(3);
checkType(Number)(3.5);

let now = new Date();
checkType(Date)(now);
checkType(Object)({});
console.log("여기냐? :>> ");
checkType(String)(42);
