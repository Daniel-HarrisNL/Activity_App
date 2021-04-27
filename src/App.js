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
      location: "Location",
      description: "Description",
      startDate: "Start Date",
      endDate: "End Date"
    },
    {
      id: 1,
      title: "Weekly Fortnite Party",
      img_desc: "fortnite",
      category: "Games",
      location: "Location",
      description: "Description",
      startDate: "Start Date",
      endDate: "End Date"
    },
    {
      id: 2,
      title: "First time rock climbing group going this weekend, available to all.",
      img_desc: "rock,climbing",
      category: "Outdoor",
      location: "Location",
      description: "Description",
      startDate: "Start Date",
      endDate: "End Date"
    },
    {
      id: 3,
      title: "Yoga class - 3 times a week",
      img_desc: "yoga",
      category: "Gym",
      location: "Location",
      description: "Description",
      startDate: "Start Date",
      endDate: "End Date"
    },
    {
      id: 4,
      title: "Anyone want a fishing buddy?",
      img_desc: "fishing",
      category: "Outdoor",
      location: "Location",
      description: "Description",
      startDate: "Start Date",
      endDate: "End Date"
    },
    {
      id: 5,
      title: "Poetry Open Night",
      img_desc: "poetry",
      category: "Cafe",
      location: "Location",
      description: "Description",
      startDate: "Start Date",
      endDate: "End Date"
    },
    {
      id: 6,
      title: "Swim group, we meet every 2nd Thursday.",
      img_desc: "swimming",
      category: "Sports",
      location: "Location",
      description: "Description",
      startDate: "Start Date",
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
            <Route path="/post"       component={Post}/>
            <Route path="/singlepost" component={SinglePost} />
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
