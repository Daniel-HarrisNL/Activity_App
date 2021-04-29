import React from 'react';

import { v4 as uuidv4 } from 'uuid'; // then use uuidv4() to insert id
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem } from '@material-ui/core'

import Gym     from "../../assets/barbell.png";
import Games   from "../../assets/controller.png";
import Cafe    from "../../assets/coffee.png";
import Sports  from "../../assets/basketball.png";
import Outdoor from "../../assets/sun.png";
import MeetUp  from "../../assets/users.png";
import Science from "../../assets/rocket.png";
import Chat    from "../../assets/chat.png";

function ScrollMenu(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
    
    const openDrawer = () => {
      setDrawerOpen(true)
    }
    
    const closeDrawer = () => {
      setDrawerOpen(false);
    }

    let categoryArray = [
      {key: 0, src : Cafe,    category : "Cafe"},
      {key: 1, src : Chat,    category : "Chat"},
      {key: 2, src : Gym,     category : "Gym"},
      {key: 3, src : Games,   category : "Games"},
      {key: 4, src : MeetUp,  category : "MeetUp"},
      {key: 5, src : Outdoor, category : "Outdoor"},
      {key: 6, src : Science, category : "Science"},
      {key: 7, src : Sports,  category : "Sports"}
    ]

    return (
      <>
        <button className="category-btn black-btn" id="category-button" onClick={openDrawer} >
          Category
        </button>
        <Drawer open={drawerOpen} onClose={closeDrawer}>
          <List>
            {categoryArray.map((e)=>{
              return (
                <Link key={e.key} className="cat-link" to={`/feed/${e.category}`} onClick={closeDrawer}>
                  <ListItem className="scroll-cat" key={uuidv4()}>
                    <img className="cat-pic" src={e.src} alt={e.category} />
                    <span className="cat-name">{e.category}</span>
                  </ListItem>
                </Link>
                );
              })
            }
          </List>
        </Drawer>
      </>
    )
}

export default ScrollMenu;
