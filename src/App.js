import About from "./components/About";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import React,{useState, useEffect} from "react";
import {BrowserRouter as router, Route, Routes} from 'react-router-dom'

function App() {
  //js starts
  const name ="Srikanth";
  const x = true;

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks]=useState([]);

  useEffect(()=>{
    const getTasks = async () =>{
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks();
  },[])


// fetchTasks
  const fetchTasks = async () => {
    const res = await fetch(`http://localhost:5000/tasks`);
    const data = await res.json();

    return data;

  }

// fetchTask
const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`);
  const data = await res.json();

  return data;

}

//Delete Task
  const deleteTask = async(id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'DELETE',
    })

    // console.log("delete", id);
    setTasks(tasks.filter((task)=>task.id !== id));
  }

//Toggle Remainder
  const toggleReminder= async (id)=>{
    const taskToToggle = await fetchTask(id) 
    const updTask = {...taskToToggle, reminder:!taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'PUT',
      headers:{
        'Content-type':'application/json',
      },
      body:JSON.stringify(updTask)
    })

    const data = await res.json()

    setTasks(tasks.map((task)=>task.id ===id ? {...task, reminder:data.reminder}:task));

    // console.log(id)
    // setTasks(tasks.map((task)=>task.id ===id ? {...task, reminder:!task.reminder}:task));
  }

//AddTask
  const addTask= async(task)=>{
    const res = await fetch('http://localhost:5000/tasks', {
      method:'POST',
      headers:{
        'Content-type':'application/json',
      },
      body: JSON.stringify(task)
    })

    const data = await res.json();

    setTasks([...tasks, data]);

    // console.log(task)
    // const id=Math.floor(Math.random()*10000)+1;
    // const newTask={id, ...task}
    // setTasks([...tasks,newTask])
  }

  //js ends
  return (
    <Routes>
      <div className="container">
        {/* <h1>Hello from react</h1> */}
        {/* <p>Hello, {x ? name: "srikanth yadav"} how are you? {2+2}</p> */}
        <Header  onAdd={()=>setShowAddTask(!showAddTask)} showAddTask={showAddTask} />

        <Route path="/" exact render={(props)=>(
          <>
            {showAddTask && <AddTask onAdd={addTask}/> }
        
            {
            tasks.length>0 ?
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
            : "No Tasks to show"
            }
          </>
          )} 
        />
        <Route path="/about" Component={About} />
        <Footer />
        <About />
      </div>
    </Routes>
  );
}

export default App;
