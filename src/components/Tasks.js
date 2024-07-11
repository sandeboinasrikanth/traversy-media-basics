import React from 'react';
import Task from './Task';

function Tasks({tasks,onDelete, onToggle}) {
  return (
    <>
    {
        tasks.map((task)=>{
            const {id, text,day,remainder}=task;
            return <Task 
                        key={id} 
                        text={text} 
                        day={day} 
                        remainder={remainder} 
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