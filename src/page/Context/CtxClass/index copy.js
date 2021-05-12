/*
 * @Author       : jincheng
 * @Date         : 2021-04-21 15:01:56
 * @LastEditTime : 2021-05-12 16:36:40
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/context/CtxClass/index.js
 */
import React, { Component } from "react";
import { ThemeProvider } from "./themeContext";
import ContextTypePage from"./ContextTypePage";
import ConsumerPage from "./ConsumerPage";
class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        themeColor: "red"
      }
    };
  }
  
  changeColor = () => {
    const { themeColor } = this.state.theme;
    this.setState({
      theme: {
        themeColor: themeColor === "red" ?
          "green" : "red"
      }
    });
  };
  render() {
    const { theme } = this.state;
    return (
      <div className="App">
        {/* 组件跨层级通信 */} 
        <button onClick={this.changeColor}>change color</button>
        {/* 如果把这⾥的MyProvider注释掉，ContextTypePage和ConsumerPage⾥将取不到theme值，⽽取默认值pink */} 
        <ThemeProvider value={theme}> 
          <ContextTypePage />
        </ThemeProvider>
      </div>
    );
  }
}
export default ContextPage;