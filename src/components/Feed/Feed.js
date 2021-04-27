import Activity from "./Activity";
import ScrollMenu from "./ScrollMenu";
import SearchBar from "./SearchBar";


import { FontAwesomeIcon as FAIcon} from '@fortawesome/react-fontawesome';
import { faVideo, faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from "react-router-dom";

function Feed(props) {
  let feedArray = props.feedData;
  
  const { cat } = useParams();

  return (
    <>
      <div className="search">
        <ScrollMenu />
        <SearchBar />
      </div>
      <div className="act-feed">
        {cat === undefined ?
        feedArray.map((e)=>{
          return (
            <Activity
              id={e.id} 
              img_desc={e.img_desc}
              title={e.title}
              category={e.category}
              
            />
            );
          }) :
        feedArray.filter(it => it.category === cat).map((e)=>{
          return (
            <Activity 
              id={e.id} 
              img_desc={e.img_desc}
              title={e.title}
              category={e.category}
            />
            );
          })  
        }
        
      </div>
      <div className="post-buttons">
        <Link to="/post">
          <button className="btn blue-btn large"><FAIcon icon={faStickyNote} color="red" /> New Post</button>
        </Link>
        <Link to="/post">
          <button className="btn blue-btn large"><FAIcon icon={faVideo} color="red" /> New Video</button>
        </Link>          
      </div>
    </>
  )
  }

export default Feed
