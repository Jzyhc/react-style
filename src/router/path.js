/*
 * @Author       : jincheng
 * @Date         : 2021-04-12 10:41:36
 * @LastEditTime : 2021-06-07 11:43:54
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/router/path.js
 */
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';

import RefClass from '../page/refsComponent/RefClass/index';
import RefClassOrHooks from '../page/refsComponent/RefClassOrHooks/index';
import RefHooks from '../page/refsComponent/RefHooks/index';
import RefHOC from '../page/refsComponent/RefHOC/index';
import RefCallBack from '../page/refsComponent/RefCallBack/index';

import CtxClass from '../page/context/CtxClass/index';
import CtxHooks from '../page/context/CtxHooks/index';

import PerMemo from '../page/performance/Memo/index';
import PerUseCallBack from '../page/performance/UseCallBack/index';
import PerUseMemo from '../page/performance/UseMemo/index';


import CityA from '../page/customHooks/CityA/index';
import CityB from '../page/customHooks/CityB/index';

import MobxFn from '../page/Mobx/index'


const routePaths = [
  {
    title: 'ref',
    icon: <UserOutlined />,
    list: [
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
    title: 'Context',
    icon: <LaptopOutlined />,
    list: [
      {
        path: '/app/context/ctxClass',
        component: CtxClass,
        title: 'ctx-class'
      },
      {
        path: '/app/context/ctxHooks',
        component: CtxHooks,
        title: 'ctx-hooks'
      }
    ]
  },
  {
    title: '性能优化',
    icon: <LaptopOutlined />,
    list: [
      {
        path: '/app/performance/memo',
        component: PerMemo,
        title: 'memo'
      },
      {
        path: '/app/performance/useMemo',
        component: PerUseCallBack,
        title: 'useMemo'
      },
      {
        path: '/app/performance/useCallBack',
        component: PerUseMemo,
        title: 'useCallBack'
      }
    ]
  },
  {
    title: '自定义Hooks',
    icon: <LaptopOutlined />,
    list: [
      {
        path: '/app/custom/hooks/A',
        component: CityA,
        title: 'CityA'
      },
      {
        path: '/app/custom/hooks/B',
        component: CityB,
        title: 'CityB'
      }
    ]
  },
  {
    title: 'Mobx',
    icon: <LaptopOutlined />,
    list: [
      {
        path: '/app/mobx',
        component: MobxFn,
        title: 'Mobx'
      }
    ]
  },
];

export default routePaths;