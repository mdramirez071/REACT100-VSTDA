import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ViewToDo extends Component {
//the actual list items will be rendered from ViewToDo to the ToDoItem component by mapping through each element
//inside of the todos array which is accessible via props from the parent component. We then export the information/functionality in order to access
//the ID, single todo items, the delete and edit functionality
//Lines 17-18 utilizes an anonymous arrow function with a parameter 'todo' which returns each piece of information/functionality
//that pertains to each element inside of the todos array.
  render() {
    return (
      <div>
        <div className='card'>
          <div className='card-header'>
          View Todos
          </div>
            <ul className='list-group list-group-flush list-unstyled'>
              { this.props.todos.map((todo) => { 
              return <ToDoItem key={ todo.id } oneToDo={ todo } delToDo={ this.props.delToDo } editToDo={ this.props.editToDo } />;
              })}
            </ul>
          </div>
      </div>
    );
  }
}

export default ViewToDo;