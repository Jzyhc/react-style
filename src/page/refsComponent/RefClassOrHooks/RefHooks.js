import React,{useState,forwardRef,useImperativeHandle} from 'react'

const RefHooks = (props,ref) => {
  const [state, setstate] = useState('我是hooksRef组件');
  const handleChange =(e)=>{
    setstate(e)
  }
  useImperativeHandle(ref,()=>({
    handleChange
  }))
  return (
    <div>
      {state}
    </div>
  )
}

export default forwardRef(RefHooks)
