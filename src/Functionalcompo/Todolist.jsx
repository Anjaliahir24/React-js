import React, { useState } from 'react'

function Todolist() {
    const[activity,setactivity]=useState("");
    const[Listdata,setListdata]=useState([]);
    function Addactivity(){
        setListdata([...Listdata,activity])
          setactivity('');
          console.log(Listdata)
    }
    function Removeactivity(i){
        const updatelist= Listdata.filter((elem,id)=>{
            return i!=id;
        })
        setListdata(updatelist);
    }
  return (
   <>
  <div className="containerr">
  <h4>Todolist</h4>
  <input type="text" placeholder='Add activites' value={activity} onChange={(e)=>setactivity(e.target.value)}/>
  <button onClick={Addactivity}>Add</button>
  <h4>Here is your list activity:</h4>
  {Listdata!=[] && Listdata.map((data,i)=>{
    return(
        <>
       
       <p key={i}>
          <h5>{data}</h5>
          <button onClick={()=>Removeactivity(i)}>Remove</button>
        </p>
       
        </>
    )
  })}
  {Listdata.length>=1 && <button>All remove</button>}
  
  </div>
   </>
  )
}

export default Todolist
