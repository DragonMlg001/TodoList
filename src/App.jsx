import React , { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./Components/Navbar";

function App() {
// States are here
const [todo , setTodo] = useState("");

const [todos , setTodos] = useState([

]);


// Button on Click starts here
  const handleAdd=()=>{
setTodos([...todos , {todo,isCompleted: false}])
setTodo("")
  };

  const handleEdit=()=>{

  };

  const handleDelete=()=>{

  };

// Task Writer Starts here

  const handleChange=(e)=>{
setTodo(e.target.value)
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto bg-green-200 rounded-2xl my-4 p-5 min-h-screen">

        {/* Task Adding Code */}

        <div className="addTodo">
        <h1 className="text-xl font-bold text-center my-5">Add a Task/Todo</h1>
        <input type="text" className="w-1/2 rounded px-2" placeholder="Your Task Here"
        onChange={handleChange} value={todo}
        />
        <button className="bg-purple-400 hover:bg-purple-500 rounded p-2 mx-6 text-white text-sm font-bold transition-all"
        onClick={handleAdd}
        >Add Task</button>
        </div>

{/* Task Cheking and Deleting Code */}

        <h1 className="text-xl font-bold text-center">Your Task / Todo's</h1>
        <div className="todos">
{/* map starts here to dynamically show list of todos */}
          {todos.map(item=>{
return(
          <div  key={uuidv4()} className="todo flex w-full">
            <div className={item.isCompleted ? "": "line-through"}>{item.todo}</div>  
            <div className="buttons">
              <button className="bg-purple-400 hover:bg-purple-500 rounded p-2 mx-5 text-white text-sm font-bold transition-all"
              onClick={handleEdit}
              >Edit</button>
              <button className="bg-purple-400 hover:bg-purple-500 rounded p-2 mx-0 text-white text-sm font-bold transition-all"
              onClick={handleDelete}
              >Delete</button>
              </div>
          </div>

          )})}
        </div>
      </div>
    </>
  );
}

export default App;
