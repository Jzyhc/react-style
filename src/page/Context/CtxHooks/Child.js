/*
 * @Author       : jincheng
 * @Date         : 2021-05-13 14:30:19
 * @LastEditTime : 2021-05-13 17:11:18
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/context/CtxHooks/Child.js
 */
import React from 'react'
// import { ThemeContext } from './themeContent'
import Grandson from './Grandson'

const Child = () => {
  // const theme = useContext(ThemeContext);
  return (
    <div>
      child--
      <Grandson />
    </div>
  )
}

export default Child
