/*
 * @Author       : jincheng
 * @Date         : 2021-05-12 17:59:26
 * @LastEditTime : 2021-05-12 21:07:44
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/context/CtxClass/Consumer.js
 */
import React from 'react'
import { ThemeConsumer } from './themeContext'

// 函数组件获取context中的数据，使用Consumer 进行包裹; Consumer 会返一个函数组件
export default function Consumer(props) {
  return (
    <div>
      <ThemeConsumer>
        { ctx=>{
          console.log(ctx)
          return <div>Consumer--{ctx.name}</div>
        }}
      </ThemeConsumer>
    </div>
  )
}
