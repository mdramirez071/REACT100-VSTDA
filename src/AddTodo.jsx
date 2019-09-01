import React, { Component } from 'react';
//The addToDo component is more of an isolated component from which it binds a handleChange and Submit button in order
//to bind the functionality to this specific component which in turn allows it to update the state of each name and value
//which in this case would be title and priority respectively. This is also possible because we are passing down
//props through the constructor and super function since we are dealing with a child component.
class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ' ',
      priority: ' '
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitToDo = this.submitToDo.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  submitToDo(e) {
    e.preventDefault();
    this.props.addToDo(this.state.title, this.state.priority);
    this.setState({ title: ' ', priority: ' ' });
  }

//handleChange will allow us to grab newly updated values for title and priority by binding/utilizing the handleChange and Submit function
//in order to take advantage of the onChange and onClick events that occur below in our JSX code that is being returned from our AddToDo component
  render() {
    return (
      <div>
        <div className='card'>
          <div className='card-header'>
            Add New Todo
          </div>
          <div className='card-body'>
            <form>
              <div className='form-group'>
                <label htmlFor='todoInput'><strong>I want to..</strong></label>
                <textarea className='create-todo-text' id='todoInput' name='title' value={ this.state.title } onChange={ this.handleChange } />
              </div>
              <div className='form-group'>
                <label htmlFor='selectPriority'><strong>How much of a priority is this?</strong></label>
                <select className='create-todo-priority form-control' id='selectPriority' name='priority' value={ this.state.priority } onChange={ this.handleChange }>
                  <option value='0' disabled>Select a Priority Level</option>
                  <option value='1'>Low</option>
                  <option value='2'>Medium</option>
                  <option value='3'>High</option>
                </select>
              </div>
            </form>
          </div>
          <div className='card-footer'>
            <button className='create-todo btn btn-success btn-block' onClick={ this.submitToDo }>Add</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTodo;