import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Feed from "./components/Feed/Feed";
import Post from "./components/CreatePost/Post";
import SinglePost from "./components/ReadPost/SinglePost";
import Test from "./components/CreatePost/Test";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  let userID = sessionStorage.getItem("currentUserID");
  if (!userID) {
    sessionStorage.setItem("currentUserID", 0);
    sessionStorage.setItem("currentName", "Remy Sharpe");
  }

  const [feedArray, setfeedArray] = useState([]);

  useEffect(() => {
    getPostsForFeed();
  }, []);

  const getPostsForFeed = async () => {

    const response = await axios.get("http://johnny-o.net/activity-app/php-react/get-posts.php");

    setfeedArray(response.data)
    console.log(response.data)
  }



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
            <Route path="/test"       component={Test} />
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
