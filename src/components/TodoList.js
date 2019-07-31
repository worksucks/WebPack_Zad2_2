import React from 'react';
import PropTypes from 'prop-types';

class Todolist extends React.Component {

  static propTypes = {
    data: PropTypes.array,
    removeTodo: PropTypes.func,
  }

render () {

    const { data } = this.props;

    return (
      <ul>
        {data.map(list => <li key={list.id}>{list.todo}, {list.task_number}<button onClick={() => {this.props.removeTodo(list.id)})>Usuń zadanie</button></li>)}
      </ul>
    )
}

}

export default Todolist;
