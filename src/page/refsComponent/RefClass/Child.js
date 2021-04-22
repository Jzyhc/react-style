/*
 * @Author       : jincheng
 * @Date         : 2021-04-22 11:10:18
 * @LastEditTime : 2021-04-22 11:24:08
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/refsComponent/RefClass/Child.js
 */

import React, { Component } from 'react'

export default class Child extends Component {
  constructor(props){
    super(props)
    this.state={
      name:'我是子组件'
    }
  }

  updateState(msg){
    this.setState({
      name:msg
    })
  }
  render() {
    return (
      <div>
        {this.state.name}
      </div>
    )
  }
}
