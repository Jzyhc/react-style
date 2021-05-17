/*
 * @Author       : jincheng
 * @Date         : 2021-05-13 17:02:41
 * @LastEditTime : 2021-05-13 17:16:50
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/customHooks/utils/useWindowSize.js
 */
import { useEffect, useState } from 'react';
export default function useWindowSize(el) {
    console.log('el',el)
   const [windowSize, setWindowSize] = useState({
       width: undefined,
       height: undefined,
   });
   useEffect(
       () => {

           function handleResize() {
               setWindowSize({
                   width: window.innerWidth,
                   height: window.innerHeight,
               });
           }

           window.addEventListener('resize', handleResize);
           handleResize();
           return () => window.removeEventListener('resize', handleResize);
       },
       [el],
   );
   return windowSize;
}
