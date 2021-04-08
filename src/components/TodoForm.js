import React from "react";

class ToDoForm extends React.Component {
  
  constructor() {
    super();
    this.state = {
      newToDo: ''
    }
  }

  handleChanges = e => {
    
    this.setState({
      ...this.state,
      newToDo: e.target.value
    })
  };

  
  submitToDo = e => {
    e.preventDefault(); 
    this.props.addToDo(this.state.newToDo);
  }

  render() {
    return (
      <form onSubmit={this.submitToDo}>
        <input value={this.state.newToDo} onChange={this.handleChanges} type="text" name="todo" />
        <button>Add ToDo</button>
      </form>
    );
  }
}

export default TodoForm;