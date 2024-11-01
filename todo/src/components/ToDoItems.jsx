import React, { useState } from 'react'
import { useTodo } from '../Context/TodoContext'


function ToDoItems({todo}) {

  const {toggleCompleted, updateTodo,  deleteTodo} = useTodo  ()
  
  const [TodoEditable, setTodoEditable] = useState(false)
  const [mssge, setMssge] = useState(todo.todo)

  const toggleComp = ()=>{
    toggleCompleted(todo.id)
  }
  const editTodo = ()=>{
    updateTodo(todo.id, {...todo, todo:mssge})
    setTodoEditable(false)
    // setMssge("")
  }
  const delTodo = ()=>{
    deleteTodo(todo.id)
  }

  return (
    <div  className={`flex border border-black/10 my-2 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
    }`}>
      <input 
      type="checkbox"
      className='cursor-pointer'
      checked={todo.completed}
      onChange={toggleComp} 
      />
      <input 
      type="text"
      className={`border outline-none w-full bg-transparent rounded-lg ${
        TodoEditable ? "border-black/10 px-2" : "border-transparent"
      } ${todo.completed ? "line-through" : ""}`}
      value={mssge}
      onChange={(e)=> setMssge(e.target.value)}
      readOnly={!TodoEditable}
      />
    <button
     className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
     disabled={todo.completed}
     onClick={()=>{
        if(TodoEditable){
          editTodo()
        }else{
            setTodoEditable((prev)=>!prev)
        }
     }}
    >
       {TodoEditable ? "📁" : "✏️"}
    </button>
    <button 
    className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
    onClick={delTodo}
     >
    ❌
    </button>
   
    </div>
  )
}

export default ToDoItems