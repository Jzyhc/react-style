/*
 * @Author       : jincheng
 * @Date         : 2021-04-21 11:47:11
 * @LastEditTime : 2021-04-22 11:26:48
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/refsComponent/RefClass/index.js
 */

import React, { Component,createRef } from 'react'
import Child from './Child'
import { Button } from 'antd';
export default class RefClass extends Component {
  constructor(props){
    super(props)
    this.myRef = createRef()
    this.changeInput = this.changeInput.bind(this);
    this.childRef = createRef()
  }

  changeInput(){
    console.log(this.childRef.current.state.name)
    // 调用子组件的方法
    this.childRef.current.updateState(this.myRef.current.value)
  }
  render() {
    return (
      <div >
        <div>RefClass</div>
        <input ref={this.myRef} />
        <Child ref={this.childRef} />
        <Button type="primary" onClick={this.changeInput}>
          Submit
        </Button>
      </div>
    )
  }
}

