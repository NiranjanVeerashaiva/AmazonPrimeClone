import axios from "axios";
import '../css/movie.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
const Favorites = () => {
    let params=useParams()
let [fav,setfav]=useState([])
axios.get('https://amazonprimeclone.onrender.com/favMovie')
useEffect(()=>{
let fetchdata=async()=>{
    let response=await axios.get('https://amazonprimeclone.onrender.com/favMovie')
    let data=response.data
    
    setfav(data)
}
fetchdata()
},[])



    return ( 
        <div className="movie1">
        <marquee behavior="alternate" direction="">Click on the movie to watch</marquee>
        <div className="mov">
                {fav.map((x) => {
                    return (
                        <div className="MOV">
                        <Link to={`/watchFav/${x._id}`}><img src={x.image} alt="" /></Link> 
                            <h3 className="name">{x.name}</h3>
                          </div>
                    )
                })}
            </div>
        </div>     
     );
}
 
export default Favorites;