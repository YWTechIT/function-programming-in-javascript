const R = require("ramda");

const str =
  "We can only see a short distance ahead but we can see plenty there that needs to be done";

const explode = (str) => str.split(/\s+/); // 공백 문자로 나눕니다./

const count = (arr) => arr.length; // 단어 개수를 셉니다.

const countWords = R.compose(count, explode);

console.log("explode(str) :>> ", explode(str));
console.log(countWords(str));
