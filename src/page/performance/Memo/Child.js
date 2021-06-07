/*
 * @Author       : jincheng
 * @Date         : 2021-05-17 10:26:15
 * @LastEditTime : 2021-05-17 15:23:05
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/performance/Memo/Child.js
 */
import React,{memo} from 'react'
import { Button } from 'antd'
const Child = ({test,handClick}) => {
  console.log('Child')
  return (
    <div>
      Child=={test}
      <div>
        <Button onClick={handClick}>handClick</Button>
      </div>
    </div>
  )
}

export default memo(Child)
