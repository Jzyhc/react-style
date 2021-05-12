/*
 * @Author       : jincheng
 * @Date         : 2021-05-12 15:56:28
 * @LastEditTime : 2021-05-12 18:06:42
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/context/CtxClass/Child.js
 */
import React, { Component } from 'react'
import { ThemeConsumer,ThemeContext } from "./themeContext";
import Grandson from './Grandson'
import WatchFn from './WatchFn'
import Consumer from './Consumer'
export default class Child extends Component {
  render() {
    console.log("ContextTypePage", this.context)
    return (
      <div>
        Child====={this.context.name}
        <Grandson />
        <Consumer />
        <ThemeConsumer>
          {value => /* 基于 context 值进行渲染*/ <WatchFn {...value} />}
        </ThemeConsumer>
      </div>
    )
  }
}

Child.contextType = ThemeContext

