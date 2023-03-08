import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import './App.css';
import DoneList from './components/DoneList';
import InputField from "./components/InputField";
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import { Todo } from './model';
import { DragDropContext } from 'react-beautiful-dnd'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")

  /*This is how we can create a type of an interface
  so the todos state will have an array of Todo interfaces*/
  const [todos, setTodos] = useState<Todo[]>([])
  const [completedTodos, setComplitedTodos] = useState<Todo[]>([])

  /*Notice the type on event,
  We also defined the event in InputField 
  where we pass the handle add function as a prop*/
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if(todo){
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}])
      setTodo("")
    }

  } 

  return (
    <DragDropContext onDragEnd={()=>{}}>
      <div className='App'>  
        <div className='top-container'>
          <span className='heading'>🌱 todo 🌸</span>
          <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        </div>
        <div className='bottom-container'>
          <TodoList todos={todos} setTodos={setTodos} setComplitedTodos={setComplitedTodos} completedTodos={completedTodos}/>
          <DoneList todos={todos} setTodos={setTodos} setComplitedTodos={setComplitedTodos} completedTodos={completedTodos}/>
        </div>
      </div>
    </DragDropContext>
    
  )
}

export default App
