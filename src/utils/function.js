import COMMON from '../constants/common.js';

function isIncludesDot(target) {
  if (target.constructor === String) {
    return target.includes(COMMON.dot);
  }
  return false;
}

function isPositiveInteger(target) {
  const numericTarget = Number(target);

  return (
    !isIncludesDot(target) &&
    numericTarget > 0 &&
    Number.isInteger(numericTarget) &&
    numericTarget <= Number.MAX_SAFE_INTEGER
  );
}

export default isPositiveInteger;