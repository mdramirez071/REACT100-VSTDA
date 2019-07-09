import React, { Component } from 'react';
import AddTodo from './AddTodo';
import ViewToDo from './ViewToDo';
import uuid from 'uuid'; //uuid generates a random 'universal unique identifer' for each to-do item's id.
//this is the parent component which renders out AddTodo and ViewToDo child components
//we also need to bind the add,delete,and edit functionality to this component in order to allow the function themselves to run.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
    this.addToDo = this.addToDo.bind(this);
    this.delToDo = this.delToDo.bind(this);
    this.editToDo = this.editToDo.bind(this);
  }
  addToDo(title, priority) {
    const newToDo = {
      title,
      priority,
      id: uuid()
    };
    this.setState({ todos: [...this.state.todos, newToDo] });
  }
//for the delete function we only want to pass in the id as the parameter because it is the actual id that acts
//as a container for each to do item.
  delToDo(id) {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }
//the editToDo function will first grab the current ToDoItem by setting the todos array and setting that to a new arr called currentTodos
//then using a for loop, we will iterate through the currentTodos array toDoItem by toDoitem we will then
//using an if statement to essentially reassign the id number to that toDoItem as well as the newTitle and priority if they are updated to a newer value.
//the array of todos will then have its state updated with the state of currentTodos
  editToDo(newTitle, newPriority, id) {
    const currentTodos = this.state.todos;

    for (let i = 0; i < currentTodos.length; i++) {
      console.log(currentTodos[i].id);
      if (currentTodos[i].id === id) { //the exact id must be selected in order to have the correct editTodo item be edited.
        currentTodos[i].title = newTitle;
        currentTodos[i].priority = newPriority;
      }
    }
    this.setState({ todos: currentTodos });
  }
  //the pieces of functionality/information that we want exported to the 'AddTodo' component is simply the addToDo function
  //the functions/information that we want exported to the 'ViewToDo' component includes the state of the todos array,
  //as well as the edit and delete functionality.
  render() {
    return (
      <div className='container'>
        <div className='page-header border-bottom border-light'>
          <h2 className='text-white'>Very Simple Todo App</h2>
          <h6 className='text-white'>Track all of the things</h6>
        </div>
        <br></br>
        <div className='row'>
          <div className='col-md-4'>
            <AddTodo addToDo={ this.addToDo } />
          </div>
          <div className='col-md-8'>
            <ViewToDo todos={ this.state.todos } delToDo={ this.delToDo } editToDo={ this.editToDo } />
          </div>
        </div>
      </div>
    );
  }
}

export default App;