import React from 'react';
import Plus from "../assets/plus.png";
import TextField from '@material-ui/core/TextField';
import Tags from './Tags';

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
        <label className="tags-label"><Tags/></label>
      </div>
    </div>
  )
}
