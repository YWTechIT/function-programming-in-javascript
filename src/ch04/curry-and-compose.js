const { last } = require("lodash");
const R = require("ramda");

// findObject :: DB -> String -> Object
const findObject = R.curry((db, id) => {
  const obj = find(db, id); // 리팩터링한 find()메서드는 저장소 객체를 매개변수로 받기 때문에 합성하기 더 쉽습니다.
  if (obj === null) {
    throw new Error(`ID가 [${id}]인 객체는 없습니다.`);
  }
  return obj;
});

// findStudent :: String -> Student
const findStudent = findObject(DB("students")); // students 객체 저장소를 가리키게 하여 findObject를 부분 평가하면 결국 findStudent라는 새 함수가 생성됩니다.

const csv = ({ ssn, firstname, lastname }) =>
  `${ssn}, ${firstname}, ${lastname}`;

// append :: String -> String -> String
const append = R.curry((elementId, info) => {
  document.querySelector(elementId).innerHTML = info;
  return info;
});

const trim = (str) => str.replace(/^s*|s*$/g, ""); // 입력 문자열 앞뒤 공백을 없앱니다.
const normalize = (str) => str.replace(/-/g, ""); // 대시를 모두 지웁니다.

// showStudent :: String -> Integer
const showStudent = R.compose(
  append("#student-info"),
  csv,
  findStudent,
  normalize,
  trim
);

console.log("showStudent :>> ", showStudent("4444-4444"));

// 함수를 합성하는 순서가 거꾸로라서 부자연스러워 보인다면 혹은 시각적으로 왼쪽부터 결합하는 식의 코드를 선호한다면, compose 대신 pipe 함수를 쓰면 유닉스 셸과 같은 방향으로 실행할 수 있습니다.
const pipeShowStudent = R.pipe(
  trim,
  normalize,
  findStudent,
  csv,
  append("#student-info")
);
