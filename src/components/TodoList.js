import React from "react";

import Todo from "./Todo";

const ToDoList = props => {
  
  return (
    <div className="shopping-list">
      {props.toDos.map(todo => (
        <ToDo toggleToDo={props.toggleToDo} key={todo.id} todo={todo} />
      ))}
        <button onClick={props.clearCompleted} className="clear-btn">
        Clear Completed
      </button>
    </div>
  );
};

export default ToDoList;
