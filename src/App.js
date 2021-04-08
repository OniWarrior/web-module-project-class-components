import React from 'react';

import './components/Todo.scss';

import ToDoList from './components/TodoList';
import ToDoForm from './components/TodoForm';


const toDos = [
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
      toDos: toDos,
      otherVar: "something"
    }
  }
    // Member methods
    toggleToDo = todoId =>{
      console.log('Toggling todo',todoId);

      const updatedToDos = this.state.toDos.map(todo => {
        if (todoId === todo.id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo;
    });

    console.log("updated todo array", updatedToDos);
    this.setState({
      ...this.state,
      groceries: updatedGroceries
    });
  };

  addToDo = todoName => {
    this.setState({
      ...this.state,
      toDos: [
        ...this.state.toDos,
        {
          name: itemName,
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
      toDos: this.state.toDos.filter(todo => !todo.completed)
    })
  }

  render() {
    return (
      <div className='App'>
         <div className="App-header">
          <h1>Shopping List</h1>
          <ToDoForm addToDo={this.addToDo} />
        </div>
        <ToDoList clearCompleted={this.clearCompleted} toggleToDo={this.toggleToDo} toDos={this.state.toDos} />
       
      </div>
    );
  }
}

export default App;
