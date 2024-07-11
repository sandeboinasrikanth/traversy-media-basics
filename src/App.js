import Header from "./components/Header";
import Tasks from "./components/Tasks";
import React,{useState} from "react";

function App() {
  //js starts
  const name ="Srikanth";
  const x = true;

  const [tasks, setTasks]=useState([
    {
        id:1,
        text: "Doctors Appointment" ,
        day:  "Feb 5th at 2:30pm" ,
        remainder:true,
    },
    {
        id:2,
        text:  "Meeting at school",
        day:   "Feb 6th at 1:30pm",
        remainder:true,
    },
    {
        id:3,
        text:  "Food Shopping",
        day:   'feb 5th at 2:30pm',
        remainder:false,
    },
])

//Delete Task
  const deleteTask=(id)=>{
    // console.log("delete", id);
    setTasks(tasks.filter((task)=>task.id !== id));
  }

//Toggle Remainder
  const toggleRemainder=(id)=>{
    // console.log(id)
    setTasks(tasks.map((task)=>task.id ===id ? {...task, remainder:!task.remainder}:task));
  }

  //js ends
  return (
    <div className="container">
      {/* <h1>Hello from react</h1> */}
      {/* <p>Hello, {x ? name: "srikanth yadav"} how are you? {2+2}</p> */}
      <Header  />
      {
        tasks.length>0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder} />
        : "No Tasks to show"
      }
    </div>
  );
}

export default App;
