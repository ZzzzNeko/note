const fs = require("fs");
const { getVuepressPath } = require("./utils/convert");
const { copy, isObject } = require("./utils/common");

/**
 * 合并 origin 和 target 配置
 * target 优先级高于 origin
 * 合并数组时，采用 unshift 方式(确保通用配置中 nav 顺序)
 * @param { object } origin
 * @param { object } target
 */
function mergeConfig(origin, target) {
  const result = copy(origin);
  for (const key in target) {
    const originVal = origin && origin[key];
    const targetVal = target[key];
    if (isObject(originVal)) {
      if (Array.isArray(originVal)) {
        result[key] = [...targetVal, ...originVal];
      } else {
        result[key] = mergeConfig(originVal, targetVal);
      }
    } else {
      result[key] = copy(targetVal);
    }
  }
  return result;
}

const target = process.env.target.toLowerCase().trim();
const targetModule = fs
  .readdirSync(getVuepressPath("configs"))
  .find((fileName) => target.toLocaleLowerCase() + ".js" == fileName);
const targetConfig = targetModule ? require(`./configs/${targetModule}`) : {};
const commonConfig = require("./configs/common")(target);

module.exports = mergeConfig(commonConfig, targetConfig);
