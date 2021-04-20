import './App.css';
import Feed from "./components/Feed";
import Post from "./components/Post";
import SinglePost from "./components/SinglePost";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    
  return (
      <Router>
          <div className="App">
              <Switch>
                  <Route path="/" exact component={Feed}/>
                  <Route path="/feed" exact component={Feed}/>
                  <Route path="/post" exact component={Post}/>
                  <Route path="/singlepost" exact component={SinglePost} />
              </Switch>
          </div>
      </Router>
  )
  
}

export default App;
