import React from 'react';
import { useReducer } from 'react';


const initState=0

const reducer=(state,action)=>{
     switch(action.type){
        case "Increment":
            state=state+1
            return state;

        case "Decrement":
            state>1?(state=state-1):state=0
            return state;

        default:
            return state;
     }
}

export const Counter=()=>{
   const [state,dispatch]= useReducer(reducer,initState);

    return(
        <>
         <div>
          
            <button onClick={()=>dispatch({type:"Increment"})}>+</button>
            <p>{state}</p>
            <button onClick={()=>dispatch({type:"Decrement"})}>-</button>
         </div>
        </>
    )
}