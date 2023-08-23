import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './components/login';
import Navbar from './components/navbar';
import Signup from './components/signup';
import Home from './components/home';
import Movie from './components/movies';
import Addmovie from './components/addmovie';
import Comedy from './components/comedy';
import Thriller from './components/thriller';
import Crime from './components/crime';
import Action from './components/action';
import Favorites from './components/favorites';
import Watch from './components/watchMovie';
import Welcome from './components/welcome';
import WatchFav from './components/watchfav';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Welcome/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/movie' element={<Movie/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/addmovie' element={<Addmovie/>}/>
  <Route path='/comedy' element={<Comedy/>}/>
  <Route path='/thriller' element={<Thriller/>}/>
  <Route path='/crime' element={<Crime/>}/>
  <Route path='/action' element={<Action/>}/>
  <Route path='/favmovie' element={<Favorites/>}/>
  <Route path='/watch/:_id' element={<Watch/>}/>
  <Route path='/watchFav/:_id' element={<WatchFav/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;

