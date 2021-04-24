import React,{forwardRef} from 'react'

const HookHoc = Component => {
  
  const HocIndex = ({hocRef,...props})=> <Component ref={hocRef} {...props} />
  
  return forwardRef((props,ref)=> <HocIndex {...props} hocRef={ref}/>)
}

export default HookHoc
