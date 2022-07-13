import "./TodoList.css";
function TodoList(props) {
  return props.todoList.map((el) => (
    <div
      className="list--el"
      key={el.id}
      onClick={(e) => props.removingTask(el.id)}
    >
      <li className="list">{el.task}</li>
    </div>
  ));
}

export default TodoList;
