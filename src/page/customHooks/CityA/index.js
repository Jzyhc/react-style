/*
 * @Author       : jincheng
 * @Date         : 2021-04-25 11:48:00
 * @LastEditTime : 2021-05-13 17:24:52
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/customHooks/CityA/index.js
 */
import React,{useEffect} from 'react'
import useWindowSize  from '../utils/useWindowSize'
import useConfig from '../utils/useConfig'
const CityA = () => {
  const a = useWindowSize('12')
  const b = useConfig('name')
  console.log('测试环境',b)
  useEffect(() => {
    console.log('测试环境--=---=')
  }, [])
  console.log('aa',a)
  return (
    <div>
      city
    </div>
  )
}

export default CityA
