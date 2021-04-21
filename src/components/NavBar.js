import React from 'react';
import { Link } from 'react-router-dom';

import Menu from "../assets/menu.png";
import Avatar from "../assets/avatar.png";

function NavBar(props) {
  return (
      <div className="nav-bar">
        <Link to="/feed">
          <img className="main-menu" src={Menu} alt="Main Menu"/>
        </Link>
        <h2>{props.nav_title}</h2>
        <img className="avatar" src={Avatar} alt="My Profile"/>
      </div>
  )
}

export default NavBar
