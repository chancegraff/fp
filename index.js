module.exports.isTrue = function isTrue(value) {
  return !!value;
};

module.exports.isFalse = function isFalse(value) {
  return !value;
};

module.exports.isResultFalse = function isResultFalse(fn) {
  return function (...values) {
    return module.exports.isFalse(fn(...values));
  };
};

module.exports.isEveryResultTrue = function isEveryResultTrue(...fns) {
  return function (...values) {
    return fns.every(fn => module.exports.isTrue(fn(...values)));
  };
};

module.exports.isAnyResultTrue = function isAnyResultTrue(...fns) {
  return function (...values) {
    return fns.some(fn => module.exports.isTrue(fn(...values)));
  };
};

module.exports.objectValues = function objectValues(obj) {
  return Object.values(obj);
};

module.exports.startsWith = function startsWith(match) {
  return function (value) {
    return value.startsWith(match);
  };
};

module.exports.endsWith = function endsWith(match) {
  return function (value) {
    return value.endsWith(match);
  };
};

module.exports.equivalentTo = function equivalentTo(match) {
  return function (value) {
    return value === match;
  };
};

module.exports.argumentOne = function argumentOne(fn) {
  return function (param) {
    return fn(param);
  };
};

module.exports.argumentTwo = function argumentTwo(fn) {
  return function (_one, param) {
    return fn(param);
  };
};

module.exports.keyOf = function keyOf(index, fn) {
  return function (value) {
    if (fn === undefined) {
      return value[index];
    }

    return fn(value[index]);
  };
};

module.exports.toUtfString = function toUtfString(value) {
  return value.toString('utf8');
};
