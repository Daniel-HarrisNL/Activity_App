import React from 'react'

export default function FormEntry(props) {
    return (
        <div className="form-entry">
            <label for="form-input" className="form-label">{props.labelWord}</label>
            <input className="form-input" placeholder={props.placeholderWord} />
        </div>
    )
}
