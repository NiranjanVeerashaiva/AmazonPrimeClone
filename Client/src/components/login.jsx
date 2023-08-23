import { useRef } from "react";
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../css/login.css'
const Login = () => {
    let navigate=useNavigate()
    let email=useRef("")
    let password=useRef("")
    let submit=(a)=>{
        a.preventDefault()
        let data={email:email.current.value,password:password.current.value}
        axios.post('http://localhost:3001/login',data).then((res)=>{
            alert(res.data.message)
            if(res.data.status==200){
               navigate('/home')
            }
        })
        console.log(data);
    }
    return ( 
        <div className="log">
             <marquee behavior="alternate" direction="">LOGIN TO ENTER</marquee>
        <div className="login">
            <form action="" onSubmit={submit}>
                <input type="email" ref={email} placeholder="your email"/>
                <input type="password" ref={password} placeholder="enter password"/>
                <Link to="/signup">signup</Link><br />
                <button>Login</button>
            </form>
        </div>
        </div>
     );
}
 
export default Login;