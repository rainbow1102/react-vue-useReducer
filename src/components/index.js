/**
 *  @author 前端组
 *  @Date 2022-10-12 21:57
 *  @description
 *  @params
 *  @return
 * */

import {todoReducer} from "../store/reducer/courseTabList"
import {initialTodoList} from "../store/state/courseTabList"
import {useReducer} from "react"

import TodoForm from "./Form.js"
import TodoList from "./List.js"
import actionTypes from "../store/actionTypes/courseTabList"

function TodoApp() {
  const [todoList, todoDispatch] = useReducer(todoReducer, initialTodoList)
  const {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} = actionTypes

  return (
    <div>
      <TodoForm
        onAddTodo={
          (todo) => todoDispatch({
            type: ADD_TODO,
            payload: todo
          })
        }
      />
      <TodoList
        todoList={todoList}
        onToggleTodo={
          (id) => todoDispatch({
            type: TOGGLE_TODO,
            payload: id
          })
        }
        onRemoveTodo={
          (id) => todoDispatch({
            type: REMOVE_TODO,
            payload: id
          })
        }
      />
    </div>
  )
}

export default TodoApp
