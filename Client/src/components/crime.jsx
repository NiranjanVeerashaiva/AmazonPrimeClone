import axios from "axios";
import '../css/categories.css'
import { useEffect, useState } from "react";

const Crime = () => {
let [crime,setaction]=useState([])
axios.get('https://amazonprimeclone.onrender.com/movie')
useEffect(()=>{
let fetchdata=async()=>{
    let response=await axios.get('https://amazonprimeclone.onrender.com/movie')
    let data=response.data
    let res=data.filter((a)=>a.gerne=="crime")
    setaction(res)
}
fetchdata()
},[])
    return ( 
        <div className="catagories">
        {crime.map((x)=>{
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
 
export default Crime;