import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
    this.onChange = this.onChange.bind(this)
    this.handleClick = this.handleClick.bind(this) 
  }
  
  onChange(e){ 
    this.setState({ [e.target.name] : e.target.value })
}

handleClick(e) {
    e.preventDefault(); //Stops the event at this point
    
    this.setState
    ({
      createToDo : "",
      selectPriority : "",
      add : "",
      output: ""
    })
  }


  render() {
    return (
<div className='container'>
    <header><h1 className='text-light'>Very Simple ToDo App</h1>
    </header>
    <header><h4 className='text-light border-bottom'>Track all of the things</h4>
    </header>

  <div className="row">
    <div className="col-sm-6">

      <div className="card">
        <div className="card-header mt-1">
        <p>Add New ToDo</p>
        </div>
          <div className="card-body mb-2">
          <h5 className="card-title"></h5>

          <label htmlFor="createToDo"><strong>I want to..</strong>
          </label>
          <input type="text" value={this.state.createToDo} onChange={this.onChange} name="createToDo" className="form-control" id="createToDo" placeholder="Pleae Add a To-Do Item">
          </input> 
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

</div>

    );
  }
}

export default App;
