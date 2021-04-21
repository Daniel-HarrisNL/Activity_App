import React from 'react';
import Plus from "../assets/plus.png";

export default function TextArea() {
  return (
    <div className="text-area-div">
      <textarea className="text-area" placeholder="Message..."></textarea>
      <div className="tags">
        <button className="tags-btn"><img className="plus-img" src={Plus} alt="+" height="24px"/></button>
        <label className="tags-label">Tags:</label>
        <input className="tags-field" type="text" disabled></input>
      </div>
    </div>
  )
}
