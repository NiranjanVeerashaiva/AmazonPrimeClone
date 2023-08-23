import '../css/navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

    <div className="nav">
      <div className="left">
        <div className="navl">
          <Link to="/home" href="">prime video</Link>
        </div>
        <div className="navr">
          <div class="dropdown">
            <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Home
            </button>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><Link to="/home" class="dropdown-item active" href="#">Home</Link></li>
              <li><Link to="/movie" class="dropdown-item" href="#">Movies</Link></li>
              <li><Link to="/addmovie" class="dropdown-item" href="#">Add Movies</Link></li>
              <li><Link to="/favmovie" class="dropdown-item" href="#">Fav Movies</Link></li>



              <li><a class="dropdown-item" href="#">TV shows</a></li>
              <li></li>

            </ul>
          </div>

          <div class="dropdown">
            <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Store
            </button>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item active" href="#">All</a></li>
              <li><a class="dropdown-item" href="#">Rent</a></li>
              <li><a class="dropdown-item" href="#">Channels</a></li>


            </ul>
          </div>

          <div class="dropdown">
            <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categories
            </button>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><Link to="/action" class="dropdown-item active" href="#">Action</Link></li>
              <li><Link to="/crime" class="dropdown-item" href="#">crime</Link></li>
              <li><Link to="/thriller" class="dropdown-item" href="#">Thriller</Link></li>
              <li><Link to="/comedy" class="dropdown-item" href="#">Comedy</Link></li>


            </ul>
          </div>
        </div>
      </div>
      <div className="right">

        <span className='in' class="material-symbols-outlined text-info"><input type="text" placeholder='search' /></span>
        <Link to="/try">Try for free</Link>
        <img src="https://cdn.icon-icons.com/icons2/1146/PNG/96/1486485581-account-audience-person-customer-profile-user_81164.png" alt="" />
        <Link to="/login">Login</Link>
        <Link to="/signup">signup</Link>
      </div>

    </div>
  );
}

export default Navbar;