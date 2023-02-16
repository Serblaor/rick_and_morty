import { Link} from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import "./CSS/Nav.css"
import logo from "../img/Rick-and-Morty-500x281.png"
import { useState } from 'react';

export default function Nav(props) {
  const [showNav, setShowNav] = useState(false);


  function toggleNav() {
    setShowNav(!showNav);
  }

  return (
    <div className="Nav">
      <button className="toggleNav" onClick={toggleNav}>
        Menú
      </button>
      <div className={`menu ${showNav ? "show" : ""}`}>
       
          <div className={`imgNav`}>
            <Link to={"/home"}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
       
          <div className={`searchNav`}>
            <SearchBar onSearch={props.onSearch} />
          </div>
      
          <div className={`homeNav`}>
            <Link to={"/home"}>
              <span>Home</span>
            </Link>
          </div>
       
          <div className={`FavoritesNav`}>
            <Link to={"/favorites"}>
              <span>Favorites</span>
            </Link>
          </div>
       
          <div className={`aboutNav`}>
            <Link to={"/about"}>
              <span>About</span>
            </Link>
          </div>
          
		  </div>  
      <div className={`logoutNav`}>
    <button onClick={() => props.logout()}>Logout</button>
  </div>
</div> 
  
  );
}