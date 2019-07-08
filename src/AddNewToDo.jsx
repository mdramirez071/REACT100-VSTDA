import React from 'react';

class AddNewToDo extends React.Component {
  /* Still Need tnpo Modify the HTML layout for this component */
    constructor(props) {
      super(props);
      this.state = {
        toDoItem: '',
        priorityLevel: 'select', //select references the selector called 'priorityLevel' on the add item form
      }
      this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
      if (e.target.name === "toDoItem") {
        this.setState({ toDoItem: e.target.value });
      } else if (e.target.name === "priorityLevel") {
        this.setState({ priorityLevel: e.target.value });
      }
    }
  
render() {
 return (
    <div className="card">
      <div className="card-header mt-1">
        <p>Add New Todo</p>
      </div>
          <div className="card-body mb-2">
            <h5 className="card-title"></h5>
            <label htmlFor="toDoItem"></label><strong>I want to..</strong>
            <div className="form-group">
              <textarea className="create-todo-text btn-round" name="toDoItem" id="exampleFormControlTextarea2" value={this.state.toDoItem} onChange={this.onChange} rows="3"></textarea>
            </div>
            <br></br>
            <label htmlFor="priorityLevel"><strong>How much of a priority is this?</strong>
            </label>
            <select className="create-todo-priority" name="priorityLevel" id="priorityLevel" className="form-control" title="Select A Priority" type="number" value={this.state.priorityLevel} onChange={this.onChange}>
            <option value="select" disabled>Select Priority Level</option>
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
            </select>
            <br></br>
            </div>
            <div className="card-footer">
              {/* Once onClick is invoked, create an anonymous higher order function that calls a callback function called "addToDo" with 2 parameters one parameter that contains the
              the current state of the ToDo Item which just means the name of the Item that is currently selected and the second
              parameter contains the current state of the priority level of that ToDo Item */}
              <button className="create-todo btn btn-block btn-round btn-success" name="add" id="add" onClick={() => this.props.addToDo(this.state.toDoItem, this.state.priorityLevel)}>Add</button>
            </div>
        </div>
 
    );
  }
}
export default AddNewToDo;









