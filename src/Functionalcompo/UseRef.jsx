
import React, { useState } from 'react'
import { useRef } from 'react'

 function UseRef() {
const refElement = useRef("");
const [name, setname] = useState("Anjali");
  console.log(refElement)
  function Reset(){
    setname("")
    refElement.current.focus()
  }
  function handelInput(){
    refElement.current.style.color="blue"
  }
  return (
  <>
   <div className="ref">
   <input  ref={refElement}  type="text"value={name} onChange={(e)=> setname(e.target.value)}/>
   <button onClick={Reset}>Reset</button>
   <button onClick={handelInput}>handel input</button>
   </div>
  </>
  )
};
export default UseRef;