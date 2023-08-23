import { Link} from 'react-router-dom';
import '../css/welcome.css'
const Welcome = () => {
    return ( 
        <div className="welcome">
            <img src="https://media.tenor.com/kFy_gqAEkFYAAAAC/amazon-prime-amazon-prime-day.gif" alt="" />
            <marquee behavior="alternate" direction="">CLICK ANYWHERE TO ENTER</marquee>
           <Link to='/login'><span >abc</span></Link>

        </div>
     );
}
 
export default Welcome;