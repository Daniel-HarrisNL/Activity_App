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

export default function Form() {
    const [value, setValue] = React.useState();
    const [category, setCategory] = React.useState('');

    const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    };

    const handleChange = (event) => {
      setValue(event.target.value);
    };


    return (
        <div className="main-ext stretched">
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
            <TextField 
              label="Start date" 
              variant="outlined" 
              fullWidth={true}
            />
             <TextField 
              label="End date" 
              variant="outlined" 
              fullWidth={true}
            />
            <div className="date-entry">
              <DateEntry
                labelWord="* Start date/time:"
              />
              <DateEntry
                labelWord="End date/time:"
              />
            </div>
            <div className="required">* Required fields</div>
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
