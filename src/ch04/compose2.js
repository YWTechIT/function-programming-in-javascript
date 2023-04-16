const R = require("ramda");

const students = ["jenny", "ted", "Kleene", "Church"];
const grades = [80, 100, 90, 99];

const smartestStudent = R.compose(
  // smartestStudent는 여러 람다 JS함수를 차례로 합성한 함수입니다.
  R.head,
  R.pluck(0),
  R.reverse,
  R.sortBy(R.prop(1)),
  R.zip
);

console.log("result :>> ", smartestStudent(students, grades));
// 두 배열을 함수에 넘겨 R.zip()부터 실행합니다. 각 단계를 거치면서 데이터는 한 표현식에서 다음 표현식으로 불변 변환되고 최종 결과는 R.head()로 얻습니다.

const first = R.head();
const getName = R.pluck(0); // 주어진 인덱스에 위치한 원소를 추출해서 새 배열을 만듭니다.
const reverse = R.reverse();
const sortByGrade = R.sortBy(R.prop(1));
const combine = R.zip;
