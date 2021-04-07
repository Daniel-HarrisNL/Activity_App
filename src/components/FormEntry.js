import React from 'react'

export default function FormEntry(props) {
    return (
        <div className="form-entry">
            <label for="search-input">{props.labelWord}</label>
            <input className="search-input" placeholder={props.placeholderWord} />
        </div>
    )
}
