import React from 'react';
import axios from 'axios';
import { useState } from 'react';


const Form = props =>{
   const {handleSubmit, onChangeHandler, myForm, errors} = props;
    
    
    
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input onChange = {onChangeHandler} type = "text" name = "title"/>
                {
                    errors.title ? <span>{errors.title.message}
                    </span> : ""
                }
            </div>
            <div>
                <label>Price</label>
                <input onChange = {onChangeHandler} type = "text" name = "price"/>
                {
                    errors.price ? <span>{errors.price.message}
                    </span> : ""
                }
            </div>
            <div>
                <label>Description</label>
                <textarea onChange = {onChangeHandler} name = "description"></textarea>
                {
                    errors.description ? <span>{errors.description.message}
                    </span> : ""
                }
            </div>
            <input type = "submit" value ="Submit"/>

        </form>
    )
}

export default Form;