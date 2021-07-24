import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const Card = props =>{
    const deleteProduct = _id =>{
        axios.delete(`http://localhost:8000/api/products/delete/${_id}`)
        .then(() => props.update())
        .catch(err => console.log(err))
    }
    return(
        <div>
            <h1><Link to = {`/products/${props.product._id}`}>{props.product.title}</Link></h1>
            <h2>{props.product.price}</h2>
            <h2>{props.product.description}</h2>
            <button onClick ={ () => deleteProduct(props.product._id)}>Delete</button>
            <Link to = {`/products/update/${props.product._id}`}><button>Edit</button></Link>
        </div>
    );
}

export default Card;