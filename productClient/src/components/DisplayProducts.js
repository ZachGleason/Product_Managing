import axios from "axios";
import React from "react";
import '../App.css';
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
                <p>Title:   {product.title}</p>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
                <button><Link to={`/update/${product._id}`}> Update {product.title} </Link></button>
                <button ><Link to={`/product/${product._id}`}> View {product.title}'s Page! </Link></button>
                <button onClick={(e) => {DeleteItem(product._id)}}>Delete</button>
            </div>
            ))}
        </div>
);
};

export default DisplayProducts;
