import React,{useMemo, useState} from 'react'

export default function Usememo() {
    const[add,setadd]=useState(0)
    const[min,setmin]=useState(100)
    
    const multi = useMemo(function multi(){
        return add*10
    },[add])
    
  return (
   <>
  <div className="memo">
    {multi}<br/>
  <button onClick={()=>setadd(add +1)}>Addition</button>
   <span>{add}</span> <br/>
   <button onClick={()=>setmin(min -1)}>Substraction</button>
    <span>{min}</span>
  </div>
   </>
  )
}
