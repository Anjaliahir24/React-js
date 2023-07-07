
import React,{useCallback, useState} from 'react'
import Child from './Child '

export default function UseCallback() {
    const[add,setadd]=useState(0)
    const Learning = useCallback(  ()=>{
    //    somewwedbb
        },[] )

  return ( 
    <>
    <div className="memo">
        <Child Learning={Learning}/>
    <h4>{add}</h4>
     <button onClick={()=>setadd(add +1)}>Addition</button>
    </div>

    </>
  )
}
