import React from 'react';
//import EditToDoList from './EditToDoList'

class ViewToDo extends React.Component {

    render() {
        return (
            <div>
                
<div className="col-sm-6">
    <div className="card">
        <div className="card-header mt-1">
        <p>View ToDo</p>
        </div>
            <div className="card body d-flex flex-column mt-auto">
            <ul className="list-group list-group-flush d-flex flex-column mt-auto">
            <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
        <label class="form-check-label" for="defaultCheck1">
        <li className="list-group-item"><div className="alert alert-warning"><strong>Go to Chase bank</strong></div></li>
        </label>
        </div> 
            <li className="list-group-item"><div className="alert alert-danger"><strong>Get your tire patched</strong></div></li>
            <li className="list-group-item"><div className="alert alert-success"><strong>Go to the gimnasio</strong></div></li>
            </ul>
            </div>
        </div>
    </div>
</div>
        );

    }

    }

export default ViewToDo;