/*
 * @Author       : jincheng
 * @Date         : 2021-06-08 11:03:33
 * @LastEditTime : 2021-06-08 16:39:28
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/store/index.js
 */
import homeStore from "./homeStore";
import OneStore from "./oneStore";
let oneStore = new OneStore();

const stores = {
  oneStore,
  homeStore
};
/// 默认导出接口
export default stores;
