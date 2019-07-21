import React from 'react';
import PropTypes from 'prop-types';

class TodoList extends React.component {
  static propTypes = {
    data: PropTypes.array
  }

render () {
    const {data} = this.props;
    return (
    <ul>
      {data.map(list => <li key={list.id}>{list.todo}, {list.task_number}</li>)}
    </ul>
  );
}

}

export default TodoList;
