import React from 'react';
import propTypes from 'prop-types';

class Todolist extends React.component {
  static: PropTypes = {
    data: PropTypes.array
  }

render () {
    const {data} = this.props;
    return
    <ul>
      {data.map(list => <li key={list.id}>{list.todo}, {list.task_number}</li>}
    </ul>
}

}

export default Todolist;
