import React from "react";

class ToDoForm extends React.Component {
  
  constructor() {
    super();
    this.state = {
      newTodo: ''
    }
  }

  handleChanges = e => {
    
    this.setState({
      ...this.state,
      newTodo: e.target.value
    })
  };

  
  submitTodo = e => {
    e.preventDefault(); 
    this.props.addTodo(this.state.newTodo);
  }

  render() {
    return (
      <form onSubmit={this.submitTodo}>
        <input value={this.state.newTodo} onChange={this.handleChanges} type="text" name="todo" />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default ToDoForm;