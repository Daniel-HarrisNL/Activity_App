import React from 'react'
import Form from './Form';
import Buttons from './Buttons';
import { Link } from 'react-router-dom';

export default function Post() {
    return (
        <>
            <Form />
            <Link to="/singlepost" >
              <Buttons></Buttons>
            </Link>            
        </>
    )
}
