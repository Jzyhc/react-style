/*
 * @Author       : jincheng
 * @Date         : 2021-04-09 18:02:59
 * @LastEditTime : 2021-04-21 11:34:45
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import MyRouter from './router';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <HashRouter>
    <MyRouter />
  </HashRouter>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
