import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams} from "react-router-dom";
import {Link} from 'react-router-dom';
import '../App.css';

const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const [headerTitle, setHeaderTitle] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:5000/product/${id}`)
        .then((res) => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
            setHeaderTitle(res.data.title);
        })
        .catch(err => console.log(err))
        }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/product/${id}`, {
            title,
            price,
            description,
    })
    .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/");
    })
    .catch((err) => {console.log(err)})
    }

    return (
        <div>
            <h1 className='product'>Update {headerTitle}</h1>
                    <form onSubmit={ updateProduct } className="form">

                        <label htmlFor="title" className='updating'>Title</label>
                        <input type="text" onChange={(e) =>{ setTitle(e.target.value)}} value={title}   className='input'/>

                        <label htmlFor="price" className='updating'>Price</label>
                        <input type="text" onChange={(e) => {setPrice(e.target.value)}} value={price} name="price" className='input'/>

                        <label htmlFor="desciption" className='updating2'>Description</label>
                        <input type="text" onChange={(e) => {setDescription(e.target.value)}} value={description} name="description" className='input'/>

                        <input type="submit" className='button' placeholder='Update'/>
                        <Link to={`/`} className="home">Home</Link>
                    </form>

        </div>
    );
}

export default Update