import React, { memo,useContext } from 'react'
import{data,data1}from './Usecontext'

 function Child ({Learning}) {
   const Name = useContext(data);
   const Gender = useContext(data1);
  return (
   <>
   <h4>My name is {Name} and my Gender is {Gender}</h4>
   </>
  )
}
export default   memo(Child);

