const isObject = (val: { [key: string | number | symbol]: any }) =>
  val && typeof val === "object";

function deepFreeze(obj: { [key: string | number | symbol]: any }) {
  if (isObject(obj) && !Object.isFrozen(obj)) {
    Object.keys(obj).forEach((name) => deepFreeze(obj[name]));
    Object.freeze(obj);
  }
  return obj;
}
