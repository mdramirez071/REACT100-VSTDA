import React, { Component } from 'react';

function priorityColor(priority) {
    if (priority == 1) {
        return ('success');
    } else if (priority == 2) {
        return 'warning';
    } else if (priority == 3) {
        return 'danger';
    }
}
//props are passed down from the main 'App' component which renders the AddToDo and ViewToDo components,
//the ViewToDo component in turn renders this 'ToDoItem' component which grabs its props from ViewToDo,
//but only because these props have already been passed down from the parent 'App' component, this essentially
//allows the component to grab the current state of title and priority which then allows it to become accessible
//through the 'ToDoItem' component

//toggleDisplay is initially set to false because the 'edit' function will only be invoked during the click/onChange events
//Once it is clicked then the toggleDisplay will have a value of true which allows the Description and Priority
//fields to appear along with the 'Save' button. Once the Save Button is clicked, the toggleDisplay is set
//back to false and updated edits are "Saved" via the SaveToDo function.
class ToDoItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newTitle: ' ',
            newPriority: ' ',
            toggleDisplay: false
        };

        this.toggleView = this.toggleView.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.saveToDo = this.saveToDo.bind(this);
    }
    //handleChange is on the onChange function that handles each "event" by updating the state of each name and value
    //in this case, name refers to newTitle and value refers to newPriority
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    //Because toggleDisplay is initially set to 'false' it will update the state to 'true' when the toggleView function is invoked during
    //the onClick event of the of the 'edit' button. Once the save button is clicked, 'the toggleView function gets
    //invoked again and updates the value of toggleView from true to false and the edit fields disappear.
    toggleView() {
        this.setState({
        toggleDisplay: !this.state.toggleDisplay
    });
    }
    saveToDo() {
        this.props.editToDo(this.state.newTitle, this.state.newPriority, this.props.oneToDo.id);
        this.toggleView();
    }
    //style={cursor:pointer} actually makes the cursor visible when hovering over certain elements on the page
    //for each list item in the unordered list we can modify the color of a todo item based on its priority
    //by passing in the function priorityColor and its parameter inside of a template literal.
    render() {
        return (
            <div>
                <li className={`list-group-item-${priorityColor(this.props.oneToDo.priority)} clearfix` }>
                <input type="checkbox" id="cbox3"></input>{ this.props.oneToDo.title }        
                    <a className='delete-todo btn text-danger float-right' 
                    href='#' 
                    onClick={ this.props.delToDo.bind(this, this.props.oneToDo.id) }>
                    <span className='fa fa-trash'></span>
                    </a>
                    
                    <a className='edit-todo btn float-right text-primary'
                    name='edit-button'
                    href='#'
                    value={ this.state.toggleDisplay }
                    onClick={ () => this.toggleView() }>
                    <span className='fa fa-edit'></span>
                    </a>     
                </li>
                {this.state.toggleDisplay ? (
                    <div className={ `alert-${priorityColor(this.props.oneToDo.priority)} clearfix` }>
                        <div>
                            <label htmlFor='update-todo-text'>Description</label>
                                <textarea className='update-todo-text form-control' name='newTitle' id='exampleFormControlTextarea1'rows='5'value={ this.state.newTitle }onChange={ this.handleChange } />
                        </div>
                        <div>
                            <label htmlFor='newPrioritySelect'> How much of a priority is this?</label>
                                <select name='newPriority'id='newPrioritySelect'className='form-control update-todo-priority'value={ this.state.newPriority }onChange={ this.handleChange }>
                                    <option value='Select'>Select a Priority</option>
                                    <option value='1'>Low</option>
                                    <option value='2'>Medium</option>
                                    <option value='3'>High</option>
                                </select>
                        </div>
                        <div>
                            <button className='update-todo btn btn-success pull-right pull-bottom' name='edit-button' onChange={ this.handleChange } onClick={ () => this.saveToDo() }> Save
                            </button>
                        </div>
                    </div>    
                ) : null}
            </div>
        );
    }

}

export default ToDoItem;