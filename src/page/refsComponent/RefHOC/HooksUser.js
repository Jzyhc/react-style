import React,{useState,forwardRef,useImperativeHandle} from 'react'
import HookHoc from './HookHoc'

const HooksUser = (props,ref) => {
  const [state, setstate] = useState('我是hooks 子组件');

  const changText = (e)=>{
    setstate(e)
  }

  useImperativeHandle(ref, () => ({
    changText
  }));

  return (
    <div>
      {state}
    </div>
  )
}

export default HookHoc(forwardRef(HooksUser))
