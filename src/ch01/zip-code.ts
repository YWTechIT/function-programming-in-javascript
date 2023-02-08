export function zipCode(code: string, location: string) {
  const _code = code;
  const _location = location || "";

  return {
    code: function () {
      return _code;
    },
    location: function () {
      return _location;
    },
    fromString: function (str: string) {
      const parts = str.split("-");
      return zipCode(parts[0], parts[1]);
    },
    toString: function () {
      return _code + "-" + _location;
    },
  };
}

const princetonZip = zipCode("377", "8637");

// console.log(princetonZip.toString());
