import axios from "axios";
import '../css/categories.css'
import { useEffect, useState } from "react";

const Action = () => {
let [action,setaction]=useState([])
axios.get('http://localhost:3001/movie')
useEffect(()=>{
let fetchdata=async()=>{
    let response=await axios.get('http://localhost:3001/movie')
    let data=response.data
    let res=data.filter((a)=>a.gerne=="action")
    setaction(res)
}
fetchdata()
},[])
    return ( 
        <div className="catagories">
        {action.map((x)=>{
            return(
                <div className="cata">
                    <img src={x.image} alt="" />
                        <h3 className="name">{x.name}</h3>
                </div>
            )
        })}
    </div>
     );
}
 
export default Action;