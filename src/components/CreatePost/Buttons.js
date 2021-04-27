import React from 'react'
import { useHistory } from "react-router-dom";

export default function Buttons() {
    let history = useHistory();
	
    return (
        <div className="post post-buttons">     
            <button className="btn black-btn large" onClick={()=>history.push("/feed")}>Cancel</button>
            <button type="submit" className="btn blue-btn large" onClick={()=>history.push("/singlepost/0")}>Submit</button>
            {/* Above line should push to /singlepost/postID when new-posts feature is added */}
        </div>
    )
}
