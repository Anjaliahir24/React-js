import React, { Component } from "react";
import { Link,Outlet } from "react-router-dom";


class Functioncompomenu extends Component{
    render(){
       return(
        <>
        <div className="row">
            <div className="col-6 offset-6">
                <ul>
                    <li><Link to="Usestate">Usestate</Link></li>
                    <li><Link to="UseEffect">UseEffect</Link></li>
                    <li><Link to="Usememo">UseMemo</Link></li>
                    <li><Link to="UseCallback">UseCallback</Link></li>
                    <li><Link to="UseRef">UseRef</Link></li>
                    <li><Link to="UseContext">UseContext</Link></li>
                    <li><Link to="Usereducer">Usereducer</Link></li>
                    <li><Link to="Uselayouteffect">Uselayouteffect</Link></li>
                    <li><Link to="Todolist">Todolist</Link></li>
                    <li><Link to="Apifetching">Apifetching</Link></li>
                    <li><Link to="Curdop">Curdoperation</Link></li>
                </ul>
            </div>
        </div>
        <Outlet/>
        </>
       
       )
    }
}
export default Functioncompomenu;