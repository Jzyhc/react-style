/*
 * @Author       : jincheng
 * @Date         : 2021-04-21 11:47:11
 * @LastEditTime : 2021-04-22 21:07:29
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/refsComponent/RefHooks/index.js
 */
import React, { useRef } from 'react'
import { Button } from 'antd';
import Child from './Child'

const RefHooks = () => {
  const inputRef = useRef(null)
  const childRef = useRef(null)

  const  changeInput = ()=>{
    console.log('changeInput',inputRef.current.value)
    childRef.current.changText('我是父组件修改的子组件')
  }

  return (
    <div>
      <div>RefHooks</div>
      <input ref={inputRef} />
      <Child ref={childRef}/>
      <Button type="primary" onClick={changeInput}>
        Submit
      </Button>
    </div>
  )
}

export default RefHooks
