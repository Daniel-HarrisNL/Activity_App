import React from 'react';
import FormEntry from './FormEntry';
import DateEntry from './DateEntry';
import TextArea from './TextArea';

import { FontAwesomeIcon as FAIcon} from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-solid-svg-icons';

export default function Form() {
    return (
        <div className="main-ext">
            <FormEntry
                // labelWord="Title: *"
                placeholderWord="* Title of post"
            />
            <FormEntry
                // labelWord="Category: *"
                placeholderWord="* Category of post"
            />
            <FormEntry
                // labelWord="Location: "
                placeholderWord="* Location (optional)"
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
