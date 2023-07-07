import React,{useEffect,useState} from 'react';


const Apifetching = () => {
    const[counter,setCounter]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos").then((result)=>{
        result.json().then((response)=>{
            console.log(response);
            setCounter(response)
        })
       
        })

    },[]);
     console.log(counter)
    return (
     <>
      <h1>This is my apifetching page</h1>
      <table border='1' width='70%' >
        <tr>
        <td>userId</td>
            <td>id</td>
            <td>title</td>
            <td>completed</td> 
        </tr>
               {          
               counter.map((a)=>
                <tbody>
                    <tr>
                        <td>{a.userId}</td>
                        <td>{a.id}</td>
                        <td>{a.title}</td>
                        <td>{a.completed  ? "true" : "false"}</td>
                    </tr>
                </tbody>
                )
            }
      </table>
     </>
    );
};

export default Apifetching;