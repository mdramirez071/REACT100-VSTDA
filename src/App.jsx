import React, { Component } from 'react';
import AddNewToDo from './AddNewToDo';
import ToDoList from './ToDoList';
import EditToDoList from './EditToDoList'; /*Add as an import inside of the ToDoList?????????*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        addNewToDo: "", //THIS WILL BE USED TO HELP IMPORT THE COMPONENT CALLED AddNewToDo.jsx
        toDoList: "", //THIS WILL BE USED TO HELP IMPORT THE COMPONENT CALLED ToDoList.jsx
        editToDoList: "", //THIS PART NEEDS TO BE EMBEDDED INSIDE OF 'ToDoList' *READ ARTICLE SENT FROM HENRY TO FIGURE THIS PART OUT*
    };
    this.onChange = this.onChange.bind(this)
    this.handleClick = this.handleClick.bind(this) 
  }
  
  onChange(e){ 
    this.setState({ [e.target.name] : e.target.value })
}

handleClick(e) {
    e.preventDefault(); //Stops the event at this point
    
  }


  render() {
    return (
<div className='container'>
    <header><h1 className='text-light'>Very Simple ToDo App</h1>
    </header>
    <header><h4 className='text-light border-bottom'><small>Track all of the things</small></h4><br></br>
    </header>


      {/* Renders Out The AddNewToDo Component BELOW */}
    { 
      this.state.addNewToDo.map(addToDo => (
          <AddNewToDo
              /* Figre out how to import the actual content of all of the divs inside here */
              />
      ))
  }      
     {/* Renders Out The ToDoList Component BELOW */}
    { 
      this.state.toDoList.map(toDoList => (
          <ToDoList
              /* Figre out how to import the actual content of all of the divs inside here */
              />
      ))
  }    

</div>

    );
  }
}

export default App;
