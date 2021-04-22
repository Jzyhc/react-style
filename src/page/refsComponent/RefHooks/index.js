/*
 * @Author       : jincheng
 * @Date         : 2021-04-21 11:47:11
 * @LastEditTime : 2021-04-22 21:07:29
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/refsComponent/RefHooks/index.js
 */
import React, { useRef } from 'react'
import { Button } from 'antd';

const RefHooks = () => {
  const childRef = useRef(null)
  const  changeInput = ()=>{
    console.log('changeInput',childRef.current.value)
  }

  return (
    <div>
      <div>RefHooks</div>
      <input ref={childRef} />
      <Button type="primary" onClick={changeInput}>
        Submit
      </Button>
    </div>
  )
}

export default RefHooks
