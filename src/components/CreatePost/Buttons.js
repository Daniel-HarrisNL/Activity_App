import React from 'react'
import { useHistory } from "react-router-dom";

export default function Buttons() {
    let history = useHistory();
	
    return (
        <div className="post post-buttons">     
            <button className="black-btn large" onClick={()=>history.push("/feed")}>Cancel</button>
            <button className="blue-btn large" onClick={()=>history.push("/singlepost")}>Submit</button>
        </div>
    )
}
