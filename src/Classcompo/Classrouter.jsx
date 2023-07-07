
import React, {Component} from 'react';
import { Route, Routes } from 'react-router-dom';
import Classcompomenu from './Classcompomenu';
import State from './State';


class Classrouter extends Component {
  render(){
  return (
    <>
      <Routes>
        <Route path="/" element={<Classcompomenu />}>
          <Route path="/State" element={< State/>} />
          
        </Route>
      </Routes>

    </>
  )
  }
}


export default Classrouter;
