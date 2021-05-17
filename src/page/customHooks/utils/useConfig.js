/*
 * @Author       : jincheng
 * @Date         : 2021-05-13 17:18:43
 * @LastEditTime : 2021-05-13 17:24:23
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/customHooks/utils/useConfig.js
 */
import {useState,useEffect} from 'react'

const useConfig = (parme) => {
  const [state, setstate] = useState({name:'text'})
  useEffect(() => {
    setstate(parme)
  }, [parme])
  
  return state
}

export default useConfig
