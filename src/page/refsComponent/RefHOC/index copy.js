/*
 * @Author       : jincheng
 * @Date         : 2021-04-21 11:47:11
 * @LastEditTime : 2021-04-23 16:28:50
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/refsComponent/RefHOC/index.js
 */

import React, { Component, createRef } from 'react'
import { Button } from 'antd'
import HocIndex from './HocIndex'
import User from './User'

const HocUser = HocIndex(User);
export default class RefHOC extends Component {
  constructor(props) {
    super(props)
    this.classHocRef = createRef(null)
    this.inputRef = createRef(null)
    this.handClick = this.handClick.bind(this)
  }

  handClick(){
    this.classHocRef.current.updatFn(this.inputRef.current.value)
  }

  render() {
    return (
      <div>
        <HocUser name={'name'} refText={this.classHocRef} />
        <input ref={this.inputRef} />
        <Button type="primary" onClick={this.handClick}>
          Submit
        </Button>
      </div>
    )
  }
}

