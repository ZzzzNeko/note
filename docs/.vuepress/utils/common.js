function isObject(val) {
  return typeof val === "object" && val !== null;
}

function copy(target) {
  if (isObject(target)) {
    if (Array.isArray(target)) {
      return target.map(copy);
    } else {
      const result = {};
      for (const key in target) {
        result[key] = copy(target[key]);
      }
      return result;
    }
  } else {
    return target;
  }
}

/**
 * 排除数组中指定的元素或对象中指定的键
 * @param { any[] } keys 数组元素或对象键名
 * @param { any[] | object } source array or object
 */
function exclude(keys, source) {
  if (typeof source !== "object" || !source) return source;
  const ret = copy(source);
  if (Array.isArray(source)) {
    return ret.filter((item) => !keys.includes(item));
  } else {
    for (const key of keys) {
      if (ret[key]) ret[key] = undefined;
    }
    return ret;
  }
}

module.exports = {
  isObject,
  copy,
  exclude,
};
