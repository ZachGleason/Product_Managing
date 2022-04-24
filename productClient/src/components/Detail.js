import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';
import '../App.css';
import {Link} from 'react-router-dom';

const Detail = (props) => {
    const {id} = useParams(); 
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5000/product/${id}`)
            .then( res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch( err => console.log(err) )
    }, [id])
    return (
        <div className='detail'>
            <h1>Title:  {product.title} </h1>
            <h3>Price: ${product.price} </h3>
            <h3>Description: {product.description} </h3>
            <Link to={`/`}> Home </Link>
        </div>
    )
}
export default Detail;