/*
 * @Author       : jincheng
 * @Date         : 2021-06-07 11:31:15
 * @LastEditTime : 2021-06-07 19:22:40
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/mobx/index.js
 */
import React from 'react'
// import { store } from './store/index' 
import {observer, inject} from 'mobx-react';

// console.log('store',store)
@observer
@inject('Todo')
const index = () => {
  console.log('Todo',Todo)
  return (
    <div>
      
    </div>
  )
}

export default index
