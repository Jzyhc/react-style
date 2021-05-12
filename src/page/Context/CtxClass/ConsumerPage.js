/*
 * @Author       : jincheng
 * @Date         : 2021-05-12 16:18:04
 * @LastEditTime : 2021-05-12 16:34:35
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/context/CtxClass/ConsumerPage.js
 */
import React, { Component } from "react";
import { ThemeConsumer } from "./themeContext";
export default class ConsumerPage extends
  Component {
  render() {
    return (
      <div className="border">
        <h3>ConsumerPage</h3> 
          <ThemeConsumer>
          {ctx => <HandleTabBar {...ctx} />}</ThemeConsumer>
      </div>
    );
  }
}

function HandleTabBar({ themeColor }) {
  console.log("themeColor", themeColor); //sy￾log
  return <div className={themeColor}>⽂本
</div>;
}