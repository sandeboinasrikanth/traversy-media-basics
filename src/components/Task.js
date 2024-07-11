import React from 'react';
import { FaTimes } from 'react-icons/fa';

function Task({id,text, day, remainder, onDelete,onToggle,task}) {
  return (
    <div className={`task ${task.remainder ? 'remainder' : ''}`}
    onDoubleClick={()=>onToggle(id)}>
        <h3>{text} <FaTimes  style={{color:"red",cursor:"pointer"}} onClick={()=>onDelete(id)}/> </h3>
        <p>{day}</p>
        <p>{remainder}</p>
        <button>Delete</button>
        <button>Edit</button>
    </div>
  )
}

export default Task