import React from "react";
import Home from "./Home";
import About from "./About";
import Example from "./Example";
import './App.css';
import Functionrouter from "./Functionalcompo/Functionrouter";
import Classrouter from './Classcompo/Classrouter'
import Contact from "./Contact";
import {createBrowserRouter} from "react-router-dom";
import Register from './Register';


// const Classcompo = import('./Classcompo/Classrouter');
// const Functionalcompo = import('./Functionalcompo/Functionrouter');

const Mainrouter = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/About',
        element:<About/>
    },
    {
        path:'/Contact',
        element:<Contact/>
    },
    {
      path:'/Register',
      element:<Register/>
  },
  
    {
        path:'/Example',
        element:<Example/>,
        children: [
            {
              path: "Classcompo/*",
              element: <Classrouter /> ,
            },
            {
              path: "Functionalcompo/*",
              element: <Functionrouter/>,
            },
          ],
    },


])

export default Mainrouter;