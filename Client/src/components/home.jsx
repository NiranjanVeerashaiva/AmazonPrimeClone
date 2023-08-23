import { useNavigate } from 'react-router-dom';
import '../css/home.css'
const Home = () => {
    let navigate = useNavigate()
    return (
        <div className="home">
            <div className="body1">
                <div className="bodytext">
                    <h1>Welcome to prime video</h1>
                    <h4>Watch the latest tv shows, movies, award winning Amazon Originals</h4>
                    <button onClick={() => navigate('/signup')}>sign in to join prime</button>
                </div>


            </div>
            <div className="body2">
                <div className="bodytext2">
                    <h1>Movie Rental on Prime Video</h1>
                    <h4>Early access to new movies, befor digital subscription</h4>
                    <button>Rent movie</button>
                </div>
            </div>
            <div className="body3 row">
                <div className="body3lefts col-6">
                    <h1>Your favorite channels all in one place</h1>
                    <h4>With Prime Video Channels, find shows and movies from your favorite channels all in one place. Enjoy with an add-on subscription to Channels of your choice</h4>
                </div>
                <div className="body3rights col-6">
                    <button>LIONSGATE PLAY</button>
                    <button>Discovery+</button>
                    <button>eurosNow</button>
                    <button>manrowmax</button>
                    <button>hoichoi</button>
                    <button>VF ott</button>
                    <button>amc+</button>
                    <button>DOCUBAY</button>
                    <button>MUBI</button>
                    <button>iwonder</button>
                    <button>SRINGRAY</button>
                    <button>curiosity</button>
                </div>
            </div>
            <div className="body4">
                <div className="bodytext4">
                    <h1>Even better with Fire TV Stick</h1>
                    <h4>The biggest movies and TV shows are always better on a big screen. Simply plug in your Amazon Fire TV Stick and stream on any HDTV. Press the voice button on the remote and say the name of the title you want to watch to find it in seconds.</h4>
                    <button>Get started</button>
                </div>
            </div>
        </div>

    );
}

export default Home;