const path = require("path");

/**
 * 获取基于当前项目路径下的路径
 * @param  {...any} args 子路径
 */
const getProjectPath = (...args) => path.resolve(__dirname, '../../../', ...args)

/**
 * 获取基于当前包目录下的路径
 * @param  {...string} args 子路径
 */
const getVuepressPath = (...args) => path.resolve(__dirname, "../", ...args);

/**
 * 获取基于当前进程目录下的路径
 * @param  {...string} args 子路径
 */
const getProcessPath = (...args) => path.resolve(process.cwd(), ...args);

module.exports = {
  getProjectPath,
  getVuepressPath,
  getProcessPath,
};
