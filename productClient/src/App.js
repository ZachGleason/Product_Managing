import { BrowserRouter, Routes, Route, Fragment } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import ProductForm from "./components/PersonForm";
import DisplayProducts from "./components/DisplayProducts";
import Detail from './components/Detail';
import Update from './components/Update';
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]); 


  const removeObj = productId => {
    setProducts(products.filter(product => product._id != productId)); 
  }

  useEffect(() => {
    axios
      .get("http://localhost:5000/allproducts")
      .then((result) => setProducts(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><ProductForm products={products} setProducts={setProducts}/> <DisplayProducts  products={products} removeObj={removeObj}/></>} />
          <Route element={<Detail />} path="/product/:id"/>     
          <Route element={<Update />} path="/update/:id"/> 
        </Routes> 
      </BrowserRouter> 
    </div>
  );
}

export default App;
