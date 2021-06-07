/*
 * @Author       : jincheng
 * @Date         : 2021-06-07 11:38:56
 * @LastEditTime : 2021-06-07 11:38:57
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/mobx/store/index.js
 */
import { observable } from "mobx";

class Todo {
    id = Math.random();
    @observable title = "";
    @observable finished = false;
}
