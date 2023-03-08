import React, { useEffect, useRef, useState } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { BsTrash, BsCheck, BsPencilSquare, BsXLg } from "react-icons/bs";
import { Todo } from '../model';


interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    index: number;
}



const TodoItem = ({todo, todos, setTodos, index} : Props) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [newTask, setNewTask] = useState<string>(todo.todo);

    //For the useRef we give the type of HTMLInputElement which is the type of the intput tag
    const inputRef = useRef<HTMLInputElement>(null)

    //If we put the editMode=true (change in the editMode state), we put the cursor to the inputbox
    // notice ref={inputRef} in the input tag
    useEffect(()=>{
        inputRef.current?.focus()
    },[editMode])

    function remove(clickedTodo: string) {
        const newTodos = todos.filter((todo) => todo.todo !== clickedTodo);
        setTodos(newTodos)
    }

    const addToDone = (id: number) => {
        const todosUpdated = todos.map((todo) => todo.id == id ? {...todo, isDone: true}:todo)
        setTodos(todosUpdated)
    
    }


    const handleTaskUpdate = (e: React.MouseEvent<HTMLButtonElement>, id: number): void => {
        e.preventDefault();
        const newTodos = todos.map((todo) => todo.id === id ? {...todo, todo:newTask} : todo)
        setTodos(newTodos);
        setNewTask("");
        setEditMode(prev => !prev)
    };

    const handleSubmitEnter = (e: React.FormEvent<HTMLFormElement>, id: number): void => {
        e.preventDefault();
        //Iterate over todos list. If the id matches the todo, we edit it to make it 
        const newTodos = todos.map((todo) => todo.id === id ? {...todo, todo:newTask} : todo)
        setTodos(newTodos);
        setNewTask("");
        setEditMode(prev => !prev)
      }


    const handleTaskChange = (value: string): void => {
        setNewTask(value);
    };

  return (

    <Draggable draggableId={todo.id.toString()} index={index}>
        {(provided)=>(
            <form className='todo-item-container' 
                    onSubmit={(e) => handleSubmitEnter(e, todo.id)}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}>
            {editMode == true ? 
               <div className='input-content'>
                       <input ref={inputRef} className="item-input" type="text" placeholder={todo.todo} value={newTask} onChange={(e)=> handleTaskChange(e.target.value)} />
                       <button className='save-button back-button' onClick={() => setEditMode(prevMode => !prevMode)}>Back</button>
                       <button className='save-button' onClick={(e) => handleTaskUpdate(e, todo.id)}>Save</button>
                  
               </div>
               :
               <div className='item-content'>
                   {todo.todo}
                   <span className="item-icons" style={{ display: 'flex', alignItems: 'center'}}>
                       <BsPencilSquare className="icon" onClick={() => setEditMode(prevMode => !prevMode)}/>
                       <BsTrash onClick={() => remove(todo.todo)}/>
                       <BsCheck size={35} onClick={() => addToDone(todo.id)}/>
                   </span>
               </div>}       
            </form>)
        }
    </Draggable>
  )
}

export default TodoItem

