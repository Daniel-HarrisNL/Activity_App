import React from 'react';
import "../../App.css";

import Comments from "../../assets/chat.png";
import { useHistory } from "react-router-dom";

function Activity(props) {
  let imgCat = props.category;
  let imgURI = require('../../assets/' + imgCat + '.jpeg').default
  // let imgTag = "https://source.unsplash.com/138x112/?" + imgDesc;
  let history = useHistory();

  const clickHandler = (feedID)=>{
    history.push(`/singlepost/${feedID}`);
  }
  return (
    <div key={props.id} className="act-container" onClick={()=>clickHandler(props.id)}>
      <img className="act-pic" src={imgURI} alt={props.img_desc} />
      <div className="act-info">
        <div className="act-title">{props.title.replace(/&#39;/g, "'").replace(/&#8208;/g, "-").replace(/&#44;/g, ",")}</div>
        <div className="act-avatars">
          <div>{props.category} -&nbsp;</div>
          <img className="act-comment" src={Comments} alt="Comments" />
        </div>
      </div>
    </div>
  )
}

export default Activity
