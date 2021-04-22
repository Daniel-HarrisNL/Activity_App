import React from 'react'
import Activity from "./Activity";
import ScrollMenu from "./ScrollMenu";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function Feed({match}) {
  const feedArray = [
    {
      title: "Looking for biking friends for a trip this weekend",
      img_desc: "biking",
      category: "outdoor"
    },
    {
      title: "Weekly Fortnite Party",
      img_desc: "fortnite",
      category: "games"
    },
    {
      title: "First time rock climbing group going this weekend, available to all.",
      img_desc: "rock,climbing",
      category: "outdoor"
    },
    {
      title: "Yoga class - 3 times a week",
      img_desc: "yoga",
      category: "gym"
    },
    {
      title: "Anyone want a fishing buddy?",
      img_desc: "fishing",
      category: "outdoor"
    },
    {
      title: "Poetry Open Night",
      img_desc: "poetry",
      category: "cafe"
    },
    {
      title: "Swim group, we meet every 2nd Thursday.",
      img_desc: "swimming",
      category: "sports"
    }
  ];

  let search;
  if (match.params.cat === undefined) {
    search = "all";
  } else {
    search = match.params.cat.toLowerCase();  
  }

  return (
    <>
      <div className="search">
        <ScrollMenu />
        <SearchBar />
      </div>
      <div className="act-feed">
      <Link style={{textDecoration: 'none', color: 'inherit'}} to="/singlepost">
        {search === "all" ?
        feedArray.map((e)=>{
          return (
            <Activity 
              img_desc={e.img_desc}
              title={e.title}
            />
            );
          }) :
        feedArray.filter(it => it.category === search).map((e)=>{
          return (
            <Activity 
              img_desc={e.img_desc}
              title={e.title}
            />
            );
          })  
        }
        </Link>
      </div>
      <div className="post">
        <Link to="/post">
          <button className="blue-btn large">New Post</button>
        </Link>
      </div>
    </>
  )
  }

export default Feed
