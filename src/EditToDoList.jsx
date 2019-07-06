import React from 'react';
import ViewToDo from './ViewToDo';

class EditToDoList extends React.Component {
         /* Still Need to Modify the HTML layout for this component */
    render() {
        return (
<div className="row">
    <div className="col-sm-6">
        <div className="card">
            <div className="card-header mt-1">
            <p>Add New ToDo</p>
            </div>
                <div className="card-body mb-2">
                <h5 className="card-title"></h5>
                <label htmlFor="createToDo"></label><strong>I want to..</strong>
                <div className="form-group">
                <textarea className="create-todo-text btn-round" id="exampleFormControlTextarea2" rows="3"></textarea>
                </div>
                <br></br>
                <label htmlFor="selectPriority"><strong>How much of a priority is this?</strong>
                </label>
                <select type="text" value={this.state.selectPriority} onChange={this.onChange} name="selectPriority" className="form-control" id="selectPriority" title="Select A Priority">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                </select>
                <br></br>
                </div>
                    <div className="card-footer">
                    <button className="btn btn-block btn-round btn-success" name="add" id="add" onClick={this.handleClick}>Add</button>
                    </div>
              
        </div>
    </div> 
</div>

        );

    }

    }
export default EditToDoList;