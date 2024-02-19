import React , { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { MdEditSquare , MdDeleteForever  } from "react-icons/md";
import { AiFillSave } from "react-icons/ai";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./Components/Navbar";

function App() {
// States are here
const [todo , setTodo] = useState("");

const [todos , setTodos] = useState([]);

const [showFinished , setShowFinished] = useState(true);

// useEffect are here
useEffect(() => {
let todoString = localStorage.getItem("todos");
if(todoString){
let todos =  JSON.parse(localStorage.getItem("todos"));
setTodos(todos);
}},
 []);


// FUNCTIONS STARTS HERE
// Save to Local Memory 
const saveTLM = ()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
  };

// Button on Click starts here
  const handleAdd=()=>{
setTodos([...todos , {id: uuidv4() , todo, isCompleted: false}])
setTodo("")
saveTLM();
console.log(todos)
  };

const handleEdit=(e , id)=>{
  let t = todos.filter(i => i.id === id)
  setTodo(t[0].todo)

let newTodos = todos.filter(item=>{return item.id !== id});
setTodos(newTodos);
saveTLM();
  };

  const handleDelete=(e , id)=>{
let newTodos = todos.filter(item=>{return item.id !== id});
setTodos(newTodos);
saveTLM();
  };

  // checkbox

  const handleCheckBox=(e)=>{
let id = e.target.name;
let index = todos.findIndex(item=>{return item.id === id});

let newTodos = [...todos];
newTodos[index].isCompleted = !newTodos[index].isCompleted;
setTodos(newTodos);
saveTLM();
console.log(newTodos , todos)
  }

// Task Writer Starts here

  const handleChange=(e)=>{
setTodo(e.target.value)
  }

//

const toggleFinished =(e)=>{
setShowFinished(!showFinished)
};

// Enter Key Function
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }}



  return (
    <>
      <Navbar />
      <div className="md:container md:mx-auto bg-green-200 rounded-2xl my-4 p-5 min-h-fit md:w-1/2">

        {/* Task Adding Code */}
<h1 className="my-3 font-bold text-2xl text-center hover:text-yellow-200 ">TsTa-TaskTracker For all your Task needs</h1>

        <div className="addTodo flex flex-col gap-3">
        <h1 className="text-xl font-bold text-center my-5">Add a Task/Todo</h1>
        <div className="flex gap-3">
        <input type="text" className="w-full rounded px-2 py-4 border-2 border-black hover:border-t-4" placeholder="Example:- Buy Some Food"
        onChange={handleChange} value={todo} onKeyDown={handleKeyPress}
        />
        <button className="bg-purple-400 hover:bg-purple-500 rounded p-2 text-white text-sm font-bold transition-all disabled:bg-slate-800"
        onClick={handleAdd} disabled={todo.length<=3}
        >{todo.length<=3 ? "No Task":"Add Task"}</button>
        </div>
        </div>
{/* Hiding and showing Finished Tasks */}
<span className="flex gap-3 my-4">
        <input type="checkbox" checked={showFinished} onChange={toggleFinished}/><p> Show Completed Tasks</p>
</span>

{/* Task Cheking and Deleting Code */}

        <h1 className="text-xl font-bold text-center">Your Task / Todo's</h1>
        <div className="todos">
        {todos.length === 0 && <div className="m-5 font-bold text-2xl">No Task has been Created</div>}
{/* map starts here to dynamically show list of todos */}
          {todos.map(item=>{
return(
  // preview of todo list
  (showFinished || !item.isCompleted) &&
          <div  key={item.id} className="todo flex justify-between md:w-fit my-3">

            <div className="flex gap-5">
{/* checkbox starts here  */}
            <input type="checkbox" checked={item.isCompleted} onChange={handleCheckBox} name={item.id} id=""/> 
            <div className={item.isCompleted ? "line-through text-lg" : "font-bold text-xl"}>{item.todo}</div> 
            </div>

            <div className="buttons flex h-full">
              <button className="bg-purple-400 hover:bg-purple-500 rounded p-2 mx-5 text-white text-sm font-bold transition-all"
              onClick={(e)=>{handleEdit(e , item.id)}}
              ><MdEditSquare size={20}/></button>

              <button className="bg-purple-400 hover:bg-purple-500 rounded p-2 mx-0 text-white text-sm font-bold transition-all"
              onClick={(e)=>{handleDelete(e , item.id)}}
              ><MdDeleteForever size={20}/>
              </button>
              </div>
          </div>

          )}).reverse()}
        </div>
      </div>
    </>
  );
}

export default App;


// https://youtu.be/SBuZSalHLe0?si=3BA7hgqWPwuf4ZmG&t=3869