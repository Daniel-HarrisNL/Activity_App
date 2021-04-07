import React from 'react';

import Menu from "../assets/menu.png";
import Avatar from "../assets/avatar.png";

function NavBar() {
  return (
      <div className="nav-bar">
        <img className="main-menu" src={Menu} alt="Main Menu"/>
        <h2>ACTIVITY FINDER</h2>
        <img className="avatar" src={Avatar} alt="My Profile"/>
      </div>
  )
}

export default NavBar
