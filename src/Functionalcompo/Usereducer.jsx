
import { useReducer } from "react";

const initalstate=0
const reducer = (state, action)=>{
  switch(action){
    case "Increment":
    return state+1
    case "Decrement":
    return state-1
    default:
      return state
  }
}


function Usereducer() {
 const[count,disptch] = useReducer(reducer,initalstate)
  return (
    <>
    <div className="reducer">
       <div> count={count}</div>
      <button onClick={()=>disptch("Increment")}>Increment</button>
      <button onClick={()=>disptch("Decrement")}>Decrement</button>
    </div>
    </>
  )
};







export default Usereducer
