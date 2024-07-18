import React from 'react';
import { FaTimes } from 'react-icons/fa';

function Task({id,text, day, reminder, onDelete,onToggle,task}) {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`}
    onDoubleClick={()=>onToggle(id)}>
        <h3>{text} <FaTimes  style={{color:"red",cursor:"pointer"}} onClick={()=>onDelete(id)}/> </h3>
        <p>{day}</p>
        <p>{reminder}</p>
        <button>Delete</button>
        <button>Edit</button>
    </div>
  )
}

export default Task