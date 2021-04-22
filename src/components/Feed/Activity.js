import React from 'react';
import "../../App.css";
import { v4 as uuidv4 } from 'uuid'; // then use uuidv4() to insert id

import Comments from "../../assets/chat.png";

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
        </div>
      </div>
    </div>
  )
}

export default Activity
