/*
 * @Author       : jincheng
 * @Date         : 2021-06-07 11:38:56
 * @LastEditTime : 2021-06-07 19:21:54
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/mobx/store/index.js
 */
import { action, observable,computed } from 'mobx';

class Todo {
    @observable title = "";
    
    @action
    setCount = () => {
        this.title++;
    }

    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
}
// export const store = new Store();