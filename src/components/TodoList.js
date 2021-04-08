import React from "react";

import ToDo from "./Todo";

const ToDoList = props => {
  
  return (
    <div className="todo-list">
      {props.todosList.map(todo => (
        <ToDo toggleTodo={props.toggleTodo} key={todo.id} todo={todo} />
      ))}
        <button onClick={props.clearCompleted} className="clear-btn">
        Clear Completed
      </button>
    </div>
  );
};

export default ToDoList;
