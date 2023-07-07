import React, { useEffect,useLayoutEffect, useState } from 'react'

function Uselayouteffect() {
    const[name,setname]=useState("anjali")

   useEffect(()=>{
    console.log("useeffect111111")
   })
   useLayoutEffect (()=>{
    console.log("uselayout2222")
   }

   )

  return (
   <>
  
  <div className="out">
   <h4>This is uselayouteffect page</h4>
    <button onClick={()=>setname("ankita")}>state update</button>
  
   </div>
   </>
  )
}

export default Uselayouteffect
