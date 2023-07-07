import { Link,Outlet } from 'react-router-dom'
import React from 'react'
import Header from './Commoncompo/Header'

const Example = () => {
  return (
   <>
   <Header/>
   <div className="container">
                <div className="row my-3">
                    <div className="col-6">
                        <Link to="Classcompo">Class Component</Link>
                    </div>
                    <div className="col-6">
                        <Link to="Functionalcompo">Functional Component</Link>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col">
                       
                    </div>
                </div>
            </div>
            <Outlet/>
   </>
  )
}

export default Example
