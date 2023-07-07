
import React,{ Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Usestate from './Usestate';
import UseEffect from './UseEffect';
import Functioncompomenu from './Functioncompomenu';
import Usememo from './Usememo';
import UseCallback from './UseCallback';
import UseRef from './UseRef';
import Usecontext from './Usecontext';
import Usereducer from './Usereducer';
import Uselayouteffect from './Uselayouteffect';
import Todolist from './Todolist';
import Apifetching from './Apifetching';
import Curdop from './Curdop';

class Functionrouter extends Component {
  render(){
  return (
    <>
      <Routes>
        <Route path="/" element={<Functioncompomenu />}>
          <Route path="UseState" element={< Usestate/>} />
          <Route path="UseEffect" element={<UseEffect />} />
          <Route path="UseMemo" element={<Usememo />} />
          <Route path="UseCallback" element={<UseCallback />} />
          <Route path="UseRef" element={<UseRef />} />
          <Route path="UseContext" element={<Usecontext />} />
          <Route path="UseReducer" element={<Usereducer />} />
          <Route path="UseLayouteffect" element={<Uselayouteffect />} />
          <Route path="TodoList" element={<Todolist/>} />
          <Route path="ApiFetching" element={<Apifetching/>} />
          <Route path="CurDop" element={<Curdop/>} />
          
          
        </Route>
      </Routes>

    </>
  )
  }
}

export default Functionrouter;
