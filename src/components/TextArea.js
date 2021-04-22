import React from 'react';
import Plus from "../assets/plus.png";
import TextField from '@material-ui/core/TextField';

export default function TextArea() {
  return (
    <div className="text-area-div">
      <TextField
        label="Description"
        multiline
        rows={4}
        variant="outlined"
        fullWidth={true}
        required={true}
      />
      <div className="tags">
        <button className="tags-btn"><img className="plus-img" src={Plus} alt="+" height="24px"/></button>
        <label className="tags-label">Tags:</label>
        <input className="tags-field" type="text" disabled></input>
      </div>
    </div>
  )
}
