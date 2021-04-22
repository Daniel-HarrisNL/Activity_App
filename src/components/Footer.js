import React from 'react';
import  { Link } from 'react-router-dom';
import NorthernBlack from "../assets/NorthernLogo.png";

function Footer() {
  return (
      <div className="footer-img">
        <Link to="/feed">
        <img className="main-menu" src={NorthernBlack} alt="Main Menu"/>
        </Link>
      </div>
  )
}

export default Footer
