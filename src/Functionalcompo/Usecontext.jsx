import { createContext } from 'react';
import Child from './Child ';

const data = createContext();
const data1= createContext();

function Usecontext(){
   const Name="Anjali";
   const Gender="female";  

   return(
    <>
    <data.Provider value={Name}>
        <data1.Provider value={Gender}>
    <Child/>
    </data1.Provider>
    </data.Provider>
    </>
   )
}
export default Usecontext;
export {data,data1}