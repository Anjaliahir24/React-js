import React, { useState } from 'react'

function Curdop() {
    const [Inputs, setInputs] = useState({
        name: "",
        email: "",
    });

    const handleChange = (e) => {
        setInputs(
            {
                ...Inputs,
                [e.target.name]: e.target.value
            });

    }
    const [counter, setcounter] = useState([]);
    const [editclick,seteditclick]=useState(false)
    const [click,setclick]=useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
       if(editclick ){
           const temtable=counter;
           Object.assign(temtable[click],Inputs)
           setcounter([...temtable]);
           seteditclick(false)
       }
       else{
    
       setcounter([...counter, Inputs])
       setInputs({
           name: "",
           email: "",
       })
       }
    }
    const handleDelete = (index) => {
        const filterData = counter.filter((item, i) => i !== index)
        setcounter(filterData)
    }
   
    const handleEdit = (index) => {
        const temData = counter[index];
       
        setInputs(
            {
                name: temData.name,
                email: temData.email,
            });
            seteditclick(true)
            setclick(index)
            
    };

    return (
        <>
            <h4>Curd operation</h4>
            <div className='fm'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Name:
                            <input type="text" name='name' Value={Inputs.name} onChange={handleChange} />
                        </label>

                    </div>
                    <div>
                        <label>
                            Gmail:
                            <input type="email" name='email' value={Inputs.email} onChange={handleChange} />
                        </label>
                    </div>
                    <div className="op-btn">
                        <button type='submit'>
                            {editclick?"Update":"Add"}</button>
                    </div>
                </form>
            </div>
            <table className='tb'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {counter.map((item, i) => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>
                                <button onClick={() => handleEdit(i)}>Edit</button>
                                <button onClick={() => handleDelete(i)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Curdop
