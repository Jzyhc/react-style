/*
 * @Author       : jincheng
 * @Date         : 2021-05-17 16:35:12
 * @LastEditTime : 2021-05-17 17:00:40
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/page/customHooks/utils/useAreEqual.js
 */
function shallowEqual(objA: mixed, objB: mixed): boolean {
  if (is(objA, objB)) { // is可以 理解成  objA === objB 那么返回相等
    return true;
  }

  if (
    typeof objA !== 'object' ||
    objA === null ||
    typeof objB !== 'object' ||
    objB === null
  ) {
    return false;  
  } // 如果新老props有一个不为对象，或者不存在，那么直接返回false

  const keysA = Object.keys(objA); // 老props / 老state key组成的数组
  const keysB = Object.keys(objB); // 新props / 新state key组成的数组

  if (keysA.length !== keysB.length) { // 说明props增加或者减少，那么直接返回不想等
    return false;
  }

  for (let i = 0; i < keysA.length; i++) { // 遍历老的props ,发现新的props没有，或者新老props不同等,那么返回不更新组件。
    if (
      !hasOwnProperty.call(objB, keysA[i]) ||
      !is(objA[keysA[i]], objB[keysA[i]])
    ) {
      return false;
    }
  }

  return true; //默认返回相等
}
