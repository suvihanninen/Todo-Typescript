import React, { useState } from 'react'
import "./styles.css"
import { Todo } from '../model';
import TodoItem from './TodoItem';
import { Droppable } from 'react-beautiful-dnd';


interface Props {
    //setTodo: React.Dispatch<React.SetStateAction<string>>;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;  
    setComplitedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    
}

const TodoList: React.FC<Props> = ({todos, setTodos, completedTodos, setComplitedTodos}: Props) => {

    const renderTodos = () => {
        return (
          <div className='todos-container'>
            {todos.map((todo, index) =>
             !todo.isDone && <TodoItem index={index} todo={todo} setTodos={setTodos} todos={todos}/>)}
          </div>
        );
    }

    return(
        <div className='left-container'>
            <h1 className='title'>Things to do:</h1>
            <Droppable droppableId='TodosList'>
                {(provided)=>(
                 <div className='todos-container' ref={provided.innerRef} {...provided.droppableProps}>
                     {todos.map((todo, index) =>
                     !todo.isDone && <TodoItem index={index} key={index} todo={todo} setTodos={setTodos} todos={todos}/>)}
                     {provided.placeholder}
                 </div>
                )} 
            </Droppable>
            
        </div>
       
    )
}

export default TodoList