import { useState } from 'react';
import TextArea from './TextArea';

import { FontAwesomeIcon as FAIcon} from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-solid-svg-icons';

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

function Form() {
  
  const [category, setCategory] = useState('')
  
  const handleCategoryChange = (event) => {
  setCategory(event.target.value);
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
    <div className="main-ext stretched">
      <div className="required">* Required fields</div>
      <TextField 
        label="Title" 
        variant="outlined" 
        fullWidth={true}
        required={true}
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
      />
      
      <div className="date-entry"> 
        <form className={classes.container} noValidate>
          <TextField
            id="datetime-local-start"
            label="Start Date/Time"
            type="datetime-local"
            className={classes.textField}
            required={true}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
        <form className={classes.container} noValidate>
          <TextField
            id="datetime-local-end"
            label="End Date/Time"
            type="datetime-local"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </div>
      <TextArea></TextArea>

      <div className="attached">
        <div className="media-buttons">Attached Pic<br />
        <FAIcon icon={faImages} color="blue" size="2x" /></div>
        <div className="media-buttons">Record Video<br />
        <FAIcon icon={faVideo} color="red" size="2x" /></div>
      </div>
    </div>
  )
}

export default Form
