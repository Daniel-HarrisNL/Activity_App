import React from 'react';
import "./replyCard.css"

function ReplyCard(props) {

  let id = props.userID;
  let image = require('../../assets/avatar' + id + '.png').default;

  // console.log(image)

  return (
      <div className="reply-card" key={props.userID}>
        <div className="reply-card-avatar">
          <img className="r-c-avatar" alt={props.userName} src={image} />
        </div>
        <div className="reply-card-text">
          <h4>{props.userName}</h4>
          <p>{props.comment.replace(/&#39;/g, "'").replace(/&#8208;/g, "-").replace(/&#44;/g, ",")}</p>
          <p className="r-c-date">{props.datetime}</p>
        </div>
      </div>
  )

}

export default ReplyCard;