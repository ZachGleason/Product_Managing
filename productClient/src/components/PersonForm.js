import React, { useState } from 'react'
import axios from 'axios';
import '../App.css'

const ProductForm= (props) => {
    const {products, setProducts} = props;
    const [ title, setTitle ] = useState("")
    const [ price, setPrice ] = useState("")
    const [ description, setDescription ] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/product', {
        title, 
        price,
        description,
    })
        .then(res=>{
            setProducts([...products, res.data])
            e.target.reset()
            setTitle('')
            setPrice('')
            setDescription('') })
        .catch(err=>console.log(err))

}

    return (
        <div>
            <h1 className='product'>Create Product</h1>
            <form onSubmit={ submitHandler } className="form">

                <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Title..." className='input'/>
                {title.length < 2 && title.length > 0 ? (
                <p> Title must be greater than than 2 characters </p> ): null}

                <input type="text" onChange={(e) => setPrice(e.target.value)} placeholder="Price..." className='input'/>
                {price < 10 && price > 0 ? (
                <p> Price must be greater than than $10 </p> ): null}

                <input type="text" onChange={(e) => setDescription(e.target.value)} placeholder="Description..." className='input'/>
                {description.length < 8 && description.length > 0 ? (
                <p>Description must be greater than than 8 characters </p> ): null}

                <input type="submit" className='button' />
            </form>
        </div>
    )
}
export default ProductForm;