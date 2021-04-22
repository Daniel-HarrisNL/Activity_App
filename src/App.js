import './App.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Feed from "./components/Feed/Feed";
import Post from "./components/CreatePost/Post";
import SinglePost from "./components/ReadPost/SinglePost";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename="/activity-app">
      <div className="App">
        <div className="header">
          <NavBar nav_title="Activity Finder" />
        </div>
        <div className="main">
          <Switch>
            <Route path="/"     exact component={Feed}/>
            <Route path="/feed" exact component={Feed} />
            <Route path="/feed/:cat"  component={Feed} />
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
