/*
 * @Author       : jincheng
 * @Date         : 2021-05-13 14:26:35
 * @LastEditTime : 2021-05-13 14:28:03
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/context/CtxHooks/themeContent.js
 */
import React from "react";
export const ThemeContext = React.createContext({name: "pink"});
export const ThemeProvider =ThemeContext.Provider;
