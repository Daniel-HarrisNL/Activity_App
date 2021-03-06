import { useState } from 'react';
import { useHistory } from "react-router-dom";


import Buttons from './Buttons';
import Tags from './Tags';

import { FontAwesomeIcon as FAIcon} from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-solid-svg-icons';

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import useMaterialUiStyleFixer from '../../useMaterialUiStyleFixer';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    rowGap: '4px',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 176,
    marginTop: 8,
  },
}));

function Form(props) {

  let history = useHistory();
  // State data currently doesn't work properly. Does not harm the program as is however.
  // The attempt is to submit the form data and push to the main feedArray, and re-render the feed with the new post.
  // let dataArray = props.feedData;
  let userID   = sessionStorage.getItem("currentUserID");
  let userName = sessionStorage.getItem("currentName");

  console.log(userID, userName);

  const [newPost, setNewPost] = useState({"user_id": userID, "user_name": userName});

  // Storing the Insert Post Form Data.
  const addNewPost = (e, field) => {
    setNewPost({
      ...newPost,
      [field]: e.target.value,
    });
  };

  // Inserting a new post into the Database.
  const submitPost = (e) => {
    e.preventDefault();
    insertPost(newPost);
    e.target.reset();
    console.log(newPost);
  };
  
  const insertPost = (newPost) => {
    fetch("http://johnny-o.net/activity-app/php-react/add-post.php", {
      method: "POST",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost),
    })
    .then((response)=>{
      return response.text()
    })
    .then((text) => {
      let newNewId = text;
      history.push(`/singlepost/${newNewId}`)
    }, (error) => {
      console.log(error);
    });

  };
 
  const classes = useStyles();

  //Add this code to *any* page that has issues with material ui styling and it should fix it.
  //This is stupid, but it works. What a hack.
  useMaterialUiStyleFixer();

  return (
    <form onSubmit={submitPost} className="main-ext stretched">
      <div className="required">* Required fields</div>
      <TextField 
        label="Title" 
        variant="outlined" 
        fullWidth={true}
        required={true}
        onChange={(e) => addNewPost(e, "title")}
        margin="dense"
      />
      <p class="margin-buffer">&nbsp;</p>
      <FormControl variant="outlined" className="text-field-margin" fullWidth={true}>
        <InputLabel>Category</InputLabel>
        <Select
            labelId="cat-select-outlined-label"
            id="cat-select-outlined"
            onChange={(e) => addNewPost(e, "category")}
            required={true}
            label="Category"
            defaultValue=" "
        >
          <MenuItem value={" "}       > </MenuItem>            
          <MenuItem value={"Cafe"}    >Cafe</MenuItem>
          <MenuItem value={"Chat"}    >Chat</MenuItem>
          <MenuItem value={"Gym"}     >Gym</MenuItem>
          <MenuItem value={"Games"}   >Games</MenuItem>
          <MenuItem value={"MeetUp"}  >Meet Up</MenuItem>
          <MenuItem value={"Outdoor"} >Outdoor</MenuItem>
          <MenuItem value={"Sports"}  >Sports</MenuItem>
          <MenuItem value={"Science"} >Science</MenuItem>
          <MenuItem value={"Other"}   >Other</MenuItem>
        </Select>
      </FormControl>
      <p class="margin-buffer">&nbsp;</p>
      <TextField 
        label="Location" 
        variant="outlined" 
        fullWidth={true}
        required={true}
        onChange={(e) => addNewPost(e, "location")}
      />
      
      <div className="date-entry"> 
        <div className={classes.container} noValidate>
          <TextField
            id="date-start"
            label="Start Date"
            type="date"
            className={classes.textField}
            // required={true}
            InputLabelProps={{
              shrink: true,
            }}
            required={true}
            onChange={(e) => addNewPost(e, "start_date")}
          />
        </div>
        <div className={classes.container} noValidate>
          <TextField
            id="date-end"
            label="End Date"
            type="date"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => addNewPost(e, "end_date")}
          />
        </div>
        <div className={classes.container} noValidate>
          <TextField
            id="time-start"
            label="Start Time"
            type="time"
            className={classes.textField}
            required={true}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => addNewPost(e, "start_time")}
          />
        </div>
        <div className={classes.container} noValidate>
          <TextField
            id="time-end"
            label="End Time"
            type="time"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => addNewPost(e, "end_time")}
          />
        </div>
      </div>
      <p class="margin-buffer">&nbsp;</p>
      <div className="text-area-div">
        <TextField
          label="Description"
          multiline
          rows={4}
          variant="outlined"
          fullWidth={true}
          required={true}
          onChange={(e) => addNewPost(e, "description")}
        />
        <div className="tags">
          <label className="tags-label"><Tags/></label>
        </div>
      </div>
      <div className="attached">
        <div className="media-buttons">Attached Pic<br />
        <FAIcon icon={faImages} color="blue" size="2x" /></div>
        <div className="media-buttons">Record Video<br />
        <FAIcon icon={faVideo} color="red" size="2x" /></div>
      </div>
      <Buttons></Buttons>              
    </form>
  )
}

export default Form
