import React from 'react';
import FormEntry from './FormEntry';
import DateEntry from './DateEntry';
import TextArea from './TextArea';

import { FontAwesomeIcon as FAIcon} from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-solid-svg-icons';

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DateTimePicker from '@material-ui/lab/DateTimePicker';
import { makeStyles } from '@material-ui/core/styles';

export default function Form() {
    const [startDate, setStartDate] = React.useState(new Date());
    const [endDate, setEndDate] = React.useState(new Date());

    const [value, setValue] = React.useState();
    const [category, setCategory] = React.useState('');

    const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    };

    const handleChange = (event) => {
      setValue(event.target.value);
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

    const classes = useStyles();
    // 2017-05-24T10:30
    const datestring = ( startDate.getDate()).toString().padStart(2, "0") + "-" + 
                       ((startDate.getMonth()+1)).toString().padStart(2, "0") + "-" +
                         startDate.getFullYear() + " " +
                        (startDate.getHours()).toString().padStart(2, "0") + ":" +
                        (startDate.getMinutes()).toString().padStart(2, "0");
    
                        console.log(datestring)

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
              id="datetime-local"
              label="Start Date/Time"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              className={classes.textField}
              required={true}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
          <form className={classes.container} noValidate>
            <TextField
              id="datetime-local"
              label="End Date/Time"
              type="datetime-local"
              defaultValue={endDate}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </div>
        {/* <div className="date-entry">
          <DateEntry
            labelWord="* Start date/time:"
          />
          <DateEntry
            labelWord="End date/time:"
          />
        </div> */}
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
