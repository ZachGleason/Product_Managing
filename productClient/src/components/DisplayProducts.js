import axios from "axios";
import React from "react";
import '../App.css'
import {Link} from 'react-router-dom';

const DisplayProducts = (props) => {
        const { removeObj } = props;
            const DeleteItem = ( productId) => {
                alert('product deleted')
                axios.delete('http://localhost:5000/delete/' + productId)
                .then(res => removeObj(productId))
                .catch((err) => console.log(err))
        }

    return (
        <div className="productbox">
            {props.products.map((product, index) => (  
            <div key={index} className='items'>
                <img src={product.imageUrl} alt="image" />
                <button onClick={(e) => {DeleteItem(product._id)}}>Delete</button>
                <p>Title:   {product.title}</p>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
                <Link to={`/product/${product._id}`}> {product.title}'s Page! </Link>
            </div>
            ))}
        </div>
);
};

export default DisplayProducts;
