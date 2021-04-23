import React from 'react';
import "../../App.css";

import Comments from "../../assets/chat.png";

function Activity(props) {
  let imgDesc = props.img_desc;
  let imgTag = "https://source.unsplash.com/138x112/?" + imgDesc;
  return (
    <div className="act-container" key={props.id}>
      <img className="act-pic" src={imgTag} alt={props.img_desc} />
      <div className="act-info">
        <div className="act-title">{props.title}</div>
        <div className="act-avatars">
          <div>{props.category}</div>
          <img className="act-comment" src={Comments} alt="Comments" />
        </div>
      </div>
    </div>
  )
}

export default Activity
