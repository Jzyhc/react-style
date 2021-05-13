/*
 * @Author       : jincheng
 * @Date         : 2021-05-13 14:35:48
 * @LastEditTime : 2021-05-13 14:36:20
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/context/CtxHooks/Grandson.js
 */
import React,{useContext} from 'react'
import { ThemeContext } from './themeContent'

const Grandson = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
     Grandson--{theme.name}
    </div>
  )
}

export default Grandson
