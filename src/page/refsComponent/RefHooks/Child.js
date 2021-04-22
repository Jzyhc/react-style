import React,{useState,forwardRef,useImperativeHandle} from 'react'

const Child = (props,ref) => {
  const [state, setstate] = useState('我是子组件')

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

export default forwardRef(Child)
