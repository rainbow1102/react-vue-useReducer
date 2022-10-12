/**
 *  @author 前端组
 *  @Date 2022-10-12 21:59
 *  @description
 *  @params
 *  @return
 * */

import {useState} from "react"

function TodoForm({onAddTodo}) {
  const [todoText, setTodoText] = useState("")
  const addTodo = () => {
    onAddTodo({
      id: new Date().getTime(),
      content: todoText,
      completed: false
    })
    setTodoText('')
  }
  return (
    <div>
      <input
        type="text"
        placeholder="测试bug"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button
        onClick={addTodo}
      >ADD
      </button>
    </div>
  )
}

export default TodoForm
