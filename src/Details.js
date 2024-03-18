import { useContext } from "react"
import { Context } from "./Context";

function Details(){
    const{setName,setAge,setShow}=useContext(Context);

    return(
        <div className="inputBox">
            <input type="text" placeholder="Enter Your Name" onChange={(val)=>{setName(val.target.value)}}/>
            <input type="number" placeholder="Enter your Age" onChange={(val)=>{setAge(val.target.value)}}/>
            <button onClick={()=>setShow(true)}>Click</button>
        </div>
    )
}

export default Details;