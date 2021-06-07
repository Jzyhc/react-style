/*
 * @Author       : jincheng
 * @Date         : 2021-05-17 10:26:28
 * @LastEditTime : 2021-05-17 15:23:51
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/performance/Memo/ChildMemo.js
 */
import React,{memo,useEffect} from 'react'

const ChildMemo = ({test,number,bar,arr}) => {
  console.log('ChildMemo')
  useEffect(() => {
    console.log('effect===')
  }, [arr,bar])
  return (
    <div>
      ChildMemo-{test} -- {number}
    </div>
  )
}

const areEqual = (pre,next)=>{
  if(pre.number === next.number){
    return true
  }
  return false

}

export default memo(ChildMemo,areEqual)
// export default memo(ChildMemo)
