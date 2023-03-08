import { type } from "os";
import {useReducer} from "react"

export interface Todo {
    id: number;
    todo: string;
    isDone: boolean;

}

// type Actions = 
//     |{type: 'add', payload: string} //when we add a new item to our todo list we will send a new string
//     |{type: 'remove', payload: number} 
//     |{type: 'done', payload: number} 

// //This is the action function that we give to the useReducer
// const TodoReducer = (state: Todo[], action:Actions) =>{
//     switch (action.type) {
//         case "add":
//             return[
//                 ...state,
//                 {id: Date.now(), todo: action.payload, isDone: false}
//             ];
//          case "remove":
//             return[
//                 //The filter method returns a new array that contains
//                 //only the items that match the given condition
//                 //(returns only the IDs which do NOT match the action.payload id)
//                 //We filter them out the ones which DO NOT match the condition
//                 state.filter((todo) => todo.id !== action.payload)
//             ];   
//         case "done":
//             return[
//                state.map((todo) => todo.id == action.payload ? {...todo, isDone: !todo.isDone} : todo)
                
//             ]
//     }
// }

// const ReducerExample = () => {
//     // useReducer takes 2 parameters; action function which is declared above and initial state
//     const[state, dispatch] = useReducer(TodoReducer, [])
//     return(
//         <div></div>
//     )
// }