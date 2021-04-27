import './App.css';

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Feed from "./components/Feed/Feed";
import Post from "./components/CreatePost/Post";
import SinglePost from "./components/ReadPost/SinglePost";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  // When backend is added, this feedArray should be defined empty and then read in all the array data from the backend.
  const feedArray = [
    {
      id: 0,
      title: "Looking for biking friends for a trip this weekend",
      img_desc: "biking",
      category: "Outdoor",
      location: "Red Cliff trail",
      description: "I wanted to do a bit of mountain biking, anyone down to take a trip up the trail with me?",
      startDate: "Saturday-Sunday",
      endDate: "End Date"
    },
    {
      id: 1,
      title: "Weekly",
      img_desc: "fortnite",
      category: "Games",
      location: "Online",
      description: "Bored of Covid!",
      startDate: "Tonight, 9pm",
      endDate: "End Date"
    },
    {
      id: 2,
      title: "First time rock climbing group going this weekend, available to all.",
      img_desc: "rock,climbing",
      category: "Outdoor",
      location: "Contact me",
      description: "We ordered a group package deal, if anyone wants to get in on this drop me a message!",
      startDate: "Saturday",
      endDate: "End Date"
    },
    {
      id: 3,
      title: "Yoga class - 3 times a week",
      img_desc: "yoga",
      category: "Gym",
      location: "Campus Gym",
      description: "There's a small $15 fee to cover equipment rentals! Water and light snacks provided.",
      startDate: "Monday, Wednesday, Friday",
      endDate: "End Date"
    },
    {
      id: 4,
      title: "Anyone want a fishing buddy?",
      img_desc: "fishing",
      category: "Outdoor",
      location: "Trout Pond",
      description: "I got a small boat but all my friends are busy, anyone want to go out for a trip?",
      startDate: "Contact me",
      endDate: "End Date"
    },
    {
      id: 5,
      title: "Poetry Open Night",
      img_desc: "poetry",
      category: "Cafe",
      location: "Campus library",
      description: "Come join us! I bet you're a poet and you didn't even know it.",
      startDate: "Tuesday April 27, 7pm",
      endDate: "End Date"
    },
    {
      id: 6,
      title: "Swim group, we meet every 2nd Thursday.",
      img_desc: "swimming",
      category: "Sports",
      location: "Local pool",
      description: "Anyone can join, lots of fun! Dont wanna miss out on some water games.",
      startDate: "Thursday",
      endDate: "End Date"
    }
  ];


  return (
    <Router basename="/activity-app">
      <div className="App">
        <div className="header">
          <NavBar nav_title="Activity Finder" />
        </div>
        <div className="main">
          <Switch>
            <Route path="/"     exact render={()=><Feed feedData={feedArray}/>}/>
            <Route path="/feed" exact render={()=><Feed feedData={feedArray}/>} />
            <Route path="/feed/:cat"  render={()=><Feed feedData={feedArray}/>} />
            <Route path="/post"       render={()=><Post feedData={feedArray}/>}/>
            <Route path="/singlepost/:postID" render={()=><SinglePost feedData={feedArray}/>} />
          </Switch>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  )
  
}

export default App;
