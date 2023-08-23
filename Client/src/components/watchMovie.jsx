import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/watchmovie.css' 
import axios from 'axios';
const Watch = () => {
    let params=useParams()
    let [movie,setMovie]=useState([])
    
    // axios.get(`http://localhost:3001/movie/${params._id}`)
    useEffect(()=>{
      let fetchdata=async()=>{
        let response=await axios.get(`https://amazonprimeclone.onrender.com/movie`)
        console.log(response);
        let data=response.data
        setMovie(data)
        
      }
      fetchdata()
    },[])
    let submit=(id)=>{
      movie.filter((x)=>{
        if(x._id==id){
          axios.post('https://amazonprimeclone.onrender.com/favorite',x).then((res)=>{
            console.log(x);
           alert(res.data.message)
        })
        }
      })
    }
    return ( 
      <div className="watch">
      <div className="mov">
          {movie.map((x) => {
              if(x._id==params._id){
              return (
                  <div className="image">
                      <img src={x.image} alt="" />
                      <div className="content">
                          <div className="c">
                          <h1>{x.name}</h1>
                          <p className="des">{x.description}</p>
                          <p className="det">IMDb {x.IMDb}&nbsp;&nbsp;&nbsp; {x.time}&nbsp;&nbsp;&nbsp; {x.year} &nbsp;&nbsp;&nbsp;{x.quality}&nbsp;&nbsp;&nbsp; {x.gerne} </p>
                          <button className="fav" onClick={()=>submit(x._id)}>Add to favorites</button>
                          <button className="wa">Watch now</button>
                          </div>
                      </div>
                  </div>
              )
              }
          })}
      </div>
  </div>
  
     );
}
 
export default Watch;