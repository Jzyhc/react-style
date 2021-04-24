/*
 * @Author       : jincheng
 * @Date         : 2021-04-23 11:08:48
 * @LastEditTime : 2021-04-23 15:21:16
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/refsComponent/RefHOC/HocIndex.js
 */
import React from 'react'


function HocIndex(WrappedComponent) {
  return class WrappingComponent extends React.Component {

    render() {
      console.log('this.props', this.props)
      const props ={...this.props,ref:this.props.refText}
      return (
        <div>
          <WrappedComponent {...props} />
        </div>
      )
    }
  }
}

export default HocIndex