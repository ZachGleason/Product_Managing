import React, { useState } from 'react'
import axios from 'axios';
import '../App.css'
const ProductForm= () => {
    const [ title, setTitle ] = useState("")
    const [ price, setPrice ] = useState("")
    const [ description, setDescription ] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        //make a post request to create a new person    

        axios.post('http://localhost:8000/product', {
        title, 
        price,
        description,
    })
        .then(res=>{
            console.log(res);   
            console.log(res.data); })
        .catch(err=>console.log(err))
}

    return (
        <div>
            <h1 className='product'>Create Product</h1>
            <form onSubmit={ submitHandler } className="form">
                <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Title..." className='input'/>
                <input type="text" onChange={(e) => setPrice(e.target.value)} placeholder="Price..." className='input'/>
                <input type="text" onChange={(e) => setDescription(e.target.value)} placeholder="Description..." className='input'/>
                <input type="submit" className='button' />
            </form>

            {/* {Product.map((Product) => )} */}
        </div>
    )
}
export default ProductForm;