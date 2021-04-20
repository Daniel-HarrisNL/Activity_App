import React from 'react'
import NavBar from "./NavBar";
import Form from './Form';
import Buttons from './Buttons';
import Footer from './Footer';
import { Link } from 'react-router-dom';

export default function Post() {
    return (
        <>
            <NavBar 
            nav_title="NEW ACTIVITY"/>
            <Form />
            <Link to="/singlepost" >
            <Buttons></Buttons>
            </Link>
            <Footer />
            
        </>
    )
}
