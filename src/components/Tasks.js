import React from 'react';
import Task from './Task';

function Tasks({tasks,onDelete, onToggle}) {
  return (
    <>
    {
        tasks.map((task)=>{
            const {id, text,day,reminder}=task;
            return <Task 
                        key={id} 
                        text={text} 
                        day={day} 
                        reminder={reminder} 
                        onDelete={onDelete} 
                        id={id} 
                        onToggle={onToggle}
                        task={task}
                    />
            
        })
    }
    </>
  )
}

export default Tasks