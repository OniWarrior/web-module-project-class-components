import React from 'react';

import './components/Todo.scss';

import ToDoList from './components/TodoList';
import ToDoForm from './components/TodoForm';


const todosList = [
  {
    name: 'Learn about classes',
    id: 123,
    completed: false
  },
  {
    name: 'Learn OOP',
    id: 124,
    completed: false
  },
  {
    name: 'Learn fundamentals of CS',
    id: 1235,
    completed: false
  },
  {
    name: 'Learn SQL',
    id: 1246,
    completed: false
  },
  {
    name: 'Learn Java',
    id: 1237,
    completed: false
  },
  {
    name: 'Learn the greatest language: C',
    id: 1248,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todosList: todosList,
      otherVar: "something"
    }
  }
    // Member methods
    toggleTodo = todoId =>{
      console.log('Toggling todo',todoId);

      const updatedTodos = this.state.todosList.map(todo => {
        if (todoId === todo.id) 
        {
          return { ...todo, completed: !todo.completed }
        }
        return todo;
    });

    console.log("updated todo array", updatedTodos);
    this.setState({
      ...this.state,
      todosList: updatedTodos
    });
  };

  addTodo = todoName => {
    this.setState({
      ...this.state,
      todosList: [
        ...this.state.todosList,
        {
          name: todoName,
          id: Date.now(),
          completed: false
        }
      ]
    })
  }

  clearCompleted = e => {
   
    e.preventDefault();
    this.setState({
      ...this.state,
      todosList: this.state.todosList.filter(todo => !todo.completed)
    })
  }

  render() {
    return (
      <div className='App'>
         <div className="header">
          <h1>Todo List</h1>
          <ToDoForm addTodo={this.addTodo} />
        </div>
        <ToDoList clearCompleted={this.clearCompleted} toggleTodo={this.toggleTodo} todosList={this.state.todosList} />
       
      </div>
    );
  }
}

export default App;
