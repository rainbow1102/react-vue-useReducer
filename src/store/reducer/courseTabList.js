/**
 *  @author 前端组
 *  @Date 2022-10-09 22:43
 *  @description
 *  @params
 *  @return
 * */

import actionTypes from "../actionTypes/courseTabList"

function todoReducer(todoList, action) {
  // console.log('todoList, paylaod:', todoList, action)
  const {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} = actionTypes
  const {type, payload} = action

  switch (type) {
    case ADD_TODO:
      return addTodo(todoList, payload)
    case TOGGLE_TODO:
      return toggleTodo(todoList, payload)
    case REMOVE_TODO:
      return removeTodo(todoList, payload)
    default:
      break
  }
}

function addTodo(todoList, paylaod) {

  return [...todoList, paylaod]
}

function toggleTodo(todoList, paylaod) {
  return todoList.map(v => {
    // v.id === paylaod && (v.completed = !v.completed)
    if (v.id === paylaod) {
      v.completed = true
    }
    return v
  })
}

function removeTodo(todoList, paylaod) {
  return todoList.filter(v => v.id !== paylaod)
}

export {
  todoReducer
}
