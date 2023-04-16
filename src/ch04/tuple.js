const Tuple = function (/* 형식 */) {
  const typeInfo = Array.prototype.slice.call(arguments); // 튜플에 담긴 인수 형식을 읽습니다.
  console.log("typeInfo :>> ", typeInfo);

  const _T = function (/* 값 */) {
    // 내부형 _T는 튜플의 형식과 값이 맞는지 확인합니다.
    const values = Array.prototype.slice.call(arguments); // 튜플에 저장된 값을 꺼냅니다.
    if (values.some((val) => val === null || val === undefined)) {
      throw new ReferenceError("튜플은 null 값을 가질 수 없습니다!");
    }
    if (values.length !== typeInfo.length) {
      // 정의된 형색 개수와 튜플 항수가 일치하는지 체크합니다.
      throw new TypeError("튜플 항수가 프로토타입과 맞지 않습니다!");
    }
    values.forEach((val, index) => {
      // 각 튜플 값의 형식이 올바른지 checkType함수로 조사합니다. 각 튜플 원소는 ._n(원소 인덱스 n은 1부터 시작)로 참조 가능한 튜플 속성으로 바꿉니다.
      this["_" + (index + 1)] = checkType(typeInfo[index])(val);
    }, this);
    Object.freeze(this);
  };

  _T.prototype.values = () => {
    return Object.keys(this).map((k) => this[k], this);
  };
  return _T;
};

const Status = Tuple(Boolean, String);
console.log("Status :>> ", Status());
