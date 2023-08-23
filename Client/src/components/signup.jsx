import { useRef } from "react";
import '../css/signup.css'
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
const Signup = () => {
    let navigate=useNavigate()
    let name=useRef("")
    let email=useRef("")
    let password=useRef("")
    let confirmpassword=useRef("")
    let submit=(a)=>{
        a.preventDefault()
        let data={name:name.current.value,email:email.current.value,password:password.current.value,confirmpassword:confirmpassword.current.value}

           if(data.name && data.email && data.password && (data.password==data.confirmpassword)){
       axios.post('http://localhost:3001/signup',data).then((res)=>{
        alert(res.data.message)
        navigate('/login')
       })
    }

        else{
            alert("invalid credentials")
        }
    }
    return ( 
        <div className="sign">
            <marquee behavior="alternate" direction="">PLEASE SIGNUP AND LOGIN TO ENTER</marquee>
        <div className="signup">
            <form action="" onSubmit={submit}>
                <input type="text" ref={name} placeholder="enter your name" />
                <input type="email" ref={email} placeholder="enter your email" />
                <input type="password" ref={password} placeholder="enter password"  />
                <input type="password" ref={confirmpassword} placeholder="confirm password"  />
                <Link to="/login">Already have an Account ?</Link>
            <button>signup</button>
            </form>
        </div>
        </div>
     );
}
 
export default Signup;