/**
 *  @author 前端组
 *  @Date 2022-10-12 21:59
 *  @description
 *  @params
 *  @return
 * */
function TodoList(
  {
    todoList,
    onToggleTodo,
    onRemoveTodo
  }) {
  return (
    <ul>
      {
        todoList && todoList.map(v => (
          <li key={v.id}>
            <input
              type="checkbox"
              checked={v.completed}
              onChange={() => onToggleTodo(v.id)}
            />
            <span
              style={{textDecoration: v.completed ? 'line-through' : 'none'}}
            >{v.content}</span>
            <button onClick={() => onRemoveTodo(v.id)}>REMOVE</button>
          </li>
        ))
      }
    </ul>
  )
}

export default TodoList
