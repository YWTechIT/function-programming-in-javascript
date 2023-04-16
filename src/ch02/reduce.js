const isNotValid = (val) => _.isUndefined(val) || _.isNull(val);
const notAllValid = (args) => _(args).some(isNotValid);

notAllValid(["string", 0, null, undefined]); // true
notAllValid(["string", 0, {}]); // false

const isValid = (val) => !_.isUndefined(val) && !_.isNull(val);
const allValid = (args) => _(args).every(isValid);

allValid(["string", 0, null, undefined]); // false
notAllValid(["string", 0, {}]); // true
