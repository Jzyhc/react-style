/*
 * @Author       : jincheng
 * @Date         : 2021-04-23 11:19:14
 * @LastEditTime : 2021-04-23 15:20:58
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/refsComponent/RefHOC/user.js
 */
import React, { Component } from 'react'

export default class User extends Component {
  constructor(props){
    super(props)
    this.state={
      name:'我是Hoc组件'
    }
  }

  updatFn(e){
    this.setState({
      name:e
    })
  }

  render() {
    return (
      <div>{this.state.name}</div>
    )
  }
}
