import React from 'react';
import FormEntry from './FormEntry';
import DateEntry from './DateEntry';
import TextArea from './TextArea';
import Pin from '../assets/pin.png';

export default function Form() {
    return (
        <div className="form">
            <FormEntry
                labelWord="Title: *"
                placeholderWord="Title of post"
            />
            <FormEntry
                labelWord="Category: *"
                placeholderWord="Category of post"
            />
            <FormEntry
                labelWord="Location: "
                placeholderWord="Location (optional)"
            />
            <DateEntry
                labelWord="Start date/time: *"
            />
            <DateEntry
                labelWord="End date/time: "
            />
            <div className="required">* Required fields</div>
            <TextArea></TextArea>

            <div className="attached">Attached Media:</div>
            <img className="pin" src={Pin} alt="paper clip"></img>
        </div>

    )
}
