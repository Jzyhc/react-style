/*
 * @Author       : jincheng
 * @Date         : 2021-05-12 16:17:15
 * @LastEditTime : 2021-05-12 17:07:38
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/context/CtxClass/ContextTypePage.js
 */
import React, { Component } from "react";
import { ThemeContext } from "./themeContext";
export default class ContextTypePage extends
  Component {
  // static contextType = ThemeContext;
  render() {
    console.log("ContextTypePage",
      this.context); //sy-log
    const { themeColor } = this.context;
    return (
      <div className="border">
        <h3 className={themeColor}>ContextTypePage</h3>
      </div>
    );
  }
}
ContextTypePage.contextType = MyContext;