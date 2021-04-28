import { useState } from 'react';

import TextArea from './TextArea';
import Buttons from './Buttons';

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
  let dataArray = props.feedData;

  const handleSubmit = (event) => {
    event.preventDefault();
    let newPost = {
      id: dataArray.length,
      title: title,
      img_desc: "school",
      category: category,
      location: location,
      description: "Description",
      startDate: startDate,
      endDate: endDate
    }
    props.feedData.push(newPost); 
  };
  
  const [title, setTitle] = useState('')
  const handleTitleChange = (event) => {
  setTitle(event.target.value);
  };

  const [category, setCategory] = useState('')
  const handleCategoryChange = (event) => {
  setCategory(event.target.value);
  };

  const [location, setLocation] = useState('')
  const handleLocationChange = (event) => {
  setLocation(event.target.value);
  };

  const [startDate, setStartDate] = useState('')
  const handleStartChange = (event) => {
  setStartDate(event.target.value);
  };

  const [endDate, setEndDate] = useState('')
  const handleEndChange = (event) => {
  setEndDate(event.target.value);
  };
 
  const [startTime, setStartTime] = useState('')
  const handleStartTimeChange = (event) => {
  setStartTime(event.target.value);
  };

  const [endTime, setEndTime] = useState('')
  const handleEndTimeChange = (event) => {
  setEndTime(event.target.value);
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
    <form onSubmit={handleSubmit} className="main-ext stretched">
      <div className="required">* Required fields</div>
      <TextField 
        label="Title" 
        variant="outlined" 
        fullWidth={true}
        required={true}
        value={title}
        onChange={handleTitleChange}
      />
        
      <FormControl variant="outlined" className="text-field-margin" fullWidth={true} required={true}>
        <InputLabel>Category</InputLabel>
        <Select
            labelId="cat-select-outlined-label"
            id="cat-select-outlined"
            value={category}
            onChange={handleCategoryChange}
            label="Category"
        >
            
          <MenuItem value={"Cafe"}>Cafe</MenuItem>
          <MenuItem value={"Sports"}>Sports</MenuItem>
          <MenuItem value={"Outdoor"}>Outdoor</MenuItem>
          <MenuItem value={"Meet Up"}>Meet Up</MenuItem>
          <MenuItem value={"Science"}>Science</MenuItem>
          <MenuItem value={"Other"}>Other</MenuItem>
        </Select>
      </FormControl>
      <TextField 
        label="Location" 
        variant="outlined" 
        fullWidth={true}
        value={location}
        onChange={handleLocationChange}
      />
      
      <div className="date-entry"> 
        <div className={classes.container} noValidate>
          <TextField
            id="date-start"
            label="Start Date"
            type="date"
            className={classes.textField}
            required={true}
            InputLabelProps={{
              shrink: true,
            }}
            value={startDate}
            onChange={handleStartChange}
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
            value={endDate}
            onChange={handleEndChange}
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
            value={startTime}
            onChange={handleStartTimeChange}
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
            value={endTime}
            onChange={handleEndTimeChange}
          />
        </div>
        
      </div>
      <TextArea></TextArea>

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
