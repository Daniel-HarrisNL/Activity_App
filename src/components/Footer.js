import React from 'react';
import  { Link } from 'react-router-dom';
import NorthernBlack from "../assets/NorthernLogo.png";

function Footer() {
  return (
      <>
        <Link to="/feed">
        <img className="main-menu" src={NorthernBlack} alt="Main Menu"/>
        </Link>
      </>
  )
}

export default Footer
