/*
 * @Author       : jincheng
 * @Date         : 2021-04-21 11:47:11
 * @LastEditTime : 2021-04-21 11:47:47
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/refsComponent/RefClassOrHooks/index.js
 */
import React, { Component,createRef } from 'react'
import {Button} from 'antd'
import RefHooks from './RefHooks'
export default class RefClassOrHooks extends Component {
  constructor(props){
    super(props)
    this.hooksRef = createRef()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.hooksRef.current.handleChange('我是class组件，使用hooks')
  }

  render() {
    return (
      <div>
        <RefHooks ref={this.hooksRef} />
        <Button type="primary" onClick={this.handleClick}>
          Submit
        </Button>
      </div>
    )
  }
}

