import React, { Component } from 'react';
import AddNewToDo from './AddNewToDo';
import ViewToDo from './ViewToDo';
//The EditToDoList portion will be imported inside of the ToDoList;
const testData = [
  {
    toDoItem: 'Go to the Doctors for Injury for bruised ribs',
    priorityLevel: 2,
    completed: false,
    id: 1,
    editEnabled: false
  },
]
let id = 1;

class App extends Component {
  constructor() {
    super();
    this.state = {
        toDoItems: []
    };
    this.addToDo = this.addToDo.bind(this); 
  }

  //The callback function below called addToDo has two parameters: the first parameter being the current toDoItem,
  //and the 2nd parameter being the priority level of that toDoItem.
  
  addToDo(toDoItem, priorityLevel) {
    if (toDoItem.length === 0) 
    { //Counts the length of characters in the To Do Item.
      alert('No To-Do Item Has Been Entered');
      return; //is this return statement needed???? Test to find out!
    }
    let addNewToDoItem = {toDoItem: toDoItem, priorityLevel: priorityLevel, completed: false, id: id, editEnabled: false};
    this.state.toDoItems.push(addNewToDoItem);
    this.setState({toDoItems: this.state.toDoItems});
    //the id++ exist because if there are 0 items entered initially then by default that means
    //that if a new ToDoItem gets entered that we will have to increment the id number by 1 in order to account
    //for the fact that a ToDoItem has been added/created.
    id++; 

  }

  render() {
    return (
<div className='container'>
    <header><h1 className='text-light'>Very Simple ToDo App</h1>
    </header>
    <header><h4 className='text-light border-bottom'><small>Track all of the things</small></h4><br></br>
    </header>
  <div className="row">
  <div className="col-sm-6">
      <AddNewToDo
       addToDo={this.addToDo}
      />
    </div>

<div className="col-sm-6">
      <ViewToDo
       viewToDo={ this.viewToDo }
       />
      </div>
      </div> 
  </div>
    );
  }
}

export default App;
