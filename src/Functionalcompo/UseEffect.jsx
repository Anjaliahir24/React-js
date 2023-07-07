import React from 'react'
import { useEffect,useState } from 'react'

function UseEffect() {
  const [count,setcount]= useState(0);
  useEffect(()=>{
    alert("welcome to this page")
  },[]
  )

  function updatecount(){
    setcount(count+1)
  }
  
  return (
    <>
    <h4>Clicked me {count} times</h4>
    <div className="bt">
    <button onClick={updatecount}> click</button>
    </div>
    </>
  )
}

export default UseEffect
