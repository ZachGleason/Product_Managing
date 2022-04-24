import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
const Detail = (props) => {
    const {id} = useParams(); 
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get("http://localhost:8000/product/" + id)
            .then( res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch( err => console.log(err) )
    }, [])
    return (
        <div>
            <p>Title: {product.title}</p>
        </div>
    )
}
export default Detail;