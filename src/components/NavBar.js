import { useState, useEffect } from "react";
import axios from "axios";
import "./navBar.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";
import Typography from '@material-ui/core/Typography';

function NavBar() {

  let history = useHistory();


  const userID      = sessionStorage.getItem("currentUserID");
  const userName    = sessionStorage.getItem("currentName");
  const userImage   = require('../assets/avatar' + userID + '.png').default;
  const userAltDesc = userName + "'s Profile";

  // console.log(userID, userName, userImage, userAltDesc);

  const [users, setUsers]                     = useState([]);
  const [currentUserID, setCurrentUserID]     = useState(userID);
  const [currentUserName, setCurrentUserName] = useState(userName);
  const [currentUserImg, setCurrentUserImg]   = useState(userImage);
  const [altDesc, setAltDesc]                 = useState(userAltDesc);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {

    const response = await axios.get("http://johnny-o.net/activity-app/php-react/get-users.php");

    setUsers(response.data)
  }

  // console.log("useState ", users)

  function changeUser(changeUserID) {
    let newUserID = changeUserID;
    let newUserName = users[newUserID - 1].name;
    let newUserImg = require('../assets/avatar' + newUserID + '.png').default;
    let newUserTag = newUserName + "'s Profile";

    setCurrentUserID(newUserID);
    setCurrentUserName(newUserName);
    setCurrentUserImg(newUserImg);
    setAltDesc(newUserTag);

    console.log(currentUserName)

    sessionStorage.setItem("currentUserID", newUserID);
    sessionStorage.setItem("currentName", newUserName);
  }

  // users table
  // id | name | email | join_date | dark_mode
  // require('../assets/avatar' + e.id + '.png').default

  if(users.length === 0){
    return <Typography>Loading... please wait!</Typography>
  }

  return (
      <div className="nav-bar">
        <label className="main-menu" onClick={()=>history.push("/feed")}>
          <FontAwesomeIcon icon={faBars} size='2x'/>
        </label>
        <h2>Activity Finder</h2>
        <div className="dropdown">
          <button className="dropbtn"><img className="avatar" src={currentUserImg} alt={altDesc}/></button>
          <div className="dropdown-content">
            {users.filter(it => it.id !== currentUserID).map((e)=>{
              let image = require('../assets/avatar' + e.id + '.png').default;
              let changeID = e.id;
              return (
                <button key={changeID} onClick={() => changeUser(changeID)}>{e.name} <img className="dropdown-avatar" src={image} alt={e.name}/></button>
                );
              })}
          </div>
        </div>
      </div>
  )
}

export default NavBar
