import React from 'react';
import AirbnbLogo from '../assets/images/airbnb-logo.png'

function Navbar() {
  return(
      <nav className="navbar">
        <img className="navbar--logo" 
             src={AirbnbLogo} 
             alt="airbnb logo"/>
      </nav>
  )
}

export default Navbar