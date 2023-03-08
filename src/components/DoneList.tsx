import React from 'react'
import { Todo } from '../model';
import { BsTrash} from "react-icons/bs";
import { Draggable, Droppable } from 'react-beautiful-dnd';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    setComplitedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
}

const DoneList: React.FC<Props> = ({todos, setTodos, completedTodos, setComplitedTodos}) => {
    const doneTodos = todos.filter((todo) => todo.isDone === true);

    function remove(clickedTodo: string) {
      const newTodos = todos.filter((todo) => todo.todo !== clickedTodo);
      setTodos(newTodos)
  }

    return (
      <div className='right-container'>
         <h1 className='title'>Things done:</h1>
         <Droppable droppableId='TodosRemove'>
            {(provided) => (
                  <div className='todos-container' ref={provided.innerRef} {...provided.droppableProps}>
                  {doneTodos.map((todo, index) => (
                     <Draggable draggableId={todo.id.toString()} index={index}>
                     {(provided)=>(
                        <div className='todo-item-container' key={todo.id}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}>
                          <span>{todo.todo}</span>
                          <BsTrash className='trash-icon' onClick={() => remove(todo.todo)}/>
                              </div>)
                      }
                      </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
            )}
          </Droppable>
      </div>
     
    );
}

export default DoneList
