import React from 'react';
import HeaderImage from '../assets/images/images-group.png'

function Header() {
  return(
      <header className="section header">
        <img className="header--img"
            src={HeaderImage} 
            alt="all the activities you can discover using airbnb"/>
        
        <h1 className="header--title">Online Experiences</h1>
        <h2 className="header--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </h2>
      </header>
  )
}

export default Header