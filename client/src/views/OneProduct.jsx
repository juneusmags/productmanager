import React, { useEffect, useState } from 'react';
import axios from 'axios';



const OneProduct = props => {
    const [oneProduct, setOneProduct] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props._id}`)
            .then(res => setOneProduct(res.data))
            .catch(err => console.log(err))
    },[])
    console.log(oneProduct)
    return(
        <div>
            <h1>{props._id}</h1>
            
           {

                oneProduct ? <>
                <div>
                    <div>
                        <h2>{oneProduct.title}</h2>
                        <h2>{oneProduct.price}</h2>
                        <h2>{oneProduct.description}</h2>
                    </div>
                </div>
           </>:""
           }
        </div>
    );
}

export default OneProduct;