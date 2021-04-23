import Avatar from "../assets/avatar.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";

function NavBar(props) {
  let history = useHistory();
  return (
      <div className="nav-bar">
        <label className="main-menu" onClick={()=>history.push("/feed")}>
          <FontAwesomeIcon icon={faBars} size='2x'/>
        </label>
        <h2>{props.nav_title}</h2>
        <img className="avatar" src={Avatar} alt="My Profile"/>
      </div>
  )
}

export default NavBar
