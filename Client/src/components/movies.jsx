import { useEffect, useState } from 'react';

import '../css/movie.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Movie = () => {
  let [movie, setMovie] = useState([])
  axios.get('http://localhost:3001/movie')
  useEffect(() => {
    let fetchdata = async () => {
      let response = await axios.get('http://localhost:3001/movie')
      console.log(response);
      let data = response.data
      setMovie(data)
    }
    fetchdata()
  }, [])


  return (

    <div className="movie1">
        <marquee behavior="alternate" direction="">Click on the movie to watch</marquee>
        <div className="mov">
          {movie.map((x) => {
            return (
              <div className="MOV">
            <Link to={`/watch/${x._id}`}><img src={x.image} alt="" /></Link> 
                <h3 className="name">{x.name}</h3>
              </div>
            )
          })}
        </div>
      </div>

  );
}

export default Movie;
