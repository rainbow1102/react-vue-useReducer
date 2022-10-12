/**
 *  @author 前端组
 *  @Date 2022-10-09 22:43
 *  @description
 *  @params
 *  @return
 * */

import initialState from "./../state/courseTabList"

export default function (state = initialState.curField, action) {
  if (action.type === "CHANGE_COURSE_FIELD") {
    return {
      // ...initialState,
      ...state,
      curField: action.field
    }
  } else {
    // return initialState
    return state
  }
}
