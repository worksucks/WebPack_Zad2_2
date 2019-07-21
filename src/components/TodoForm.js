import React from 'react';
import PropTypes from 'prop-types';

class TodoForm extends React.Component {
  static propTypes = {
    addTodo: PropTypes.func,
  };

  state = {
    todo: 'rien',
    task_number: 0,
  }

  handleTodo = (event) => {
    this.setState({todo: event.target.value});
  }

  handleTask_Number = (event) => {
    this.setState({task_number: event.target.value});
  }

  handleSubmit = (event)  => {
    event.preventDefault();
    this.props.addTodo(this.state.todo, this.state.task_number)
  }

  render() {

    const {todo, Task_Number} = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        zadanie: <input type="text" value={todo} onChange={this.handleTodo}/>
        Task_Number: <input type="number" value={Task_Number} onChange={this.handleTask_Number}/>
        <button>Dodaj zadanie</button>
      </form>
    )
  }
}

export default TodoForm;
