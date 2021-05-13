/*
 * @Author       : jincheng
 * @Date         : 2021-04-21 15:01:56
 * @LastEditTime : 2021-05-13 14:32:24
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/context/CtxHooks/index.js
 */
import React,{useState} from 'react'
import {ThemeProvider } from './themeContent'
import Child from './Child'
const CtxHooks = () => {
  const [state] = useState({name:'hooksContext'})
  return (
    <div>
      CtxHooks
      <ThemeProvider value={state}>
        <Child />
      </ThemeProvider> 
    </div>
  )
}

export default CtxHooks
