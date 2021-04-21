/*
 * @Author       : jincheng
 * @Date         : 2021-04-12 10:41:36
 * @LastEditTime : 2021-04-12 10:48:45
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/route/path.js
 */

const routePaths = [
  {
    path: '/app/refs',
    component: Async(() => import('@page/accident/secKefu/Create')),
    title: 'ref'
  }
];

export default routePaths;