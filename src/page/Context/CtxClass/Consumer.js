/*
 * @Author       : jincheng
 * @Date         : 2021-05-12 17:59:26
 * @LastEditTime : 2021-05-12 18:06:50
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/context/CtxClass/Consumer.js
 */
import React from 'react'
import { ThemeConsumer } from './themeContext'
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
