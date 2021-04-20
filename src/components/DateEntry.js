import React from 'react';
// import { MuiPickersUtilsProvider } from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';

export default function DateEntry(props) {

    // let d = new Date();
    // let n = d.toISOString();

    return (
        <div className="form-entry">
            <label for="date-input" className="date-label">{props.labelWord}</label>
            <input type="datetime-local" className="date-input"/>
            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
            </MuiPickersUtilsProvider> */}
        </div>
    )
}
