import { useEffect, useState } from 'react'
import { TodoProvider } from './Context'
import ToDoForm from './components/ToDoForm'
import ToDoItems from './components/ToDoItems'


function App() {
  
  const [todos, setTodos] = useState([])

  const addTodo = (todo)=>{
    setTodos((prev)=> [{...todo}, ...prev])
  }
  const updateTodo = (todo, id)=>{
    setTodos((prev)=> prev.map((prevTodo)=> (prevTodo.id === id ? todo : prevTodo)))
  }
  const deleteTodo = (id)=>{
    setTodos((prev)=> prev.filter((prevTodo)=>(prevTodo.id !== id)))
  }
  const toggleComplete = (id)=>{
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
     <div className="bg-cyan-950 min-h-screen py-8">
                <div className="w-4/5 max-w-2xl bg-white text-black mx-auto shadow-md rounded-lg px-4 py-3">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <ToDoForm/>
                       
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {
                          todos.map((todo)=>(
                            <div key={todo.id} className='w-full'>
                              <ToDoItems todo={todo}/>
                            </div>
                          ))
                        }
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
