import { useRef } from "react";
import '../css/addmovie.css'
import axios from "axios";
const Addmovie = () => {
    let name=useRef("")
    let image=useRef("")
    let gerne=useRef("")
    let year=useRef("")
    let description=useRef("")
    let time=useRef("")
    let IMDb=useRef("")
    let quality=useRef("")
    
    let submit=(a)=>{
        a.preventDefault()
        let data={name:name.current.value,image:image.current.value,gerne:gerne.current.value,description:description.current.value,year:year.current.value,IMDb:IMDb.current.value,time:time.current.value,quality:quality.current.value}
        axios.post('http://localhost:3001/addmovie',data).then((res)=>{
            alert(res.data.message)
        })
    }
    return ( 
        <div className="add">
        <div className="addmovie">
                 <form action="" onSubmit={submit}>
            <input type="text" ref={name} placeholder="movie name" />
            <input type="imageURL" ref={image} placeholder="imageurl" />
            <input type="text" ref={gerne} placeholder="enter gerne" />
            <input ref={IMDb}  type="number" pattern="[0-9]{4}"  placeholder='enter IMDb' />
            <input ref={year} pattern="[0-9]{4}" type="number" placeholder='enter year' />
            <input ref={time} type="text" placeholder='enter time' />
            <input ref={quality} type="text" placeholder='enter quality' />
            <input type="text" ref={description} placeholder="description"/>
            <button>add movie</button>
        </form>
        </div>
        </div>
     );
}
 
export default Addmovie;