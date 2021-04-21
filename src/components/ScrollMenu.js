import React from 'react';
import { useState } from 'react'
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Gym from "../assets/barbell.png";
import Games from "../assets/controller.png";
import Cafe from "../assets/coffee.png";
import Sports from "../assets/basketball.png";
import Outdoor from "../assets/sun.png";
import MeetUp from "../assets/users.png";
import Science from "../assets/rocket.png";
import Chat from "../assets/chat.png";

function ScrollMenu() {
  const [drawerOpen, setDrawerOpen] = useState(false);
    
    const openDrawer = () => {
      setDrawerOpen(true)
    }
    
    const closeDrawer = () => {
      setDrawerOpen(false);
    }

    return (
      <div >
        <button className="category-button" onClick={openDrawer} >
          Activity Categories
        </button>
        <Drawer open={drawerOpen} onClose={closeDrawer}>
          <List>
            <ListItem className="scroll-cat">
              <img className="cat-pic" src={Gym} alt="Gym" />
              <span className="cat-name">Gym</span>
            </ListItem>
            <ListItem className="scroll-cat">
              <img className="cat-pic" src={Games} alt="Games" />
              <span className="cat-name">Games</span>
            </ListItem>
            <ListItem className="scroll-cat">
              <img className="cat-pic" src={Cafe} alt="Cafe" />
              <span className="cat-name">Cafe</span>
            </ListItem>
            <ListItem className="scroll-cat">
              <img className="cat-pic" src={Sports} alt="Sports" />
              <span className="cat-name">Sports</span>
            </ListItem>
            <ListItem className="scroll-cat">
              <img className="cat-pic" src={Outdoor} alt="Outdoor" />
              <span className="cat-name">Outdoor</span>
            </ListItem>
            <ListItem className="scroll-cat">
              <img className="cat-pic" src={MeetUp} alt="MeetUp" />
              <span className="cat-name">MeetUp</span>
            </ListItem>
            <ListItem className="scroll-cat">
              <img className="cat-pic" src={Science} alt="Science" />
              <span className="cat-name">Science</span>
            </ListItem>
            <ListItem className="scroll-cat">
              <img className="cat-pic" src={Chat} alt="Chat" />
              <span className="cat-name">Chat</span>
            </ListItem>
          </List>
        </Drawer>
      </div>
    )
}

export default ScrollMenu;
