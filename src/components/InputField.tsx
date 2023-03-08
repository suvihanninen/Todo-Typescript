import React, { useEffect, useRef, useState } from 'react'
import "./styles.css"
import { BsPlusLg } from "react-icons/bs";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void; /* Giving the function the a type function */
}

const InputField = ({todo, setTodo, handleAdd} : Props) => {
    useEffect(() => {
        renderInput()
      }, [todo]);
    

    /** With useRef we hook components with HTML*/
    const inputRef = useRef<HTMLInputElement>(null)

    function renderInput(): string {
      return todo
    }
  
    
  return (
    <div className='input-box-container'>
        <form className='input' onSubmit={(e)=>{handleAdd(e)
                                                inputRef.current?.blur()}}>
            <input type="input" placeholder='Enter a task' 
            className='input-box'
            ref={inputRef} 
            value={todo} 
            onChange={(e) => setTodo(e.target.value)}/>
            <button className='input-submit' type='submit'>{<BsPlusLg color="white" fontSize="1em"/>}</button>
        </form>
        <div className="chatwindow-thread">
        {renderInput()}
        </div>
    </div>
   
  )
}

export default InputField
