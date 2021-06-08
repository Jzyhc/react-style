/*
 * @Author       : jincheng
 * @Date         : 2021-06-08 11:03:22
 * @LastEditTime : 2021-06-08 11:03:22
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/store/oneStore.js
 */
import { observable} from "mobx";
class OneStore {
  @observable oneNum = 3333;
}
export default OneStore;