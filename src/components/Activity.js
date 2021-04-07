import React from 'react';
import "../App.css";
import { v4 as uuidv4 } from 'uuid'; // then use uuidv4() to insert id

import Comments from "../assets/chat.png";
import Avatar1 from "../assets/avatar1.png";
import Avatar2 from "../assets/avatar2.png";
// import Avatar4 from "../assets/avatar4.png";
// import Avatar5 from "../assets/avatar5.png";
// import Avatar6 from "../assets/avatar6.png";
// import Avatar7 from "../assets/avatar7.png";


function Activity(props) {
  let img_desc = props.img_desc;
  let img_tag = "https://source.unsplash.com/138x112/?" + img_desc;
  return (
    <div className="act-container" key={uuidv4()}>
      <img className="act-pic" src={img_tag} alt={props.img_desc} />
      <div className="act-info">
        <div className="act-title">{props.title}</div>
        <div className="act-avatars">
          <img className="act-comment" src={Comments} alt="comments" />
          <div className="act-followers">
            <img className="act-avatar" src={Avatar1} alt="follower" />
            <img className="act-avatar" src={Avatar2} alt="follower" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity
