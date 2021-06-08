/*
 * @Author       : jincheng
 * @Date         : 2021-06-07 11:31:15
 * @LastEditTime : 2021-06-08 15:52:09
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/mobx/index.js
 */
import React, { Component } from 'react'
// import { store } from './store/index' 
// import {observer, inject} from 'mobx-react';
import { observer, inject } from "mobx-react";


@inject("homeStore")
@observer
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('12112',this.props)
  }
  lessNum = () => {
    this.props.homeStore.lessNum();
  }

  render() {
    console.log('props', this.props)
    return (
      <div>
        +  <h1>首页数据源的number为:{this.props.homeStore.homeNum}</h1>
        <button onClick={this.lessNum}>
          跳转到第一个页面
        </button>
      </div>
    );
  }
}
export default Home


