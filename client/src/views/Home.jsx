import React, { useEffect, useState } from 'react';
import {Link} from '@reach/router';
import Card from '../components/Card';
import { assertExpressionStatement } from '@babel/types';
import axios from 'axios';


const Home = props => {
    const [allProducts, setAllProducts] = useState(null);

    const[reloadAPI, setReloadAPI] = useState(true);
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => setAllProducts(res.data))
            .catch(err => console.log(err))
    },[])

    const update = () =>{
        setReloadAPI(!reloadAPI);
    }
    return(
        <div>
            <h1>Home</h1>
            {
                allProducts ?
                allProducts.map((product, i) => {
                    return <Card product={product} update={update}/>
                })
                :""
            }
        </div>
    );
}

export default Home;