import React from 'react';
import "./test.css"

function Test(props) {


    return (
      <div>
        <div class="text-field">
          <input className="tf" type="text" required />
          <label className="tfl">Input field 1</label>
        </div>

        <div class="text-field">
          <input className="tf" type="text" required />
          <label className="tfl">Input field 2</label>
        </div>
      </div>
    )
}

export default Test
