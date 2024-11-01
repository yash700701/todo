import React, { useState } from 'react'
import { useTodo } from '../Context/TodoContext'

function ToDoForm() {

  const [todo, setTodo] = useState("")
  const {addTodo} = useTodo()

  const add = (e)=>{
    e.preventDefault()
    if(!todo){
      return
    }
    addTodo({id:Date.now(), todo:todo, completed:false})
    setTodo("")
  }

  return (
    <form onSubmit={add}  className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 text-black rounded-l-lg px-3 outline-none duration-150 bg-white/80 py-1.5"
              value={todo}
              onChange={(e)=> setTodo(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  )
}

export default ToDoForm