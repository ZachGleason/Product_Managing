import React, { useState, useEffect } from "react";
import ProductForm from "./components/PersonForm";
import DisplayProducts from "./components/DisplayProducts";
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
    <>
      <ProductForm products={products} setProducts={setProducts}/>
      <DisplayProducts products={products} removeObj={removeObj} />  
    </>
  );
}

export default App;
