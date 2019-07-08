import React from 'react';
import EditToDo from './EditToDo'

const ViewToDo = props => {
    return (
      <div className="card">
        <p>View Todos</p>
        <ul className="list-group">
          {
            props.toDoItems.map(item => {
              return (
                <EditToDo key={item.id} toDoItem={item.toDoItem} priorityLevel={item.priorityLevel} id={item.id} handleRemove={props.handleRemove} completed={item.completed} toggleCheckBox={props.toggleCheckBox} handleEdit={props.handleEdit} editEnabled={item.editEnabled} handleSave={props.handleSave}/>
              )
            })
          }
        </ul>
  
      </div>
    )
  }

export default ViewToDo;