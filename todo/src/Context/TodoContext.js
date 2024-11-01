import { createContext, useContext } from "react";

export const todoContext = createContext({
  todos: [{
    todo: "",
    id: 1,
    completed: false,
  }],
  addTodo: (todo)=>{},
  deleteTodo: (id)=>{},
  updateTodo: (id, todo)=>{},
  toggleCompleted: (id)=>{},
})
export const useTodo = ()=>{
  return useContext(todoContext)
}
export const TodoProvider = todoContext.Provider