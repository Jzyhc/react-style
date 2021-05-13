/*
 * @Author       : jincheng
 * @Date         : 2021-04-21 15:01:56
 * @LastEditTime : 2021-05-13 11:25:41
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/context/CtxClass/index.js
 */

import React, { Component } from 'react'
import { ThemeProvider } from './themeContext'
import { Button } from 'antd'
import Child from './Child'

// 创建 conext  createContext
// 传递 context Provider
// 消费 Consumer (函数)  / class.contextType/ static contextType = ThemeContext;

export default class CtxClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: {
        name: '测试',
        ctx: '测试内容'
      }
    }
    this.handName = this.handName.bind(this)
  }

  handName(){
    const { name } = this.state.theme;
    this.setState({
      theme:{
        name:name === '测试' ? '改变测试' : '测试'
      }
    })
  }
  
  

  render() {
    const { theme } = this.state;
    return (
      <div>
        <ThemeProvider value={theme}>
          <Child />
        </ThemeProvider>
        <Child />

        <Button onClick={this.handName}>操作</Button>
      </div>
    )
  }
}
