/*
 * @Author       : jincheng
 * @Date         : 2021-05-12 16:00:45
 * @LastEditTime : 2021-05-12 18:13:07
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/context/CtxClass/grandson.js
 */

import React, { Component } from 'react'
import { ThemeContext } from "./themeContext";

export default class Grandson extends Component {
  // 不能使用 const
  // 使用 static 是一个实验性语法 ( public class fields 语法) 进行初始化static
  static contextType = ThemeContext;
  // 挂在当前类名上面，并不会实现共享

  render() {
    console.log("ContextTypePage",ThemeContext, this.context)
    return (
      <div>
        {this.context.name}
      </div>
    )
  }
}

// 第二种写法
// Grandson.contextType = ThemeContext
// contextType 是挂载到类上面 无发挂载到函数上面
// 并且只能订阅一个context ，并且是类组件

// 函数组件获取context中的数据，使用Consumer 进行包裹; Consumer 会返一个函数组件