import React from 'react';
import Menu from "../assets/menu.png";
import Avatar from "../assets/avatar.png";

function NavBar(props) {
  return (
      <div className="nav-bar">
      
        <img className="main-menu" src={Menu} alt="Main Menu"/>
        <h2>{props.nav_title}</h2>
        <img className="avatar" src={Avatar} alt="My Profile"/>
      </div>
  )
}

export default NavBar
