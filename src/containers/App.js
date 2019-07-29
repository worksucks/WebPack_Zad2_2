import React from 'react';
import style from './App.css';
import TodoList from '../components/TodoList.js';
import TodoForm from '../components/TodoForm.js';
import uuid from 'uuid';

class App extends React.Component {

    state = {
            data: [{id:1, todo: 'rien',task_number: 1},{id:2, todo:'etwas', task_number: 2}],
        }

    addTodo = (todo, task_number) => {
        const record ={
              id: uuid.v4(),
              text: todo,
              number: task_number,
        };
        const data = [...this.state.data, record];
        this.setState({data});
    }

    removeTodo = (id) => {
      const remainder = this.state.data.filter(todo => todo.id !== id);
      this.setState({data: remainder});
    }

    render() {
      return (
          <div className={style.TodoApp}>
              <TodoList data={this.state.data} removeTodo={this.removeTodo} />
              <TodoForm addTodo={this.addTodo}/>
              </div>
      );
    }

}

export default App;
