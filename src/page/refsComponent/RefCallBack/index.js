/*
 * @Author       : jincheng
 * @Date         : 2021-04-22 14:32:29
 * @LastEditTime : 2021-04-23 10:54:18
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/refsComponent/RefCallBack/index.js
 */
// import React, { Component } from 'react'
// import { Button } from 'antd'
// export default class index extends Component {
//   constructor(props) {
//     super(props);
//     this.textInput = null;

//     this.setTextInputRef = element => {
//       this.textInput = element;
//     };
//     this.focusTextInput = () => {
//       if (this.textInput) this.textInput.focus();
//       console.log('this.textInput',this.textInput.value)
//     };
//   }
//   componentDidMount() {
//     this.focusTextInput();
//   }

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           ref={this.setTextInputRef}
//         />
//         <Button type="primary" onClick={this.focusTextInput}>
//           Submit
//         </Button>
//       </div>
//     );
//   }
// }

import { Button } from 'antd';
import React, { useEffect } from 'react';

function MyInput(props) {
  return (
    <input type="text" ref={props.inputRef} />
  )
}

const HooksFnRef = () => {
  let ref = null;
  useEffect(() => {
    ref.focus();
    console.log('ref', ref)
  }, [ref]);
  const getInputVlaue = () => {
    console.log(ref.value)
  }
  return (
    <div>
      <MyInput inputRef={ele => ref = ele} />
      <Button type="primary" onClick={getInputVlaue}>
        Submit
      </Button>
    </div>
  )
}

export default HooksFnRef

