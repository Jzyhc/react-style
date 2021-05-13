/*
 * @Author       : jincheng
 * @Date         : 2021-05-13 14:30:19
 * @LastEditTime : 2021-05-13 14:37:19
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/context/CtxHooks/Child.js
 */
import React,{useContext} from 'react'
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
