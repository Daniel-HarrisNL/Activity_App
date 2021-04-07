import React from 'react'
import NavBar from "./NavBar.js";
import FormEntry from './FormEntry';

export default function Post() {
    return (
        <>
            <NavBar />
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
        </>
    )
}
