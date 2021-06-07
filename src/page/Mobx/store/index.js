/*
 * @Author       : jincheng
 * @Date         : 2021-06-07 11:38:56
 * @LastEditTime : 2021-06-07 11:57:06
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/mobx/store/index.js
 */
import { action, observable } from 'mobx';

class Store {
    @observable
    count = 1;
    
    @action
    setCount = () => {
        this.count++;
    }
}
export const store = new Store();