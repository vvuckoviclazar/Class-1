import React, { useState } from "react";

function Products(props) {
  let [products, setProducts] = useState({
    "iPhone 14": 1000,
    "iPhone 15": 1250,
    "Samsung S23 Ultra": 1100,
  });

  let [newProductName, setNewProductName] = useState("");
  let [newProductPrice, setNewProductPrice] = useState("");

  function addProducts() {
    if (newProductName === "") {
      return;
    }

    if (newProductPrice === "") {
      return;
    }

    let newProduct = { [newProductName]: parseInt(newProductPrice) };

    setProducts((currentProducts) => ({
      ...currentProducts,
      ...newProduct,
    }));
  }

  return (
    <>
      <button onClick={(e) => setProducts({})}>Delete Products</button>
      {Object.entries(products).map(([phone, price]) => (
        <p>
          {phone}, price: ${price} with tax: ${calculateTax(price, props.tax)}
        </p>
      ))}

      <div>
        <input
          onInput={(e) => setNewProductName(e.target.value)}
          type="text"
          placeholder="Enter product name"
        />
        <input
          onInput={(e) => setNewProductPrice(e.target.value)}
          type="number"
          placeholder="Enter product price"
        />
        <button onClick={addProducts}>Add new product</button>
      </div>
    </>
  );
}

function calculateTax(price, tax) {
  return (price * tax) / 100 + price;
}

export default Products;
