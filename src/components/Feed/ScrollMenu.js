import React from 'react';

import { v4 as uuidv4 } from 'uuid'; // then use uuidv4() to insert id
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Gym     from "../../assets/barbell.png";
import Games   from "../../assets/controller.png";
import Cafe    from "../../assets/coffee.png";
import Sports  from "../../assets/basketball.png";
import Outdoor from "../../assets/sun.png";
import MeetUp  from "../../assets/users.png";
import Science from "../../assets/rocket.png";
import Chat    from "../../assets/chat.png";

function ScrollMenu() {
  const [drawerOpen, setDrawerOpen] = useState(false);
    
    const openDrawer = () => {
      setDrawerOpen(true)
    }
    
    const closeDrawer = () => {
      setDrawerOpen(false);
    }

    let categoryArray = [
      {"src" : Cafe,    "category" : "Cafe"},
      {"src" : Chat,    "category" : "Chat"},
      {"src" : Gym,     "category" : "Gym"},
      {"src" : Games,   "category" : "Games"},
      {"src" : MeetUp,  "category" : "MeetUp"},
      {"src" : Outdoor, "category" : "Outdoor"},
      {"src" : Science, "category" : "Science"},
      {"src" : Sports,  "category" : "Sports"}
    ]

    return (
      <>
        <button className="category-button black-btn" id="category-button" onClick={openDrawer} >
          Sort By Category
        </button>
        <Drawer open={drawerOpen} onClose={closeDrawer}>
          <List>
            {categoryArray.map((e)=>{
              return (
                <Link className="cat-link" to={`/feed/${e.category}`} onClick={closeDrawer}>
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
