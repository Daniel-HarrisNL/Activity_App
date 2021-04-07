import React from 'react'
import Activity from "./Activity";
import ScrollMenu from "./ScrollMenu";
import SearchBar from "./SearchBar";
import Footer from "./Footer";

function Feed() {
  return (
    <>
      <ScrollMenu />
      <SearchBar />
      <div className="act-feed">
        <Activity 
          img_desc="biking"
          title="Looking for biking friends for a trip this weekend"
        />
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
      <button className="blue-btn large">NEW POST</button>
      <Footer />
    </>
  )
}

export default Feed
