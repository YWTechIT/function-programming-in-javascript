const R = require("ramda");

function compose() {
  let args = arguments;
  let start = args.length - 1;
  return function () {
    // compose는 실제 인수를 넣고 호출한 또 다른 함수를 출력합니다.
    let i = start;
    let result = args[start].apply(this, arguments); // 전달된 인수를 넣고 동적으로 함수를 적용합니다.
    while (i--) {
      result = args[i].call(this, result); // 이전 단계 반환값을 다시 인수로 넣고 그다음 함수를 계속 반복 실행합니다.
    }
    return result;
  };
}

const trim = (str) => str.replace(/^s*|s*$/g, ""); // 입력 문자열 앞뒤 공백을 없앱니다.
const normalize = (str) => str.replace(/-/g, ""); // 대시를 모두 지웁니다.
const validLength = (param, str) => str.length === param; // 문자열 길이를 체크합니다.
const checkLengthSsn = _.partial(validLength, 9);
// const cleanInput = R.compose(normalize, trim);
const isValidSsn = R.compose(checkLengthSsn, cleanInput);

console.log('cleanInput(" 444-44-4444 "); :>> ', cleanInput(" 444-44-4444 "));
console.log('isValidSsn(" 444-44-4444"); :>> ', isValidSsn(" 444-44-4444"));

Function.prototype.compose = R.compose; // Function 프로토타입에 compose를 추가해서 기능을 확장할 수도 있습니다.
const cleanInput = checkLengthSsn.compose(normalize).compose(trim); // 함수들을 다시 점(.)으로 체이닝합니다.
