
import './App.css';
import { useState } from 'react';
import Details from './Details';
import { Context } from './Context';
import ShowDetail from './ShowDetail';
function App() {

 const[name,setName]=useState("");
 const[age,setAge]=useState("");
 const[show,setShow]=useState(false);  
  return (
    <div className="App">
        <Context.Provider value={{name,setName,age,setAge,setShow}}>
          {show?<ShowDetail/>:<Details/>}
        </Context.Provider>

        </div>
  );
}

export default App;
