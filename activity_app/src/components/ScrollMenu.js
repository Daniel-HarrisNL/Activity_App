import React from 'react';
import Gym from "../assets/barbell.png";
import Games from "../assets/controller.png";
import Cafe from "../assets/coffee.png";
import Sports from "../assets/basketball.png";
import Outdoor from "../assets/sun.png";
import MeetUp from "../assets/users.png";
import Science from "../assets/rocket.png";
import Chat from "../assets/chat.png";

function ScrollMenu() {
  return (
    <div className="scroll-menu">
      <div className="scroll-cat">
        <img className="cat-pic" src={Gym} alt="Gym" />
        <span className="cat-name">Gym</span>
      </div>
      <div className="scroll-cat">
        <img className="cat-pic" src={Games} alt="Games" />
        <span className="cat-name">Games</span>
      </div>
      <div className="scroll-cat">
        <img className="cat-pic" src={Cafe} alt="Cafe" />
        <span className="cat-name">Cafe</span>
      </div>
      <div className="scroll-cat">
        <img className="cat-pic" src={Sports} alt="Sports" />
        <span className="cat-name">Sports</span>
      </div>
      <div className="scroll-cat">
        <img className="cat-pic" src={Outdoor} alt="Outdoor" />
        <span className="cat-name">Outdoor</span>
      </div>
      <div className="scroll-cat">
        <img className="cat-pic" src={MeetUp} alt="Meet-Up" />
        <span className="cat-name">Meet-Up</span>
      </div>
      <div className="scroll-cat">
        <img className="cat-pic" src={Science} alt="Science" />
        <span className="cat-name">Science</span>
      </div>
      <div className="scroll-cat">
        <img className="cat-pic" src={Chat} alt="Gym" />
        <span className="cat-name">Chat</span>
      </div>
    </div>
  )
}

export default ScrollMenu
