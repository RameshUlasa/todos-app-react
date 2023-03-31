import React, { useState, useEffect } from "react";
import "./index.css";

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [todosCount, setTodosCount] = useState(0);

  useEffect(() => {
    const storedTodoList = JSON.parse(localStorage.getItem("todoList"));
    if (storedTodoList) {
      setTodoList(storedTodoList);
      setTodosCount(storedTodoList.length);
    }
  }, []);

  function onAddTodo() {
    const userInputElement = document.getElementById("todoUserInput");
    const userInputValue = userInputElement.value;

    if (userInputValue === "") {
      alert("Enter Valid Text");
      return;
    }

    const newTodo = {
      text: userInputValue,
      uniqueNo: todosCount + 1,
      isChecked: false,
    };

    setTodoList([...todoList, newTodo]);
    setTodosCount(todosCount + 1);

    userInputElement.value = "";
  }

  function onTodoStatusChange(uniqueNo) {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.uniqueNo === uniqueNo) {
        return { ...todo, isChecked: !todo.isChecked };
      } else {
        return todo;
      }
    });
    setTodoList(updatedTodoList);
  }

  function onDeleteTodo(uniqueNo) {
    const updatedTodoList = todoList.filter(
      (todo) => todo.uniqueNo !== uniqueNo
    );
    setTodoList(updatedTodoList);
  }
  function onSaveTodoList() {
    localStorage.setItem("todoList", JSON.stringify(todoList));
    alert("Todo list saved to local storage!");
  }

  return (
    <div className="todos-bg-container">
      <h1 className="todos-heading">Todos</h1>
      <div className="body-container">
        <h1 className="create-task-heading">
          Create <span class="create-task-heading-subpart">Task</span>
        </h1>
        <div className="input-group mb-3">
          <input
            type="text"
            id="todoUserInput"
            className="todo-user-input"
            placeholder="What needs to be done?"
          />
          <div className="input-group-append">
            <button class="button" type="button" onClick={onAddTodo}>
              Add
            </button>
          </div>
        </div>
        <h1 class="todo-items-heading">
          My <span class="todo-items-heading-subpart">Tasks</span>
        </h1>
        <ul className="todo-items-container">
          {todoList.map((todo) => (
            <li key={todo.uniqueNo} className="todo-item-container">
              <input
                type="checkbox"
                className="checkbox-input"
                checked={todo.isChecked}
                onChange={() => onTodoStatusChange(todo.uniqueNo)}
              />
              <div className="label-container">
                <label
                  className={`checkbox-label ${
                    todo.isChecked ? "checked" : ""
                  }`}
                >
                  {todo.text}
                </label>
                <div className="delete-icon-container">
                  <button
                    type="button"
                    className="close"
                    onClick={() => onDeleteTodo(todo.uniqueNo)}
                  >
                    <span className="delete-icon" aria-hidden="true">
                      <i class="far fa-trash-alt"></i>
                    </span>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <button id="saveTodoButton" class="button" onClick={onSaveTodoList}>
          Save
        </button>
      </div>
    </div>
  );
}

export default TodoList;
