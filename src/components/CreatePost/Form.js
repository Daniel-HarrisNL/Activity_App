import { useState } from 'react';

import Buttons from './Buttons';
import Tags from './Tags';
import axios from "axios"

import { FontAwesomeIcon as FAIcon} from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-solid-svg-icons';

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

function Form(props) {
  // State data currently doesn't work properly. Does not harm the program as is however. The attempt is to submit the form data and push to the main feedArray, and re-render the feed with the new post.
  // let dataArray = props.feedData;
  let userID   = sessionStorage.getItem("currentUserID");
  let userName = sessionStorage.getItem("currentName");

  const [newPost, setNewPost] = useState({"user_id": userID, "user_name": userName});

  // Storing the Insert User Form Data.
  const addNewPost = (e, field) => {
    setNewPost({
      ...newPost,
      [field]: e.target.value,
    });
  };

  // Inserting a new user into the Database.
  const submitPost = (e) => {
    e.preventDefault();
    insertPost(newPost);
    e.target.reset();
    console.log(newPost);
  };

  const getFormData = object => Object.keys(object).reduce((formData, key) => {
    formData.append(key, object[key]);
    return formData;
  }, new FormData());
  
  const insertPost = (newPost) => {
    let newPostData = getFormData(newPost);
    
    axios("http://johnny-o.net/activity-app/php-react/add-post.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
  };

  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 176,
    },
  }));
  
  const classes = useStyles()
    
  return (
    <form onSubmit={submitPost} className="main-ext stretched">
      <div className="required">* Required fields</div>
      <TextField 
        label="Title" 
        variant="outlined" 
        fullWidth={true}
        required={true}
        onChange={(e) => addNewPost(e, "title")}
      />
        
      <FormControl variant="outlined" className="text-field-margin" fullWidth={true} required={true}>
        <InputLabel>Category</InputLabel>
        <Select
            labelId="cat-select-outlined-label"
            id="cat-select-outlined"
            onChange={(e) => addNewPost(e, "category")}
            label="Category"
            defaultValue="Other"
        >
            
          <MenuItem value={"Cafe"}    >Cafe</MenuItem>
          <MenuItem value={"Chat"}    >Chat</MenuItem>
          <MenuItem value={"Gym"}     >Gym</MenuItem>
          <MenuItem value={"Games"}   >Games</MenuItem>
          <MenuItem value={"Meet Up"} >Meet Up</MenuItem>
          <MenuItem value={"Outdoor"} >Outdoor</MenuItem>
          <MenuItem value={"Sports"}  >Sports</MenuItem>
          <MenuItem value={"Science"} >Science</MenuItem>
          <MenuItem value={"Other"}   >Other</MenuItem>
        </Select>
      </FormControl>

      <TextField 
        label="Location" 
        variant="outlined" 
        fullWidth={true}
        onChange={(e) => addNewPost(e, "location")}
      />
      
      <div className="date-entry"> 
        <div className={classes.container} noValidate>
          <TextField
            id="datetime-local-start"
            label="Start Date/Time"
            type="datetime-local"
            className={classes.textField}
            required={true}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => addNewPost(e, "start_datetime")}
          />
        </div>
        <div className={classes.container} noValidate>
          <TextField
            id="datetime-local-end"
            label="End Date/Time"
            type="datetime-local"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => addNewPost(e, "end_datetime")}
          />
        </div>
      </div>
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
