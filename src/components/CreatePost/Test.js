import React from 'react';
import "./test.css"
import Buttons from './Buttons';
import { FontAwesomeIcon as FAIcon} from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import { images } from "../Avatars";
import { useImage } from 'react-image'

function TestReplyCard() {

  let id = 2;
  let image = require('../../assets/avatar' + id + '.png').default;

  console.log(image)

  return (
    <div className="main-ext stretched">
      <div className="reply-card">
        <div className="reply-card-avatar">
          <img className="r-c-avatar" src={image} />
        </div>
        <div className="reply-card-text">
          <h4>Jane Doe</h4>
          <p>Where should we meet?</p>
          <p class="r-c-date">April 25, 2021 - 6:78 pm</p>
        </div>
      </div>
    </div>
  )


}


// function Test(props) {
//     const submitPost = (e) => {}

//     return (
//       <form onSubmit={submitPost} className="main-ext stretched">
//         <div className="required">* Required fields</div>
//         <div className="text-field">
//           <input className="tf" type="text" required />
//           <label className="tfl">Title *</label>
//         </div>
//         <div className="text-field">
//           <input className="tf" type="text" required />
//           <label className="tfl">Input field 2</label>
//         </div>
//         <div className="text-field">
//           <input className="tf" type="text" required />
//           <label className="tfl">Location</label>
//         </div>
//         <div className="text-field">
//           <input className="tf" type="datetime-local" required />
//           <label className="tfl date">Start Date/Time</label>
//         </div>
//         <div className="text-field">
//           <input className="tf" type="datetime-local" required />
//           <label className="tfl date">End Date/Time</label>
//         </div>
//         <div className="text-field">
//           <textarea className="tf" rows="4" required ></textarea>
//           <label className="tfl">Description</label>
//         </div>
//         <div className="attached">
//           <div className="media-buttons">Attached Pic<br />
//           <FAIcon icon={faImages} color="blue" size="2x" /></div>
//           <div className="media-buttons">Record Video<br />
//           <FAIcon icon={faVideo} color="red" size="2x" /></div>
//         </div>
//         <Buttons></Buttons>
//       </form>
//     )
// }

export default TestReplyCard
