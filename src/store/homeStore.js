/*
 * @Author       : jincheng
 * @Date         : 2021-06-07 19:02:49
 * @LastEditTime : 2021-06-08 15:36:15
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/store/homeStore.js
 */
import { observable,action } from "mobx";
class HomeStore {
  @observable homeNum = 0;
  
  @action lessNum = ()=> {
    this.homeNum -= 1;
    console.log('lessNum1212', this.homeNum)
  }
}
export default HomeStore;