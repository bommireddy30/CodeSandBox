import InputFields from "./InputFields";
import TodoList from "./TodoList";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [curTask, setCurTask] = useState("");

  const valueChangeHandler = (value) => {
    setCurTask(value);
  };
  const addTodoHandler = () => {
    setTodos([...todos, { task: curTask, id: Math.random() }]);
    setCurTask("");
  };

  const removeHandler = (id) => {
    setTodos((prevState) =>
      prevState.filter((el) => {
        return el.id !== id;
      })
    );
  };

  return (
    <div className="App">
      <InputFields
        initialValue={curTask}
        addHandler={addTodoHandler}
        changeHandler={valueChangeHandler}
      />
      <TodoList todoList={todos} removingTask={removeHandler} />
    </div>
  );
}
