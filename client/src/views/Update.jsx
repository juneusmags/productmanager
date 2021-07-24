import React, { useEffect } from 'react';
import {Link} from '@reach/router';
import Form from '../components/Form'
import axios from 'axios';
import { useState } from 'react';



const Update = props => {

    const [myForm, setMyForm] = useState({})

    const [errors, setErrors] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props._id}`)
        .then(res => setMyForm(res.data))
        .catch(err => console.log(err))
    },[])

    const onChangeHandler = e =>{
        setMyForm({...myForm, [e.target.name]: e.target.value})
    }
    const handleSubmit = e =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/update/${props._id}`, myForm)
            .then(res =>{
                if(res.data.err){
                    setErrors(res.data.err.errors)
                }
            })


    }
    return(
        <div>
            <h1>Update</h1>
            <Form handleSubmit = {handleSubmit} onChangeHandler = {onChangeHandler} myForm = {myForm} errors = {errors}/>

        </div>
    );
}

export default Update;