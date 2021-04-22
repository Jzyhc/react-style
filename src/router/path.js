/*
 * @Author       : jincheng
 * @Date         : 2021-04-12 10:41:36
 * @LastEditTime : 2021-04-22 14:33:17
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/router/path.js
 */
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';

import RefClass from '../page/refsComponent/RefClass/index';
import RefClassOrHooks from '../page/refsComponent/RefClassOrHooks/index';
import RefHooks from '../page/refsComponent/RefHooks/index';
import RefHOC from '../page/refsComponent/RefHOC/index';
import RefCallBack from '../page/refsComponent/RefCallBack/index';

import CtxClass from '../page/Context/CtxClass/index';
import CtxHooks from '../page/Context/CtxHooks/index';

const routePaths = [
  {
    title:'ref',
    icon:<UserOutlined />,
    list:[
      {
        path: '/app/refs/class',
        component: RefClass,
        title: 'ref-class'
      },
      {
        path: '/app/refs/callback',
        component: RefCallBack,
        title: 'ref-callBack'
      },
      {
        path: '/app/refs/hooks',
        component: RefHooks,
        title: 'ref-hooks'
      },
      {
        path: '/app/refs/classOrHooks',
        component: RefClassOrHooks,
        title: 'ref-classOrHooks'
      },
      {
        path: '/app/refs/HOC',
        component: RefHOC,
        title: 'ref-HOC'
      }
    ]
  },
  {
    title:'Context',
    icon:<LaptopOutlined />,
    list:[
      {
        path: '/app/context/ctxClass',
        component: CtxClass,
        title: 'ref-class'
      },
      {
        path: '/app/context/ctxHooks',
        component: CtxHooks,
        title: 'ref-hooks'
      }
    ]
  }
];

export default routePaths;