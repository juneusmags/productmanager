import React from 'react';
import {Link} from '@reach/router';
import Form from '../components/Form'
import axios from 'axios';
import { useState } from 'react';

const Add = props => {
    const [myForm, setMyForm] = useState({
        title : "",
        price : "",
        description : ""
    })

    const [errors, setErrors] = useState({});

    const onChangeHandler = e =>{
        setMyForm({...myForm, [e.target.name]: e.target.value})
    }
    const handleSubmit = e=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/products/create", myForm)
            .then(res =>{
                if(res.data.err){
                    setErrors(res.data.err.errors)
                }
            })


    }
    return(
        <div>
            <h1>Add</h1>
            <Form handleSubmit = {handleSubmit} onChangeHandler = {onChangeHandler} myForm = {myForm} errors = {errors}/>
        </div>
    );
}

export default Add;