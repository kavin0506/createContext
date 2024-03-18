import { useContext } from "react"
import { Context } from "./Context"

const ShowDetail=()=>{
    const{name,age}=useContext(Context)
    return(
        <div>
            <p>{name}</p>
            <p>{age}</p>
        </div>
    )
}
export default ShowDetail;