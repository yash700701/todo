import { useEffect, useState } from 'react'
import { TodoProvider } from './Context/TodoContext'

import  ToDoForm from './components/ToDoForm'
import  ToDoItems from './components/ToDoItems'

function App() {
  
  const [todos, setTodos] = useState([])

  const addTodo = (todo)=>{
    setTodos((prev)=> [...prev , todo])
  }
  const deleteTodo = (id)=>{
    setTodos((prev)=> prev.filter((prevTodo)=> prevTodo.id !== id))
  }
  const updateTodo = (todo, id)=>{
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id ? todo : prevTodo))
  }
  const toggleCompleted = (id)=>{
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length >0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])
  


  return (
  <TodoProvider value={{todos, addTodo, deleteTodo, updateTodo, toggleCompleted}}>
   <div className="bg-slate-900 min-h-screen py-8">
    <div className="w-1/2 mx-auto shadow-xl rounded-lg px-4 py-3 text-white">
    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
     <div >
      {/* form */}
      <ToDoForm/>

     </div>
     <div>
      {/* list */}
      {todos.map((todo)=>(
        <div
        key={todo.id}
        className='w-full'>
        <ToDoItems todo={todo}/>
        </div>
      ))}

     </div>
    </div>
   </div>
  </TodoProvider> 
  )
}

export default App
