/*
 * @Author       : jincheng
 * @Date         : 2021-05-12 16:11:53
 * @LastEditTime : 2021-05-12 18:09:43
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/context/CtxClass/themeContext.js
 */

import React from "react";
export const ThemeContext = React.createContext({name: "pink"});
export const ThemeProvider =ThemeContext.Provider;
// 为函数组件或者context 中的数据 
export const ThemeConsumer =ThemeContext.Consumer;