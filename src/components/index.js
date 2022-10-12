/**
 *  @author 前端组
 *  @Date 2022-10-12 21:57
 *  @description
 *  @params
 *  @return
 * */

import {useState, useCallback} from "react"
import TodoForm from "./Form.js"
import TodoList from "./List.js"

function TodoApp() {
  const [todoList, setTodoList] = useState([])

  const addTodo = useCallback((todo) => {
    // setTodoList([...todoList, ...todo])
    setTodoList(todoList => [...todoList, todo])
  }, [])

  const toggleTodo = useCallback((id) => {
    setTodoList(todoList => (
      todoList.map(v => {
        /*if (v.id === id) {
          v.completed = true
        }*/
        v.id === id && (v.completed = !v.completed)
        return v
      })
    ))
  }, [])

  const removeTodo = useCallback((id) => {
    setTodoList(todoList => todoList.filter(v => v.id !== id))
  }, [])
  return (
    <div>
      <TodoForm
        onAddTodo={addTodo}
      />
      <TodoList
        todoList={todoList}
        onToggleTodo={toggleTodo}
        onRemoveTodo={removeTodo}
      />
    </div>
  )
}

export default TodoApp
