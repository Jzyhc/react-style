/*
 * @Author       : jincheng
 * @Date         : 2021-06-07 19:02:49
 * @LastEditTime : 2021-06-08 16:43:48
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/store/homeStore.js
 */
import { observable, action, runInAction, makeObservable } from "mobx";
class HomeStore {

  constructor() {
    makeObservable(this);
  }

  @observable homeNum = 0;

  @action
  lessNum = () => {
    runInAction(() => {
      this.homeNum -= 1;
      console.log('lessNum1212', this.homeNum)
    })

  }
}
export default new HomeStore();