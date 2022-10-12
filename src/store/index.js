/**
 *  @author 前端组
 *  @Date 2022-10-09 22:37
 *  @description
 *  @params
 *  @return  reducer action state
 * */
import {createStore, combineReducers} from "redux"
// import ReduxThunk from "react-thunk"
import courseTabListReducer from "./reducer/courseTabList"
import courseTabListState from "./state/courseTabList"

const allReducers = combineReducers({
  courseTabList: courseTabListReducer
})

const store = createStore(allReducers, {
  courseTabList: courseTabListState
})
// }, applyMiddleware(ReduxThunk))

export default store
