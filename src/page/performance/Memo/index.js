/*
 * @Author       : jincheng
 * @Date         : 2021-04-25 11:27:32
 * @LastEditTime : 2021-06-07 11:00:23
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/performance/Memo/index.js
 */

import React,{useState} from 'react'
import { Button } from 'antd'
import Child from './Child'
import ChildMemo from './ChildMemo'
const Memo = () => {
  const [state, setState] = useState('memo')
  const [number, setNumber] = useState(0)
  const [irrelevant, setIrrelevant] = useState('无关')
  // const [arr] = useState([0,1,2])
  // const baz = [1, 2, 3]
  const baz = React.useMemo(() => [1, 2, 3], [])
  
  const handClick = React.useCallback(() => {
    setState((state === 'memo') ? '修改memo' : 'memo')
  }, [state])

  const handNumber = ()=>{
    setNumber(number === 0 ? 1 : 0)
  }
  const handIrrelevant = ()=>{
    setIrrelevant(irrelevant === '无关' ? '修改无关' : '无关')
  }

  // const bar = () => {}
  const bar = React.useCallback(() => {}, [])
  
  return (
    <div>
      Memo--{state}---{irrelevant}
      <Child test={state} number={number} handClick={handClick}/>
      <ChildMemo test={state} number={number} arr={baz} bar={bar}/>
      <div>
        <Button onClick={handClick}>切换</Button>
        <Button onClick={handNumber}>切换memo</Button>
        <Button onClick={handIrrelevant}>修改无关值</Button>
      </div>
    </div>
  )
}

export default Memo
