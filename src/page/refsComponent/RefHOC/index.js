/*
 * @Author       : jincheng
 * @Date         : 2021-04-21 11:47:11
 * @LastEditTime : 2021-04-22 21:06:14
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/refsComponent/RefHOC/index.js
 */
import React, { useRef } from 'react'
import { Button } from 'antd';

const RefHOC = () => {
  const childRef = useRef(null)
  const  changeInput = ()=>{
    console.log('changeInput',childRef)
  }

  return (
    <div>
      <div>RefHOC</div>
      <input ref={childRef} />
      <Button type="primary" onClick={changeInput}>
        Submit
      </Button>
    </div>
  )
}

export default RefHOC
