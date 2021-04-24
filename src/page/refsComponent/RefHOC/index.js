/*
 * @Author       : jincheng
 * @Date         : 2021-04-21 11:47:11
 * @LastEditTime : 2021-04-23 16:28:50
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/refsComponent/RefHOC/index.js
 */

import React, { useRef } from 'react'
import HooksUser from './HooksUser';
import { Button } from 'antd'
const Index = () => {
  const hocRef = useRef(null);

  const changeInput=()=>{
    hocRef.current.changText('父组件修改子组件')
  }
  return (
    <div>
      我是hooks 组件
      <HooksUser ref={hocRef} name='user' />
      <div>
        <Button type="primary" onClick={changeInput}>
          Submit
        </Button>
      </div>
    </div>
  )
}

export default Index

