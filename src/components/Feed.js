import React from 'react'
import Activity from "./Activity";
import ScrollMenu from "./ScrollMenu";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar.js";
import { Link } from "react-router-dom";

function Feed() {
  return (
    <>
      <div className="search">
        <ScrollMenu />
        <SearchBar />
      </div>
      <div className="act-feed">
        <Link style={{textDecoration: 'none', color: 'inherit'}} to="/singlepost">
        <Activity 
          img_desc="biking"
          title="Looking for biking friends for a trip this weekend"
        />
        </Link>
        <Activity 
          img_desc="rock,climbing"
          title="First time rock climbing group going this weekend, available to all."
        />
        <Activity 
          img_desc="fishing"
          title="Anyone want a fishing buddy?"
        />
        <Activity 
          img_desc="swimming"
          title="Swim group, we meet every 2nd Thursday."
        />
      </div>
      <div className="post">
        <Link to="/post">
          <button className="blue-btn large">NEW POST</button>
        </Link>
      </div>
    </>
  )
  }

export default Feed
