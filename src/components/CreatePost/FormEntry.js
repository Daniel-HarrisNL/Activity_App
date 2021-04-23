import React from 'react'

function FormEntry(props) {
    return (
        <div className="form-entry">
            <label for="form-input" className="form-label">{props.labelWord}</label>
            <input className="form-input" placeholder={props.placeholderWord} />
        </div>
    )
}

export default FormEntry